import Note from "../models/noteModel.js";

// Create Note Route
export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and Content are required" });
        }
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(200).json(newNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get Notes Route
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update Note Route
export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updateNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete Note Route
export const deletNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}