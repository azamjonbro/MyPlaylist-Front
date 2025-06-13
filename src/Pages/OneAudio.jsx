import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function OneAudio() {
  let [oneMusic, setOneMusic] = useState([])
  let { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/api/songs/" + id)
      .then((res) => res.json())
      .then((data) => setOneMusic(data));
  }, []);
  return (
    <div className="onePlaylist">
     {console.log(oneMusic)}
     <audio src={oneMusic.audioUrl} controls ></audio>
    </div>
  );
}

export default OneAudio;
