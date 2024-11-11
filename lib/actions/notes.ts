"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

interface Note {
  id: number;
  title: string;
  content: string;
  is_archived: boolean;
  created_at: string;
  updated_at: string;
}

export async function getNotes(archived = false) {
  const stmt = db.prepare(`
    SELECT 
      n.*,
      GROUP_CONCAT(t.name) as tags
    FROM notes n
    LEFT JOIN note_tags nt ON n.id = nt.note_id
    LEFT JOIN tags t ON nt.tag_id = t.id
    WHERE n.is_archived = ?
    GROUP BY n.id
    ORDER BY n.created_at DESC
  `);

  return stmt.all(archived ? 1 : 0) as (Note & { tags: string })[];
}

export async function getNotesByTag(tagName: string) {
  const stmt = db.prepare(`
    SELECT 
      n.*,
      GROUP_CONCAT(t.name) as tags
    FROM notes n
    JOIN note_tags nt ON n.id = nt.note_id
    JOIN tags t ON nt.tag_id = t.id
    WHERE t.name = ?
    GROUP BY n.id
    ORDER BY n.created_at DESC
  `);

  return stmt.all(tagName) as (Note & { tags: string })[];
}

export async function getArchivedNotes() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   throw new Error('Unauthorized')
  // }

  const stmt = db.prepare(`
    SELECT 
      n.*,
      GROUP_CONCAT(t.name) as tags
    FROM notes n
    LEFT JOIN note_tags nt ON n.id = nt.note_id
    LEFT JOIN tags t ON nt.tag_id = t.id
    WHERE n.is_archived = 1 AND n.user_id = ?
    GROUP BY n.id
    ORDER BY n.updated_at DESC
  `);

  // return stmt.all(user.id) as any[]
}

export async function createNote(data: {
  title: string;
  content: string;
  tags: string[];
}) {
  const { title, content, tags } = data;

  const transaction = db.transaction(() => {
    const insertNote = db.prepare(`
      INSERT INTO notes (title, content)
      VALUES (?, ?)
    `);

    const noteResult = insertNote.run(title, content);
    const noteId = noteResult.lastInsertRowid as number;

    if (tags.length > 0) {
      const insertTag = db.prepare(`
        INSERT OR IGNORE INTO tags (name)
        VALUES (?)
      `);

      const linkNoteTag = db.prepare(`
        INSERT INTO note_tags (note_id, tag_id)
        SELECT ?, id FROM tags WHERE name = ?
      `);

      for (const tag of tags) {
        insertTag.run(tag);
        linkNoteTag.run(noteId, tag);
      }
    }

    return noteId;
  });

  const newNoteId = transaction;

  revalidatePath("/notes");
  return newNoteId;
}

export async function updateNote(
  id: number,
  data: {
    title: string;
    content: string;
    tags: string[];
  },
) {
  const { title, content, tags } = data;

  const transaction = db.transaction(() => {
    const updateNote = db.prepare(`
      UPDATE notes 
      SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    updateNote.run(title, content, id);

    const removeTags = db.prepare(`
      DELETE FROM note_tags
      WHERE note_id = ?
    `);

    removeTags.run(id);

    if (tags.length > 0) {
      const insertTag = db.prepare(`
        INSERT OR IGNORE INTO tags (name)
        VALUES (?)
      `);

      const linkNoteTag = db.prepare(`
        INSERT INTO note_tags (note_id, tag_id)
        SELECT ?, id FROM tags WHERE name = ?
      `);

      for (const tag of tags) {
        insertTag.run(tag);
        linkNoteTag.run(id, tag);
      }
    }
  });

  transaction();
  revalidatePath(`/notes/${id}`);
}

export async function searchNotes(query: string) {
  const stmt = db.prepare(`
    SELECT 
      n.*,
      GROUP_CONCAT(t.name) as tags
    FROM notes n
    LEFT JOIN note_tags nt ON n.id = nt.note_id
    LEFT JOIN tags t ON nt.tag_id = t.id
    WHERE 
      n.title LIKE ? OR 
      n.content LIKE ? OR
      t.name LIKE ?
    GROUP BY n.id
    ORDER BY n.created_at DESC
  `);

  const searchPattern = `%${query}%`;
  return stmt.all(searchPattern, searchPattern, searchPattern) as (Note & {
    tags: string;
  })[];
}

export async function archiveNote(id: number) {
  // const user = await getCurrentUser()

  // if (!user) {
  //   throw new Error('Unauthorized')
  // }

  const stmt = db.prepare(`
    UPDATE notes
    SET is_archived = 1
    WHERE id = ? AND user_id = ?`);

  // const result = stmt.run(id, user.id)

  // if (result.changes === 0) {
  //   throw new Error('Note not found')
  // }

  revalidatePath("/notes");
  revalidatePath(`/notes/archived`);
}

export async function restoreNote(id: number) {
  // const user = await getCurrentUser()

  // if (!user) {
  //   throw new Error('Unauthorized')
  // }

  const stmt = db.prepare(`
    UPDATE notes
    SET is_archived = 0
    WHERE id = ? AND user_id = ?`);

  // const result = stmt.run(id, user.id)

  // if (result.changes === 0) {
  //   throw new Error('Note not found')
  // }

  revalidatePath("/notes");
  revalidatePath(`/notes/archived`);
}

// export async function deleteNote(note: Note) {
//   return prisma.note.delete({
//     where: {
//       id: note.id,
//     },
//   });
// }

export async function getTags() {
  const stmt = db.prepare(`
    SELECT 
      t.name
    FROM tags t
    ORDER BY t.name ASC
  `);

  return stmt.all() as string[];
}
