import React from "react"

export default function WorkExp()
{
    const [formDataWorkExp,setFormDataWorkExp] = React.useState({
        jobTitle:"",
        companyName:"",

    })
    console.log(formDataWorkExp)
    function handleChange(event:any){
        setFormDataWorkExp(prevData => {
            return {
                ...prevData,
                [event?.target.name]:event?.target.value
            }
        })
    }
    
    return (
        <form>
            <input
                type = "text"
                placeholder="Job Title"
                onChange = {handleChange}
                name = "jobTitle"
                value = {formDataWorkExp.jobTitle}
            />
            <input
                type = "text"
                placeholder="Company Name"
                onChange = {handleChange}
                name = "companyName"
                value = {formDataWorkExp.companyName}
            />
        </form>
    )
}