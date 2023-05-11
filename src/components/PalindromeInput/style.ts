import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 0 0 10px;
    flex-direction: column;
    align-items: center;
    width: 50%;
    justify-content: flex-start;
`;

export const Textarea = styled.textarea`
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    padding: 5px 10px;
    font-size: 16px;
    color: gray;
    background-color: #fff;
    border: none;
    width: 100%;
    resize: none;
    height: 80px;
    outline: 3px solid #a6cccc;
`;

export const Button = styled.button`
    background-color: #a6cccc;
    color: black;
    padding: 1em 2.5em;
    border-radius: 5px;
    margin: 1em;
    border: none;
    font-family: 'Courier New', Courier, monospace; 
    font-weight: bold;
    letter-spacing: 3px;
    
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

`;

export const Image = styled.img`
    width: 30px;
`;
