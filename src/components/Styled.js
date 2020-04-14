import styled from "styled-components";

export const DataCard = styled.div`
    background: #6983aa;
    font-size: 2rem;
    /* height: 200px; */
    margin: 0 15px;
    border-radius: 15px;
    height: 200px;
    @media only screen and (max-width:700px){
        border-radius: 10px;
        font-size: 1rem;
        height: 100px;
        margin: 10px 7px;
        margin-bottom: 44px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CardContainer = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; */

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
`;

export const StyledH2 = styled.h2`
    margin: 5px;
    color: #00adb5;
`;

export const SelectContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin-bottom:10px;
`;