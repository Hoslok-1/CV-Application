import React from "react"
import WorkExp from "./components/WorkExp"

export default function EditForm()
{
    const [dataShown,setDataShown] = React.useState({
        WorkExperience:false
    })
    
      
    
    function workExpToggle(){
        console.log("ran")
        setDataShown(prevData => {
          return {
            ...prevData,
            WorkExperience:!prevData.WorkExperience
          }
        })
    }
    
    return(

        <div>
          {dataShown.WorkExperience && <WorkExp />}
          <button onClick={workExpToggle}>Add work experience</button>
        </div>
    )
}