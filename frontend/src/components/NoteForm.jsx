import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoteContext } from '../context/NoteContext'

function NoteForm() {
    const { createNote } = useContext(NoteContext)
    const navigate = useNavigate();
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!note.title || !note.content) return
        createNote(note)
        setNote({ title: "", content: "" })
        navigate("/");
    }

    return (
        <div className="max-w-xl mx-auto mt-20 bg-gray-100 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Create a New Note</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter Title"
                    className="w-full px-4 py-2 rounded-lg bg-gray-300 text-black placeholder-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                    value={note.title}
                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
                <textarea
                    placeholder="Write your content here..."
                    className="w-full px-4 py-2 rounded-lg bg-gray-300 text-black placeholder-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                    rows="5"
                    value={note.content}
                    onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-lg shadow-md"
                >
                    Add Note
                </button>
            </form>
        </div>
    )
}

export default NoteForm;