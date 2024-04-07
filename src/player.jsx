import { useState } from "react"
export default function Player({name,symbol,isactive,handlename}){
    const[currname,setname]=useState(name)
    const[isediting,setediting]=  useState(false)
    function handleclick(){
        setediting(editing=>!editing)
    if (isediting){
        handlename(symbol,currname)
    }
    }
    let playername=<span className="player-name">{currname}</span>
    function handlechange(event) {
        setname(event.target.value)
        
    }
    if(isediting){
        playername=<input type="text" required value={currname} onChange={handlechange}/>
    }
    return(
    <li className={isactive?'active':undefined}>
    <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleclick}>{isediting ? "save" : "edit"}</button>
    </li>
    )
}