import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPeoples, fetchOtherPage } from "../../services/swapi";
import './people.css';

function People() {

    const { list: people, loading } = useSelector(state => state.peoples);

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchAllPeoples());
    }, [dispatch])

    const listPeople = () => {
        return people.map((people, index) => {
            return <li key={index}>{people.name}</li>
        });
    }

    const randomNumber = () => {
        return Math.floor(Math.random() * 9) + 1;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="list">
                        {
                            loading ? listPeople() : 'Cargando...'
                        }
                    </ul>
                    <button className="btn btn-primary" onClick={() => dispatch(fetchOtherPage(randomNumber()))}>Aleatorio</button>
                </div>
            </div>
        </div>
    )
}

export default People;