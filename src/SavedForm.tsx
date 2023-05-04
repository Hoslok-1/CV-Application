import React from "react"

export default function SavedForm(props:any)
{
    const {formData,setFormData} = props

    return(
        <div>
            <div className="name-links">
                <h1>{formData.fullName}</h1>
                <p>Github:{formData.githubLink} &emsp;&emsp; Linkdin:{formData.linkdinLink}</p>
                <p>Summary:{formData.summary}</p>
            </div>
            <div className="work-exp">
                
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
            <div className="education">
                <h2>Education</h2>
                {Object.keys(formData.universityName).map((key: string,index: React.Key | null | undefined) => (
                    <div key = {index}>
                        <b>{parseInt(key)+1}</b> 
                        <p>&emsp; University Name: {formData.universityName[key]}</p> 
                        <p>&emsp; Degree: {formData.uniDegree[key]}</p>
                        <p>&emsp; City: {formData.uniCity[key]}</p>
                        <p>&emsp; From: {formData.uniFrom[key]}</p>
                        <p>&emsp; To: {formData.uniTo[key]}</p>
                    </div>
                ))}
            </div>  
        </div>
    )
}