import React, { useState,useEffect } from "react";
import './ChampLevel.css';

export default function ChampLevel(){

    const [championslevel,setChampionlevel] = useState([]);

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = () =>{
      fetch("https://dif00l.4lima.de/api/defence_api.php?action=champlevel")
        .then(res => res.json())
        .then(function(data){
            setChampionlevel(data);
        })
       
    }

    return(
        <table id="champlevel" align="center" border="0" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <th>Champ</th>
                    <th>Tier</th>
                    <th>PI</th>
                    <th>Player</th>
                </tr>
            </thead>
            <tbody>
                {
                    championslevel.map((c,id)=>{
                        return(
                            <tr key={id}>
                                <td>{c.champname}</td>
                                <td>{c.champion_tier}</td>
                                <td>{c.champion_pi}</td>
                                <td>{c.Name}</td>
                            </tr>
                        )
                    })
                    
                }
                <tr></tr>
            </tbody>
        </table>
    )
} 