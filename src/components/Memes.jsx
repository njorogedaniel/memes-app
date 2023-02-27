import React from "react";
import { useState } from "react";
import { memes } from "../data";

export default function Memes() {
    const time = new Date()
    const now = time.getHours()
    const length = Math.random() * memes.length
    let randomNumber = Math.floor(length)
    const defaultImage = memes[2].url

    const [memeImage, setMemeImage] = React.useState(
        {
            topText:"",
            bottomText:"",
            randomImageUrl:defaultImage
        }
    )


function handleClick(event) {
    event.preventDefault()
    setMemeImage(prevMemeImage => {
        return {
            ...prevMemeImage,
            randomImageUrl:memes[randomNumber].url
        }
    }
    )    
}

// Handling the form data dynamically

// Initialize a form state 

const [memeText, setMemeText] = React.useState(
    {
    topText:"",
    bottomText:"",
    isSubscribed:true
})
// Handling changing state of the input boxes

function handleChange(event){
    
    
    setMemeText(prevMemeText => {
        const {name, value, type, checked} = event.target  //Destructuring the object 
        return{
            ...prevMemeText, 
            [name]: type === "checkbox" ? checked : value // The change you want to track
        }
    })
    
}
    return(
        <div className="main-content">
            
            <p>The time is: {now}</p>
            <form onSubmit={handleClick}>
                
                <input className="input"type="text" 
                placeholder="top text" name="topText" onChange={handleChange} value={memeText.topText}></input>
                <input className="input"type="text" 
                placeholder="bottom text" name="bottomText" onChange={handleChange} value={memeText.bottomText}></input>
                <button className="button" >Get New Meme</button>
            </form>
            
            <div className="image-container">
                {/* { && <span>{memeText.topText}</span>} */}
                <img id="img"src={memeImage.randomImageUrl}alt="image comes here" />
                <h2 className="meme-text top">{memeText.topText}</h2>
                <h2 className="meme-text bottom">{memeText.bottomText}</h2>
               
            </div>  
            <input type="checkbox" id="subscribe" name="isSubscribed"checked={memeText.isSubscribed} onChange={handleChange}></input>
            <label htmlFor="subscribe">Subscribe for More Memes</label>

            
        </div>  
    )
}

