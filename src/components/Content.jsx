import React from "react";
import { useState } from "react";
import { memes } from "../data";

export default function Content() {
    // Handle button click
    // Getting a random url 


   
    const length = Math.random() * memes.length
    let randomNumber = Math.floor(length)
    // const [image, setImage] = React.useState(memes[2].url)
    const defaultImage = memes[2].url

    const [memeImages, setMemeImage] = React.useState(
        {
            topText:"Hello",
            bottomText:"World",
            randomImageUrl:defaultImage
        }
    )


// function that gets a random meme image 
function getRandomImage() {
    setMemeImage(prevMemeImage => ({...prevMemeImage,randomImageUrl:memes[randomNumber].url}))
    console.log(memeImages)
}

   
   
        

    // Use of state to display an image in the image div 
    
        

    return(
        <div className="main-content">
            <div className="input">
                <input id="top-txt" type="text" placeholder="   top text"></input>
                <input id="bottom-txt" type="text" placeholder="bottom text"></input>
            </div>
            <div className="submit">
                <button className="button" onClick={getRandomImage} >Get New Meme Image</button>
            </div>
            <div className="image-container">
                <img id="img"src={memeImages.randomImageUrl}alt="image comes here" />
               
            </div>  
            <p>{memeImages.topText}</p>
            <p>{memeImages.bottomText}</p>
        </div>  
    )
}

