import { useState,useEffect } from "react";
import Data from "./data.json";

const UseData = () =>{
    const [dataviaHook,setDataviahook] = useState([]);

    useEffect(()=>{
        fetch(Data)
        .then(setDataviahook(Data))
    },[]);

    return [
        dataviaHook,setDataviahook,
    ]


}

export default UseData;