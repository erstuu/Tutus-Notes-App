import { useState } from 'react';
import {Button} from "@/components/ui/button.jsx";

const NoteEditor = ({
                        title,
                        setTitle,
                        content,
                        setContent,
                        handleAddNote,
                        selectedNote,
                        setSelectedNote,
                        handleCancel,
                        handleDeleteNote,
                        handleUpdateNote }) => {

    const [isModified, setIsModified] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setIsModified(true);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
        setIsModified(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if both title and content are not empty
        if (!title.trim() || !content.trim()) {
            return;
        }
        if (selectedNote) {
            handleUpdateNote({ title, content });
            setSelectedNote(null);
        } else {
            handleAddNote({ title, content });
        }
        setTitle("");
        setContent("");
        setIsModified(false);
    };

    return (
        <form className="border shadow-sm rounded-lg p-4" onSubmit={handleSubmit}>
            <h2 className="font-semibold mb-2">Note Editor</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                className="w-3/4 rounded border p-2 my-4"
            />
            {selectedNote && (
                <Button
                    variant="destructive"
                    className="ml-4 px-3 w-1/5"
                    onClick={() => handleDeleteNote(selectedNote.id)}
                >
                    Delete Note
                </Button>
            )}
            <textarea
                placeholder="Content Here"
                value={content}
                onChange={handleContentChange}
                className="w-full h-60 p-2 rounded border resize-none mb-4"
            />
            {selectedNote ? (<div>
                <Button className="ml-auto w-1/5" onClick={handleUpdateNote} disabled={!isModified}>Save</Button>
                <Button variant="secondary" className="ml-2 px-6 hover:bg-slate-300" onClick={handleCancel}>Cancel</Button>
            </div>) : (<Button className="ml-auto">Add New Note</Button>)}
        </form>
    );
};

export default NoteEditor;