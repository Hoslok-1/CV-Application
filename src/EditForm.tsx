import React from "react"
import './cssFiles/EditForm.css'
import WorkExp from "./components/WorkExp"
import NameLinks from "./components/NameLinks"
import Education from './components/Education';
import Skills from "./components/Skills";


export default function EditForm(props:any)
{
    const [dataShown,setDataShown] = React.useState({
        WorkExperience:false,
        showEducation:false
        
    })
    
    
    function workExpToggle(){
        setDataShown(prevData => {
          return {
            ...prevData,
            WorkExperience:!prevData.WorkExperience
          }
        })
    }

    function educationToggle(){
      setDataShown(prevData => {
        return {
          ...prevData,
          showEducation:!prevData.showEducation
        }
      })
    }
    
    return(

        <div>
          <NameLinks formData = {props.formData} setFormData = {props.setFormData}/>
          <div className = "edu-button" id = "button-2"><button onClick ={educationToggle}>{dataShown.showEducation ? "Hide" : "Add Education"}</button></div>
          {dataShown.showEducation && <Education formData = {props.formData} setFormData = {props.setFormData} />}
          <div className="work-exp-button" id = "button-2"><button onClick={workExpToggle}>{dataShown.WorkExperience ? "Hide" : "Add work experience"}</button></div>
          {dataShown.WorkExperience && <WorkExp formData = {props.formData} setFormData = {props.setFormData}/>}
          <Skills formData = {props.formData} setFormData = {props.setFormData} />
        </div>
    )
}