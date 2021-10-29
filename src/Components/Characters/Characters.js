import React, { useEffect } from "react";

const Characters = ()=>{


    const makeAPICall = (url) =>{
        fetch(url).then(response => response.json())
            .then(data => console.log('characters:', data))
    }

    useEffect(()=>{
        const charactersURL = 'https://www.moogleapi.com/api/v1/characters'
        makeAPICall(charactersURL)
    }, [])

    return(
        <div className="characters">Characters Go Here</div>
    )
}

export default Characters;