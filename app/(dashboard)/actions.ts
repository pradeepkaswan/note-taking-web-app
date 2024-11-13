// import { sql } from "@vercel/postgres";

// export async function createNote({ userId, title, content }) {
//   try {
//     const { rows } = await sql`
//       INSERT INTO notes (user_id, title, content)
//       VALUES (${userId}, ${title}, ${content})
//       RETURNING id, title, content, created_at;
//       `;
//     return rows[0];
//   } catch (error) {
//     throw error;
//   }
// }

// export async function fetchNotesByUserId(
//   userId: string,
//   includeArchived = false,
// ) {
//   try {
//     const { rows } = await sql`
//       SELECT n.*, array_agg(t.name) as tags
//       FROM notes n
//       LEFT JOIN note_tags nt ON n.id = nt.note_id
//       LEFT JOIN tags t ON nt.tag_id = t.id
//       WHERE n.user_id = ${userId}
//       ${includeArchived ? sql`` : sql`AND n.is_archived = false`}
//       GROUP BY n.id
//       ORDER BY n.created_at DESC;
//       `;
//     return rows;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function searchNotes({
//   userId,
//   query,
// }: {
//   userId: string;
//   query: string;
// }) {
//   try {
//     const { rows } = await sql`
//       SELECT DISTINCT n.*, array_agg(t.name) as tags
//       FROM notes n
//       LEFT JOIN note_tags nt ON n.id = nt.note_id
//       LEFT JOIN tags t ON nt.tag_id = t.id
//       WHERE n.user_id = ${userId}
//       AND (
//         n.title ILIKE ${`%${query}%`} OR
//         n.content ILIKE ${`%${query}%`} OR
//         EXISTS (
//           SELECT 1 FROM tags t2
//           JOIN note_tags nt2 ON t2.id = nt2.tag_id
//           WHERE nt2.note_id = n.id AND t2.name ILIKE ${`%${query}%`}
//         )
//       )
//       GROUP BY n.id
//       ORDER BY n.created_at DESC;
//     `;
//     return rows;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function createTag({
//   userId,
//   name,
// }: {
//   userId: string;
//   name: string;
// }) {
//   try {
//     const { rows } = await sql`
//       INSERT INTO tags (user_id, name)
//       VALUES (${userId}, ${name})
//       ON CONFLICT (user_id, name) DO NOTHING
//       RETURNING id, name;
//       `;
//     return rows[0];
//   } catch (error) {
//     throw error;
//   }
// }

// export async function fetchNotes() {}

// export async function fetchTags() {}
