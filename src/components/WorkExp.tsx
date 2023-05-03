import React from "react"

export default function WorkExp(props:any)
{

    const [workItems,setWorkItems] = React.useState({
        companyName:"",
        jobTitle:""
    })
    

    function handleChange(event:any){
        setWorkItems((prevData: any) => {
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
        props.setFormData((prevState: any) => {
            return{
                ...prevState,
                jobTitle:[...prevState.jobTitle,workItems.jobTitle],
                companyName:[...prevState.companyName,workItems.companyName]
            }
        })
   

    }

    console.log(workItems)
    return (
        <form id="work-exp-form" onSubmit={handleSubmit}>
            <input
                type = "text"
                placeholder="Job Title"
                onChange = {handleChange}
                name = "jobTitle"
                value = {workItems.jobTitle}
            />
            <input
                type = "text"
                placeholder="Company Name"
                onChange = {handleChange}
                name = "companyName"
                value = {workItems.companyName}
            />
            <button>Submit</button>
        </form>
    )
}

