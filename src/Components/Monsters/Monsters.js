import React, { useEffect } from "react";

const Monsters = ()=>{

    const makeAPICall = (url) =>{
        fetch(url).then(response => response.json())
            .then(data => console.log('monsters:', data))
    }

    useEffect(()=>{
        const monstersURL = 'https://www.moogleapi.com/api/v1/monsters'
        makeAPICall(monstersURL)
    }, [])

    return(
        <div className="monsters">Monsters Go Here</div>
    )
}

export default Monsters;