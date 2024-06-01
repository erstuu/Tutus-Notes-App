import notesData from "@/components/notesData.js";
import Sidebar from "@/components/Sidebar.jsx";
import ListNote from "@/components/ListNote.jsx";
import NoteEditor from "@/components/NoteEditor.jsx";
import { useState } from "react";

const App = () => {
    const [notes, setNotes] = useState(notesData);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedNote, setSelectedNote] = useState(null);

    const handleNoteClick = (notes) => {
        setSelectedNote(notes);
        setTitle(notes.title);
        setContent(notes.content);
    };

    const handleAddNote = ({title, content}) => {
        const newNote = {
            id: notes.length + 1,
            title,
            content,
            date: new Date().toLocaleDateString('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };
        setNotes([newNote, ...notes]);
    };

    const handleUpdateNote = ({title, content}) => {
        const updatedNote = {
            ...selectedNote,
            title,
            content,
            date: new Date().toLocaleDateString('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };
        const updatedNotes = notes.filter((note) => note.id !== selectedNote.id);
        setNotes([updatedNote, ...updatedNotes]);
        setSelectedNote(updatedNote);
    };

    const handleCancelNote = () => {
        setTitle("");
        setContent("");
        setSelectedNote(null);
    };

    const handleDeleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
        if (selectedNote && selectedNote.id === id) {
            setSelectedNote(null);
            setTitle("");
            setContent("");
        }
    };

    return(
        <div className="grid min-h-screen w-full lg:grid-cols-[240px_1fr]">
            <Sidebar/>
            <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr] gap-4 p-4 lg:p-6">
                <ListNote
                    notes={notes}
                    setTitle={setTitle}
                    setContent={setContent}
                    handleNoteClick={handleNoteClick}
                />
                <NoteEditor
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    handleAddNote={handleAddNote}
                    selectedNote={selectedNote}
                    setSelectedNote={setSelectedNote}
                    handleCancel={handleCancelNote}
                    handleUpdateNote={handleUpdateNote}
                    handleDeleteNote={handleDeleteNote}
                />
            </div>
        </div>
    );
}

export default App;
