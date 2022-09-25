import React from "react";

function ImagemFixa(url){
    url = "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/2-sol.jpg"
    return(
        <div>
            <img src={url} alt="Sol"/>
        </div>
    );
}

export default ImagemFixa;