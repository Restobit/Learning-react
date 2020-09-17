import React, {useState} from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Cockpit from "../components/Cockpit/Cockpit";

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: 'g5j', name: 'Otto', age: 24},
            {id: 'spef', name: 'Peti', age: 29},
            {id: 'dplsdf3', name: 'Gabor', age: 30},
        ],
        showPersons: false
    });

    const nameChangeHandler = (event, person) => {
        const peopleName = event.target.value;
        person.name = peopleName;
        setPersonsState({
            persons: personsState.persons,
            showPersons: personsState.showPersons
        })
    }

    const togglePersonsHandler = () => {
        const doesShow = personsState.showPersons;
        setPersonsState({
            persons: [...personsState.persons],
            showPersons: !doesShow
        })
    }

    const deletePersonHandler = (personIndex) => {
        personsState.persons.splice(personIndex, 1);
        setPersonsState({
            ...personsState
        })
    }

    let persons = null;

    if (personsState.showPersons) {
        persons = <ErrorBoundary>
            <Persons
                persons={personsState.persons}
                clicked={deletePersonHandler}
                changed={nameChangeHandler}/>
        </ErrorBoundary>;
    }

    return (
        <div className={classes.App}>
            <Cockpit
                showPersons={personsState.showPersons}
                persons={personsState.persons}
                clicked={togglePersonsHandler}
            />
            {persons}
        </div>
    );
}

export default app;


