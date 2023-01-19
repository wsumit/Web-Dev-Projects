import React,{useState} from "react";
import './App.css';
import CreateNote from "./CreateNote.jsx"
import Note from "./Note.jsx";


function App() {
    const [notes,setNotes]=useState([]);

    const addNote=(note)=>{
        setNotes((prev)=>{

           note.id=prev.length;
  
        return [ ...prev,note]    
       });

       console.log(notes);

    }

    const deleteNote=(id)=>{

        setNotes((prev)=>{
                    return prev.filter((note,i)=>{
                        return i!==id;
                    })  
        });

        console.log(notes);
    }

   return (
    
        <div className="container">
        
            <h2 className="heading">
                Keeper
            </h2>

            <CreateNote add={addNote}  />

            {
                notes.map((note,i)=><Note title={note.title} text={note.text} key={i} id={i} delete={deleteNote}/>
               )
            }
            
           </div>

   );

}

export default App;
