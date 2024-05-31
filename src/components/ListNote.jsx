const ListNote = ({ notes, handleNoteClick}) => {
    return (
        <div className="border shadow-sm rounded-lg overflow-auto">
            <h2 className="px-4 py-2 font-semibold border-b">All Notes</h2>
            <ul className="divide-y">
                {notes.map((note, index) =>
                <li className="p-4 hover:bg-slate-100" key={index} onClick={() => handleNoteClick(note)}>
                    <div className="flex justify-between">
                        <h3 className="font-medium">{note.title}</h3>
                        <small className="text-gray-500">{note.date}</small>
                    </div>
                </li>
                )}
            </ul>
        </div>
    );
};

export default ListNote;