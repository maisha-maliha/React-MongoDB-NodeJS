import React, { useEffect } from "react";
import Axios from 'axios'
export default function App(){
    const [list, setList] = React.useState("");
    useEffect(()=>{
        Axios.get('http://localhost:4000/api/shoes')
        .then((res)=> setList(res.data));
    },[]);
    let val = [];
    for(let i = 0; i < list.length; i++){
        val[i] = <li key={list[i].id}>{list[i].name}</li>;
    }
    return (
        <div>
            <h1>hello world</h1>
            <p>i live in this world</p>
            <ol>
                {val}
            </ol>
        </div>
    )
}