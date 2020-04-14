import React, { useState } from 'react';
import Select from 'react-select';
import getDataFromAPI from "../utils/getDataFromAPI";
import DataFromAPI from './DataFromAPI';
import { StyledH2, SelectContainer } from './Styled';

export default function CountrySelector() {
    const [currentCountry, setCurrentCountry] = useState('USA')
    const countryURL = `https://covid19.mathdro.id/api/countries/${currentCountry}`

    const countries = getDataFromAPI('https://covid19.mathdro.id/api/countries');
    if(!countries) return <p>hold on, getting required data...</p>

    let countryOptions =[];
    countries.countries.map((arr)=>countryOptions.push({value:arr.name, label: arr.name}))

    const handlechange = (currentCountry) =>{
        setCurrentCountry(currentCountry.value)
    }

    const Styles = {
        control: styles => ({ ...styles, width:'270px' }),
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 10,
            width:'250px',
        }),
        menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        }),
          
    };

    return(
        <>
            <StyledH2>Data by Country</StyledH2>
            {/* <select style={{marginBottom:"5px"}} defaultValue='US' onChange = {(e)=>setCurrentCountry(e.target.value)}>
                {countries.countries.map((arr)=><option key ={arr.name} value ={arr.name} >{arr.name}</option>)}
            </select> */}

            <SelectContainer><Select placeholder='US' styles={Styles} onChange={handlechange} options={countryOptions}/></SelectContainer>      
            <DataFromAPI url ={countryURL}/>
        </>
    )
}
