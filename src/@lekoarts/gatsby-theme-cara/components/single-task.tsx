import React, {useState, useEffect, useRef} from 'react'
import "../../../styles/global.css"

export default function SingleTask({playlist}) {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('initial');

    const frontEl = useRef();
    const backEl = useRef();

    return (
        <div className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)} key={playlist.id}>
                    <div className="cardImage" style={{ justifyContent: "center",
    display: "flex"}}>
                        <img src={playlist.image} height="163.8" width="287.4" alt="Pic 1"/>
                    </div>
                    <div className="cardContent" style={{paddingLeft:'1.5rem', paddingRight:'1.5rem'}}>
                        <h3 style={{marginBottom:'0'}}>{playlist.name}</h3>
                        <span>{playlist.info}</span>
                    </div>
                    <div className="back" ref={backEl}>{playlist.answer}
                    <br/>
                    <br/>
                    <div style={{top:'80%', fontSize:'1.24rem'}}>
                    <a href={"https://" + playlist.website} target="_blank">{playlist.website}</a>
                    <br/>
                    <a href={"https://" + playlist.github} target="_blank">{playlist.github}</a>
                    </div>
                    </div>
                </div>
    )
}


