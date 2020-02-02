import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux
} from "react-icons/fa";

import "./styles/VideoGames.scss";

function VideoGame(props) {
  return (
    <div className="videogames">
      <div className="videogames_container">
        {props.videoGamesList.map(videogame => (
          <div className="videogame" key={videogame.id}>
            <div className="portada">
              <img src={videogame.background_image} alt={videogame.name} />
            </div>
            <div className="info">
              <div className="platforms">
                {videogame.parent_platforms.map(platform => (
                  <div key={platform.platform.id}>
                    {platform.platform.slug === "pc" ? <FaWindows /> : null}
                    {platform.platform.slug === "mac" ? <FaApple /> : null}
                    {platform.platform.slug === "linux" ? <FaLinux /> : null}
                    {platform.platform.slug === "playstation" ? (
                      <FaPlaystation />
                    ) : null}
                    {platform.platform.slug === "xbox" ? <FaXbox /> : null}
                  </div>
                ))}
              </div>
              <p className="name">{videogame.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGame;
