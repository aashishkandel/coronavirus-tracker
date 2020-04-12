import styled from "styled-components";

export const DataCard = styled.div`
    background: grey;
    font-size: 1rem;
    /* height: 200px; */
    margin: 0 15px;
    border-radius: 15px;
    height: 200px;
    @media only screen and (max-width:600px){
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
    margin: 3px;
    color: purple;
`;