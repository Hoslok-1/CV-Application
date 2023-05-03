import React from "react"

export default function NameLinks(props:any)
{
    const {formData,setFormData} = props; //destructing the props 

    
    function handleChange(event: any){
        setFormData((prevState: any)=>{
            return {
                ...prevState,
                [event.target.name]:event.target.value
            }
        })
    }
    console.log(formData)


    return(
        <form id = "name-&-links-form">
            <input
                type="text"
                onChange={handleChange}
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
            />
            <input
                type="text"
                onChange={handleChange}
                name="githubLink"
                placeholder="Github Link"
                value={formData.githubLink}
            />
            <input
                type="text"
                onChange={handleChange}
                name="linkdinLink"
                placeholder="Linkdin Link"
                value={formData.linkdinLink}
            />
            <textarea
                onChange={handleChange}
                name="summary"
                placeholder="Summary of your professional career"
                value={formData.summary}
            />
        </form>
    )
}