import React from "react"

export default function Header(props:any){
    
    function toggleState()
    {
      props.setShowEditOrSave((prevState:any) => !prevState)
    }
    
    return(
        <header>
            <h2 id="header-text">Edit Mode</h2>
            <input
            type="checkbox" 
            name='showEdit'
            onChange={toggleState}
            id='switch'
            />
            <label htmlFor="switch">Toggle</label>
            <h2 id="header-text">Preview Mode</h2>
        </header>
    )
}