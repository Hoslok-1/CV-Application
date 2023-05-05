import React from "react"

export default function WorkExp(props:any)
{

    const [workItems,setWorkItems] = React.useState({
        companyName:"",
        jobTitle:"",
        joiningDate:"",
        jobDesc:""
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
        props.setFormData((prevState: any) => {
            return{
                ...prevState,
                jobTitle:[...prevState.jobTitle,workItems.jobTitle],
                companyName:[...prevState.companyName,workItems.companyName],
                joiningDate:[...prevState.joiningDate,workItems.joiningDate],
                jobDesc:[...prevState.jobDesc,workItems.jobDesc],
            }
        })
        setWorkItems({
            companyName:"",
            jobTitle:"",
            joiningDate:"",
            jobDesc:""
        })
        alert("Work Experience Added"); 
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
            <input
                type = "text"
                placeholder="Joining Date"
                onChange = {handleChange}
                name = "joiningDate"
                value = {workItems.joiningDate}
            />
            <textarea
                onChange={handleChange}
                name="jobDesc"
                value={workItems.jobDesc}
                placeholder="Summary of the work done in this company"
            />
            <button>Submit</button>
        </form>
    )
}

