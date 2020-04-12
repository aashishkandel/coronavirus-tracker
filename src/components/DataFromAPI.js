import getDataFromAPI from "../utils/getDataFromAPI";
import React from 'react';
import { DataCard, CardContainer} from "./Styled";

export default function DataFromAPI({url}){
    const dataFromAPI  = getDataFromAPI(url);
    if(!dataFromAPI) return <p>hold on, getting required data...</p>
    /* console.log(dataFromAPI) */
    return(
        <CardContainer>
            <DataCard>
                <h3>Confirmed:</h3>
                <span style={{color:"yellow", fontSize:"20px", marginTop:"-15px"}}>{dataFromAPI.confirmed.value}</span>
            </DataCard>
            <DataCard>
                <h3>deaths:</h3>
                <span style={{color:"red", fontSize:"20px", marginTop:"-15px"}}>{dataFromAPI.deaths.value}</span>
            </DataCard>
            <DataCard>
                <h3>recovered:</h3>
                <span style={{color:"green", fontSize:"20px", marginTop:"-15px"}}>{dataFromAPI.recovered.value}</span>
            </DataCard>
        </CardContainer>
    )
}
