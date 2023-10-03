import './Card.css'

export default function Card({ response }) {
    const namesArray = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emma",
        "Frank",
        "Grace",
        "Hank",
        "Isabella",
        "Jack",
        "Katie",
        "Liam",
        "Mia",
        "Nathan",
        "Olivia",
        "Pamela",
        "Quincy",
        "Rachel",
        "Samuel",
        "Tina",
        "Ulysses",
        "Victoria",
        "Walter",
        "Xander",
        "Yvonne",
        "Zachary",
        "Abigail",
        "Benjamin",
        "Catherine",
        "Daniel",
        "Emily",
        "Fiona",
        "George",
        "Hannah",
        "Isaac",
        "Jessica",
        "Kevin",
        "Laura",
        "Michael",
        "Natalie",
        "Oscar",
        "Penelope",
        "Quinn",
        "Riley",
        "Sophia",
        "Tyler",
        "Ursula",
      ];
            
    function addContentEditable(value) {
        document.querySelector(`.${value}`).contentEditable = true;
    }
    return (
        <section className='grid-cards'> 
            {namesArray && namesArray.map((value, index) => {
                return <span className={value} key={index}
                    onClick={() => addContentEditable(value)}>{value}</span>
            })
            }
        </section>
    );

}