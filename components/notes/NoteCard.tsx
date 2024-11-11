// type Props = {
//   note: Note & { tags: string }
//   tags: string[]
// }

export default function NoteCard({ note, tags }) {
  return (
    <div className="flex flex-col justify-center gap-3 rounded-md p-2 hover:bg-neutral-100">
      <h2 className="text-preset-3">{note.title}</h2>

      <ul className="flex gap-1">
        {tags.length > 0 && tags.map((tag) => (
          <li
            key={tag}
            className="flex items-center gap-2 rounded bg-neutral-200 px-[6px] py-0.5"
          >
            <span className="text-preset-6">{tag}</span>
          </li>
        ))}
      </ul>
      
      <p className="text-preset-6 text-neutral-700">
        {new Date(note.lastEdited).toLocaleDateString()}
      </p>
    </div>
  );
}
