import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 1rem auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #eeeeee;
    padding: 1rem;
    text-align: center;
    
    @media (min-width:500px){
        width: 450px;
    }
`;
const person = (props) => {

    return (
        <StyledDiv>
            <p onClick={props.click}>I 'm {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </StyledDiv>
    )
};

export default person;