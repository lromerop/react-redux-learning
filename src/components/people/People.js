import { useSelector } from "react-redux";
import './people.css';

function People() {

    const people = useSelector(state => state.people.results);

    const listPeople = () => {
        return people.map((people, index) => {
            return <li key={index}>{people.name}</li>
        });
    }
    
    return (
        <div>
            <ul className="list">
            {
                people ? listPeople() : 'Cargando...'
            }
            </ul>
        </div>
    )
}

export default People;