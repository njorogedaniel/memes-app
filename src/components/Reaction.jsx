import React from "react";

export default function Reaction(props) {

    const [reaction,setReaction] = React.useState(
        {
            message:"Like",
            color:"#9ACD32"

        }
    ) 
    const status = reaction
    
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
       
    return(
        <div className="reaction">
           <img src="./like.png" alt=""/>

        </div>
        
    )
}