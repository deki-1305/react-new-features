import React from 'react';
import Note from './Note';
import { useContext } from 'react';
import NotesContext from '../context/notes-context';

export default function NoteList() {
    const { notes } = useContext(NotesContext);
    return (
        notes.map((note) => (
            <Note key={note.title} note={note} />
        ))
    )
}
