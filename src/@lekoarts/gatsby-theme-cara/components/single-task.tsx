import React, { useState, useEffect, useRef } from "react";
import "../../../styles/global.css";
import { jsx } from "theme-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SingleTask({ playlist }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();
  const isBig = typeof window !== "undefined" && window.innerWidth >= 400;

  const MyImage = (
    <>
      {isBig ? (
        <LazyLoadImage
          alt={playlist.name}
          height='163.8px'
          width='287.4x'
          effect='blur'
          src={playlist.image} // use normal <img> attributes as props
        />
      ) : (
        <LazyLoadImage
          alt={playlist.name}
          height='122.85px'
          width='215.55pxpx'
          effect='blur'
          src={playlist.image} // use normal <img> attributes as props
        />
      )}
    </>
  );

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div className='cardContainer'>
            <div
              className='cardImage'
              style={{ justifyContent: "center", display: "flex" }}
            >
              {MyImage}
            </div>
            <div className='cardContent'>
              <h3 style={{ marginBottom: "0" }}>{playlist.name}</h3>
              <span>{playlist.info}</span>
            </div>
          </div>
        </div>
        <div className='flip-card-back'>
          <div className='back' ref={backEl}>
            <span>{playlist.answer}</span>
            <br />
            <div className='website'>
              {playlist.website && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <a
                    className='web'
                    rel='noreferrer noopener'
                    href={"https://" + playlist.website}
                    target='_blank'
                  >
                    <button className='linkButton'>Website</button>
                  </a>
                </div>
              )}
              {playlist.github && (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <a
                    className='git'
                    rel='noreferrer noopener'
                    href={"https://" + playlist.github}
                    target='_blank'
                  >
                    <button className='linkButton'>Github</button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
