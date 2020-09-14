import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
    background-color: green;
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: lightgreen;
        color: black;
    }
 `;

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: 'g5j', name: 'Otto', age: 24},
            {id: 'spef', name: 'Peti', age: 29},
            {id: 'dplsdf3', name: 'Gabor', age: 30},
        ],
        showPersons: false
    });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {id: 'index_1', name: 'Husika', age: 30},
                {id: 'index_2', name: 'your father', age: 40},
                {id: 'index_3', name: 'bro', age: 50},
            ],
            showPersons: personsState.showPersons
        })
    };

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
    }

    const classes = [];

    if (personsState.persons.length <= 2) {
        classes.push('red');
    }
    if (personsState.persons.length <= 1) {
        classes.push('bold');
        classes.push('bigFont');
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton onClick={togglePersonsHandler}>Toggle persons</StyledButton>
            {persons}
        </div>
    );
}

export default app;


