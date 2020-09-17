import React, {useState} from 'react';
import classes from './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: 'g5j', name: 'Otto', age: 24},
            {id: 'spef', name: 'Peti', age: 29},
            {id: 'dplsdf3', name: 'Gabor', age: 30},
        ],
        showPersons: false
    });

    const nameChangeHandler = (event) => {
        const peopleName = event.target.value.length > 3 ? event.target.value : 'Peti';
        setPersonsState({
            persons: [
                {id: 'g5j', name: 'Otto', age: 24},
                {id: '02r3[', name: peopleName, age: 55},
                {id: 'dplsdf3', name: 'Gabor', age: 30},
            ],
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
    let btnClass = '';

    if (personsState.showPersons) {
        persons = (
            <div>
                {
                    personsState.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={index === 1 ? (event) => nameChangeHandler(event, person) : null}
                            />
                        );
                    })
                }
            </div>
        );

        btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (personsState.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (personsState.persons.length <= 1) {
        assignedClasses.push(classes.bold);
        assignedClasses.push(classes.bigFont);
    }

    return (
        <div className={classes.App}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={togglePersonsHandler}>Toggle persons</button>
            {persons}
        </div>
    );
}

export default app;


