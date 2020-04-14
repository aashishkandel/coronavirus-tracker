import getDataFromAPI from "../utils/getDataFromAPI";
import React from 'react';
import { DataCard, CardContainer} from "./Styled";
import CountUp from "react-countup";

export default function DataFromAPI({url}){
    const dataFromAPI  = getDataFromAPI(url);
    if(!dataFromAPI) return <p>hold on, getting required data...</p>
    /* console.log(dataFromAPI) */
    return(
        <CardContainer>
            <DataCard>
                <h3>Confirmed:</h3>
                <CountUp duration={1.3} end={dataFromAPI.confirmed.value} style={{color:"yellow", marginTop:"-20px"}}/>
            </DataCard>
            <DataCard>
                <h3>deaths:</h3>
                <CountUp duration={1.3} end={dataFromAPI.deaths.value} style={{color:"red", marginTop:"-20px"}}/>
            </DataCard>
            <DataCard>
                <h3>recovered:</h3>
                <CountUp duration={1.3} end={dataFromAPI.recovered.value} style={{color:"green", marginTop:"-20px"}}/>
            </DataCard>
        </CardContainer>
    )
}
