import { useLocation } from 'react-router-dom';
import './Card.css';

export default function Card() {


    const location = useLocation()
    const { doc, docId } = location.state

    function addContentEditable(value) {
        const dom = document.querySelector(`#a${value}`);
        dom.contentEditable = true;
        dom.focus();
        dom.style.transform = "scale(1.5)"
        dom.style.transition = "transform 0.25s ease";
    }

    function removeAll(value) {
        const dom = document.querySelector(`#a${value}`);
        updateNote(dom.firstChild.nodeValue);
        dom.style.transform = ''
        dom.blur();
    }

    function updateNote(note) {
        console.log(docId);
        // axios.patch(`http://localhost:8080/note/${docId}?$name={note}`);
    }

    function maxSize(value) {
        // const dom = document.querySelector(`#${value}`);
        // dom.style.transform = "scale(3)"
        // console.log(dom);
    }

    return (
        <section className='grid-cards'>
            {doc && doc.map(({ title, id }) => {
                return (
                    <span id={'a' + id} className='card-class' key={id}
                        onMouseOut={() => removeAll(id)} onClick={() => addContentEditable(id)}>{title}
                        <svg style={{ marginTop: 'auto' }} xmlns="http://www.w3.org/2000/svg" onClick={() => maxSize(id)} viewBox="0 0 20 20" fill="currentColor" height={12} width={12}>
                            <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" />
                        </svg>
                    </span>
                )
            })
            }
        </section>
    );

}