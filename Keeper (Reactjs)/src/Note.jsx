import React,{useState} from "react";
// import DeleteIcon from "@material-ui/icons/Delete"
// import DeleteIcon from '@mui/icons-material/Delete';
function Note(props){
    return (
        <div className="note">
        
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <span onClick={()=>{
                    props.delete(props.id);
            }}
            >🗑️
            </span>
        </div>
    );
}

export default Note;