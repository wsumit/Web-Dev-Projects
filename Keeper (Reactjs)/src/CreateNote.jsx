import react, { useState } from "react";
import './App.css';


function CreateNote(props){

    const [content,setContent]=useState({title:"",text:""});
    const [show,setShow]=useState(false);

    

    function handle(e){
        const {name,value}=e.target;

       setContent((prev)=>{
            return {...prev,[name]:value}
       })
    }
    


    return(
        <div className="create-note" onClick={()=>{
                setShow(true);
        }}>

            {show?<input type="text"  name="title" value={content.title} onChange={handle} placeholder="Title"/>:null}
            
            <textarea x  name="text" value={content.text} onChange={handle} placeholder="Type a Note"/>
                
            <span onClick={()=>{

                props.add(content);
                
                setContent({title:"",text:""});
            }} style={{transform:`scale( ${show ?"1":"0"})`}} >
           +
            </span>
            
        </div>
    );
}

export default  CreateNote;