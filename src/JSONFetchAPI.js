import React, { useEffect, useState } from "react";

function JSONFetchAPI() {
  const [answer, setAnwser] = useState();

  const getAnswer = async () => {
    const res = await fetch("https://yesno.wtf/api");
    const answer = await res.json();
    setAnwser(answer);
  };

  useEffect(() => {
    getAnswer();
  }, []);

  return( 
    <div>{JSON.stringify(answer)}</div>
  );
}

export default JSONFetchAPI;