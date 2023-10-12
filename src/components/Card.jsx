import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Card.css';

export default function Card() {

    const { id } = useParams()

    const [response, setResponse] = useState();

    useEffect(() => {
        getNotes();
        //eslint-disable-next-line  
    }, [id]);



    const getNotes = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_PATH}/notes/${id}`
        ).catch(() => {
            console.log('internal server error');
        })
        setResponse(response?.data);
    };





    function addContentEditable(value) {
        const dom = document.querySelector(`#a${value}`);
        dom.contentEditable = true;
        dom.focus();
        dom.style.transform = "scale(1.5)"
        dom.style.transition = "transform 0.25s ease"
        dom.style.overflowY = "auto";
    }

    function removeAll(value) {
        const dom = document.querySelector(`#a${value}`);
        if (dom.style.transform) {
            updateNote(dom.firstChild.nodeValue, value);
            dom.style.transform = ''
            dom.style.overflowY = "hidden";
            dom.blur();
        }
    }

    async function updateNote(note, id) {
        const response = note && await axios.patch(`${process.env.REACT_APP_API_PATH}/note/${id}?name=${note}`);
        console.log(response);
    }

    function maxSize(value) {
        // const dom = document.querySelector(`#${value}`);
        // dom.style.transform = "scale(3)"
        // console.log(dom);
    }

    async function addNotes() {
        let notes = document.querySelector('.notes-input').innerText;
        const res = await axios.post(`${process.env.REACT_APP_API_PATH}/note/${id}`, {
            title: notes
        });
        setResponse((prev) => {
            return prev ? [...prev, res.data] : [res.data]
        });
        document.querySelector('.notes-input').innerHTML = '';
    }

    async function deleteNotes(tempId) {
        const res = await axios.delete(`${process.env.REACT_APP_API_PATH}/note/${tempId}`);
        if (!res?.data) {
            const newList = response.filter(({ id }) => tempId !== id);
            setResponse(newList);
        }
    }

    return (
        <section className='section-card'>
            <div className="notes-card">
                <h3>Add Notes</h3>
                <span className="notes-input" role="textbox" contentEditable ></span>
                <button style={{ background: 'white', color: 'black' }} onClick={addNotes}>Add</button>
            </div >
            <div className='grid-cards'>
                {response && response.map(({ title, id }) => {
                    return (
                        <span role="textbox" id={'a' + id} className='card-class' key={id}
                            onMouseOut={() => removeAll(id)} onClick={() => addContentEditable(id)}>{title}
                            <svg className='close-button' style={{ marginLeft: 'auto', cursor: 'pointer', opacity: '80%' }}
                                onClick={() => deleteNotes(id)}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height={15} width={15} >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                            <svg style={{ marginTop: 'auto' }} xmlns="http://www.w3.org/2000/svg" onClick={() => maxSize(id)} viewBox="0 0 20 20" fill="currentColor" height={12} width={12}>
                                <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" />
                            </svg>
                        </span>
                    )
                })
                }
            </div>
        </section>
    );

}