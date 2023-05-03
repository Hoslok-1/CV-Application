import React from "react"
import WorkExp from "./components/WorkExp"



export default function EditForm(props:any)
{
    const [dataShown,setDataShown] = React.useState({
        WorkExperience:false
    })
    
    
    function workExpToggle(){
        setDataShown(prevData => {
          return {
            ...prevData,
            WorkExperience:!prevData.WorkExperience
          }
        })
    }
    
    return(

        <div>
          {dataShown.WorkExperience && <WorkExp formData = {props.formData} setFormData = {props.setFormData}/>}
          <button onClick={workExpToggle}>{dataShown.WorkExperience ? "Hide" : "Add work experience"}</button>
        </div>
    )
}