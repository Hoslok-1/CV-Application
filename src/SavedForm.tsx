import React from "react"

export default function SavedForm(props:any)
{
    const {formData,setFormData} = props

    function deleteWork(idx:number){
        console.log(idx)
        setFormData((prevState:any) => {
            const newObj = {
                ...prevState,
                jobTitle:[],
                companyName:[],
                joiningDate:[],
                jobDesc:[]
            }
            for(let i = 0;i<(formData.jobTitle).length;i++)
            {
                console.log(prevState.jobTitle[i],prevState.companyName[i],prevState.joiningDate[i],prevState.jobDesc[i])
                if(i===idx){
                    continue
                }
                else{
                    newObj.jobTitle.push(prevState.jobTitle[i])
                    newObj.companyName.push(prevState.companyName[i])
                    newObj.joiningDate.push(prevState.joiningDate[i])
                    newObj.jobDesc.push(prevState.jobDesc[i])
                }
            }
            return newObj
        })
    }

    function deleteEducation(idx:number){
        setFormData((prevState:any) => {
            const newObj = {
                ...prevState,
                universityName:[],
                uniDegree:[],
                uniCity:[],
                uniFrom:[],
                uniTo:[]
            }
            for(let i = 0;i<(formData.universityName).length;i++)
            {
                if(i===idx){
                    continue
                }
                else{
                    newObj.universityName.push(prevState.universityName[i])
                    newObj.uniDegree.push(prevState.uniDegree[i])
                    newObj.uniCity.push(prevState.uniCity[i])
                    newObj.uniFrom.push(prevState.uniFrom[i])
                    newObj.uniTo.push(prevState.uniTo[i])

                }
            }
            return newObj
        })
    }

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
                        <p>&emsp; Job Summary:<br/>&emsp;&emsp;{formData.jobDesc[key]}</p>
                        <button onClick={() => deleteWork(index)} >X</button>
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
                        <button onClick={() => deleteEducation(parseInt(key))} >X</button>

                    </div>
                ))}
            </div>  
        </div>
    )
}