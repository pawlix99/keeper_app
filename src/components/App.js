import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function CreateNotes(NoteItem){
    return <Note key={NoteItem.key} title={NoteItem.title} content={NoteItem.content}/>
}

function App() {
    return (
        <div className="App">
            <Header/>
            {notes.map(CreateNotes)}
            <Footer />
        </div>
    );
}

export default App;
