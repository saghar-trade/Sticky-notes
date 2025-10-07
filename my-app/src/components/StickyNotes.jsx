import Note from "./Note";

export default function StickyNotes() {
  const notesData = [
    {
      title: "Title #1",
      content: "Text Content 1",
      color: "#f5ed0bff",
      rotate: "-5deg",
    },
    {
      title: "Title #2",
      content: "Text Content 2",
      color: "#caffb9",
      rotate: "2deg",
    },
    {
      title: "Title #3",
      content: "Text Content 3",
      color: "#4c42d7ff",
      rotate: "-3deg",
    },
    {
      title: "Title #4",
      content: "Text Content 4",
      color: "#f18913ff",
      rotate: "1deg",
    },
    {
      title: "Title #5",
      content: "Text Content 5",
      color: "#20becdff",
      rotate: "-2deg",
    },
    {
      title: "Title #6",
      content: "Text Content 6",
      color: "#74a498ff",
      rotate: "3deg",
    },
  ];
  return (
    <section className="board">
      <ul className="notes">
        {notesData.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            color={note.color}
            rotate={note.rotate}
          />
        ))}
      </ul>
    </section>
  );
}
