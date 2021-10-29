import React, { useEffect } from "react";

const Games = ()=>{

    const makeAPICall = (url) =>{
        fetch(url).then(response => response.json())
            .then(data => console.log(data))
    }

    useEffect(()=>{
        const gamesURL = 'https://www.moogleapi.com/api/v1/games'
        makeAPICall(gamesURL)
    }, [])

    return(
        <div className="games">Games Go Here</div>
    )
}

export default Games;