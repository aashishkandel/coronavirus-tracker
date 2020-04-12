import React from 'react'
import DataFromAPI from './DataFromAPI';
import CountrySelector from './CountrySelector';
import { StyledH2 } from './Styled';

function Indexpage() {
    return (
        <React.Fragment>
            <StyledH2> Global Data </StyledH2>
            <DataFromAPI url ='https://covid19.mathdro.id/api'/>
            <CountrySelector/>
        </React.Fragment>
    )
}

export default Indexpage
