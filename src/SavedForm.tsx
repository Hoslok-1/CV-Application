import React from "react"

export default function SavedForm(props:any)
{
    const {formData,setFormData} = props

    return(
        <div>
            <div className="work-exp">
                <h1>{formData.fullName}</h1>
                <p>Github:{formData.githubLink} &emsp;&emsp; Linkdin:{formData.linkdinLink}</p>
                <p>Summary:{formData.summary}</p>
                <h2>Work Experience</h2>
                {Object.keys(formData.jobTitle).map((key,index) =>(
                    <div key = {index}>
                        <b>{parseInt(key)+1}</b> 
                        <p>&emsp; Job Title: {formData.jobTitle[key]}</p> 
                        <p>&emsp; Company Name: {formData.companyName[key]}</p>
                        <p>&emsp; Joining Date: {formData.joiningDate[key]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}