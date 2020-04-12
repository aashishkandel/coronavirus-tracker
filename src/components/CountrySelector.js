import React, { useState } from 'react';
import getDataFromAPI from "../utils/getDataFromAPI";
import DataFromAPI from './DataFromAPI';
import { StyledH2 } from './Styled';

export default function CountrySelector() {
    const [currentCountry, setCurrentCountry] = useState('USA')
    const countryURL = `https://covid19.mathdro.id/api/countries/${currentCountry}`

    const countries = getDataFromAPI('https://covid19.mathdro.id/api/countries');
    /* console.log('data fetching') */
    if(!countries) return <p>hold on, getting required data...</p>
    return(
        <>
            <StyledH2>Data by Country</StyledH2>
            <select style={{marginBottom:"5px"}} defaultValue='US' onChange = {(e)=>setCurrentCountry(e.target.value)}>
                {countries.countries.map((arr)=><option key ={arr.name} value ={arr.name} >{arr.name}</option>)}
            </select>
            <DataFromAPI url ={countryURL}/>
        </>
    )
}
