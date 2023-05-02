import React from "react"

export default function SavedForm(props:any)
{
    console.log(props)
    return(
        <div>
            <h2>Job Experience</h2>
            <p>Company Name:{props.formData.companyName}</p>
            <p>Job Title:{props.formData.jobTitle}</p>
        </div>
    )
}