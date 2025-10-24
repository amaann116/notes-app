import { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all notes
    const getNotes = async () => {
        setLoading(true);
        try {
            const response = await BACKEND_URL.get("/get-notes");
            setNotes(response.data);
        } catch (error) {
            console.error("Error : ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getNotes();
    }, [])

    // Create a note
    const createNote = async (note) => {
        try {
            const response = await BACKEND_URL.post("/create-note", note);
            setNotes([response.data, ...notes]);
        } catch (error) {
            console.error("Error : ", error);
        }
    }

    // Update a note
    const updateNote = async (id, updateNote) => {
        try {
            const response = await BACKEND_URL.put(`/update-note/${id}`, updateNote);
            getNotes();
            setNotes(notes.map((note) => {
                note._id === id ? response.data : note
            }))
        } catch (error) {
            console.error("Error : ", error);
        }
    }

    // Delete a note
    const deleteNote = async (id) => {
        try {
            await BACKEND_URL.delete(`/delete-note/${id}`);
            getNotes();
            setNotes(notes.filter((note) => {
                note._id !== id
            }))
        } catch (error) {
            console.error("Error : ", error);
        }
    }

    return (
        <NoteContext.Provider value={{ notes, loading, getNotes, createNote, updateNote, deleteNote }}>
            {children}
        </NoteContext.Provider>
    )
}