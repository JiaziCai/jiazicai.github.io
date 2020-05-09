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
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)} key={playlist.id}
            sx={{px: 3,
                py: [4, 4],}}
                style={{paddingTop:'2rem'}}
                >
                <div className="cardContainer">
                    <div className="cardImage" style={{ justifyContent: "center",
    display: "flex"}}>
                        <img src={playlist.image} height="163.8" width="287.4" alt="Pic 1"/>
                    </div>
                    <div className="cardContent">
                        <h3 style={{marginBottom:'0'}}>{playlist.name}</h3>
                        <span>{playlist.info}</span>
                    </div>
                    <div className="back" ref={backEl}>{playlist.answer}
                    <br/>
                    <br/>
                    <div className="website">
                    <a class="web" href={"https://" + playlist.website} target="_blank">{playlist.website}</a>
                    <br/>
                    <a class="git" href={"https://" + playlist.github} target="_blank">{playlist.github}</a>
                    </div>
                    </div>
                    </div>
                </div>
                </Animated>
    )
}


