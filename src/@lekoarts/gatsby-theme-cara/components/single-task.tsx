import React, {useState, useEffect, useRef} from 'react'
import "../../../styles/global.css"
import { jsx } from "theme-ui";
import {Animated} from "react-animated-css";

export default function SingleTask({playlist}) {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('initial');

    const frontEl = useRef();
    const backEl = useRef();

    return (
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="cardContainer">
          <div className="cardImage" style={{ justifyContent: "center",
    display: "flex"}}>
                        <img className="innerImage" src={playlist.image} alt="Pic 1"/>
                    </div>
                    <div className="cardContent">
                        <h3 style={{marginBottom:'0'}}>{playlist.name}</h3>
                        <span>{playlist.info}</span>
                    </div>
                    </div>
          </div>
          <div className="flip-card-back">
          <div className="back" ref={backEl}>{playlist.answer}
                    <br/>
                    <div className="website">
                        <div style={{display:"flex", justifyContent:"flex-start"}}>
                    <a className="web" rel="noreferrer noopener" href={"https://" + playlist.website} target="_blank"><button className="linkButton">Website</button></a>
                    </div>
                    {playlist.github && (<div style={{display:"flex", justifyContent:"flex-end"}}>
                    <a className="git" rel="noreferrer noopener" href={"https://" + playlist.github} target="_blank"><button className="linkButton">Github</button></a>
                    </div>
                    )}
                    </div>
                    </div> 
          </div>
        </div>
      </div>
    )
}


