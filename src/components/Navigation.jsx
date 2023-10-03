import { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigation() {

    function openDialog() {
        const dialog = document.querySelector("dialog");
        dialog.showModal()
    }

    const [documentList, setDocList] = useState([]);

    function closeDialog() {
        const dialog = document.querySelector("dialog");
        dialog.close()
    }

    function addDocument() {
        const docTitle = document.getElementById('document-text').value;
        const dialog = document.querySelector("dialog");
        setDocList(prev => [...prev, docTitle]);
        dialog.close()
        document.getElementById('document-text').value = '';
    }

    return (
        <section className='left-nav-container'>
            <h2>Documents</h2>
            <svg style={{ cursor: 'pointer' }} onClick={() => openDialog()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height={25} width={25}>
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
            <dialog className='dialog-box'>
                <svg style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={closeDialog} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height={25} width={25} className="w-5 h-5">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                <label htmlFor='document-text' >Enter Document Name</label>
                <input id='document-text' type='text'></input>
                <button onClick={addDocument}>Add</button>
            </dialog>
            {
                documentList.map((res, index) => {
                    return <Link to={`/${index}`} key={index} >{res}</Link>
                })
            }
        </section>
    );


}