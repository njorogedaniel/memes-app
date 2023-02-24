import React from "react";

export default function Reaction(props) {
    // We need to track the previous state of the button 
    // Therefore we are going to initialise the button as a state 
    const [reaction,setReaction] = React.useState(
        {
            message:"Like",
            color:"#9ACD32"

        }
    )

    // console.log(props.liked) 
    const status = reaction
    console.log(status)
    
    

    // console.log(reaction)

    // Initialise the button text as like
    // const [buttonStyle, setButtonStyle] = React.useState(
    //     {backgroundColor: "black"}
    // )
    const styles = {
        backgroundColor: status ? "#ffffff" : "#9ACD32"
    }
    
    function handleClick() {
        setReaction(() => 
        {
            "Liked",
            "#ffffff"
        })     
        }
       
    // }
    // if 0 people liked the meme, the button text should be like
    // if(reaction === 0) buttonText = "like" else buttonText = "liked byreaction"
    return(
        <div>
           <img style={styles}src="./like.png" alt=""onClick={handleClick} />{reaction.message}
            {/* When this button is clicked 
                Add the number of likes and 
                change the button text into liked
                 */}

        </div>
        
    )
}