import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import './Notes.css'

export default function Notes() {

    const { id } = useParams;

    const [response, setResponse] = useState([]);

    useEffect(() => {
        fetch(`url/${id}`)
            .then(res => res.json())
            .then(response => setResponse(response));
    });

    function addNotes() {
        let notes = document.querySelector('.notes-input').innerHTML;
        fetch('url', {
            method: "POST",
            body: JSON.stringify(notes)
        }).then(res => res.json())
            .then(response => setResponse(response));
        document.querySelector('.notes-input').innerHTML = '';
    }

    return (

        <section className="notes-card">
            <h3>Add Notes</h3>
            <span className="notes-input" role="textbox" contentEditable ></span>
            <button style={{ background: 'white', color: 'black' }} onClick={addNotes}>Add</button>
            <Card notes={response} />
        </section >
    );
}