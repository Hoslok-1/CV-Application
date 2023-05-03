import React from "react"

export default function SavedForm(props:any)
{
    console.log(props.formData)

    return(
        <div>
            <div className="work-exp">
                <h2>Work Experience</h2>
                {Object.keys(props.formData.jobTitle).map((key,index) =>(
                    <div key = {index}>
                        <p>Job Title: {props.formData.jobTitle[key]}</p>
                        <p>Company Name: {props.formData.companyName[key]}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}