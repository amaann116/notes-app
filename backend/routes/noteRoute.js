import express from "express";
import { createNote, deletNote, getNotes, updateNote } from "../controllers/noteController.js";

const router = express.Router()

router.post("/create-note", createNote);
router.get("/get-notes", getNotes);
router.put("/update-note/:id", updateNote);
router.delete("/delete-note/:id", deletNote);

export default router;