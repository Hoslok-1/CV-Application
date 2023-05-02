import React from "react"

export default function WorkExp(props:any)
{
    
    function handleChange(event:any){
        props.setFormDataWorkExp((prevData: any) => {
            return {
                ...prevData,
                [event?.target.name]:event?.target.value
            }
        })
    }

    
    
    function handleSubmit(event:any)
    {
        event.preventDefault();
        alert("Work Experience Added");  
    }

    console.log(props.formDataWorkExp)
    return (
        <form id="work-exp-form" onSubmit={handleSubmit}>
            <input
                type = "text"
                placeholder="Job Title"
                onChange = {handleChange}
                name = "jobTitle"
                value = {props.formDataWorkExp.jobTitle}
            />
            <input
                type = "text"
                placeholder="Company Name"
                onChange = {handleChange}
                name = "companyName"
                value = {props.formDataWorkExp.companyName}
            />
            <button>Submit</button>
        </form>
    )
}