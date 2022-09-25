import React, { useEffect, useState } from "react";

function Imagem() {
  let imageUrl = "https://i.imgur.com/fHyEMsl.jpg"
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <img src={img} alt="icons" />
    </div>
  );
}

export default Imagem