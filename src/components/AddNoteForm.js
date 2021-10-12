import React, { useState } from 'react';
import { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

export default function AddNoteForm( ) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { dispatch } = useContext(NotesContext);
    const position = useMousePosition();

    const addNote = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_NOTE', title, body})
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <p>Add note</p>
            <p>{position.x} - {position.y}</p>
        <form onSubmit={addNote}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            <button>add note</button>
        </form>
        </div>
    )
}
