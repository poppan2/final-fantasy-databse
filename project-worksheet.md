# Project Overview

## Project Links

- [github repo](https://github.com/poppan2/final-fantasy-databse)
- [add your deployment link]()

## Project Description

This project is to build a website Using React and Final Fanasy API to display the information about the Characters, Monsters, and Games from Final Fantasy Game series.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 
The API I've chosen is the moogleapi, which is the public API for the FInaal Fantasy Game series. The following is an example of retrieving characters' data from 
the moogleapi.

Code Snippet:
	
    const makeAPICall = (url) =>{
        fetch(url).then(response => response.json())
            .then(data => console.log('characters:', data))
    }
    useEffect(()=>{
        const charactersURL = 'https://www.moogleapi.com/api/v1/characters'
        makeAPICall(charactersURL)
    }, [])
    


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [mobile](https://cloudinary.com/console/c-64fb217d0692b911eb013208a046c0/media_library/folders/be66bec184895c743410851070c2f4f585/asset/6d5f3ff6612d203ab05bb0ab115082bb/manage)
- [Desktop](https://cloudinary.com/console/c-64fb217d0692b911eb013208a046c0/media_library/folders/be66bec184895c743410851070c2f4f585/asset/e4b6f557c29dc5bb9d0d3ef3b7e274d8/manage)
- [react architecture](https://cloudinary.com/console/c-64fb217d0692b911eb013208a046c0/media_library/folders/be66bec184895c743410851070c2f4f585/asset/d5fa6175bf70671aceb8b8395a7d539e/manage)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Find and use external api 
- Create Components
- Render data on page 
- Allow user to interact with the page

#### PostMVP 

- TBD

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Main | This will render All Data on the page |
| Characters | This will render the characters data |
| Monsters | This will render the monsters data |
| Games | This will render the games data |
| Character | This will render individual character data |
| Monster | This will render individual monster data |
| Game | This will render individual game data |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| |  |
| Working with API | H | 3hrs|  |  |
| Characters | H | 3hrs | | |
| Monsters | H | 3hrs | | |
| Games | H | 3hrs | | | 
| Character | H | 2hrs | | | 
| Monster | H | 2hrs | | | 
| Game | H | 2hrs | | | 
| Total | H | 21hrs |  |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 
 TBD

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

TBD

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
