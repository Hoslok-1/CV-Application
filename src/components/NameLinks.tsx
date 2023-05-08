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
        <form id = "name-links-form">
            <div className="form-input">
                <div>Full Name:</div>
                
                <input
                    type="text"
                    onChange={handleChange}
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    />
            </div>
            <div className="form-input">
                <div>Github Link:</div>
                <input
                    type="text"
                    onChange={handleChange}
                    name="githubLink"
                    placeholder="Github Link"
                    value={formData.githubLink}
                />
            </div>
            <div className="form-input">
                <div>Linkdin Link:</div>
                <input
                    type="text"
                    onChange={handleChange}
                    name="linkdinLink"
                    placeholder="Linkdin Link"
                    value={formData.linkdinLink}
                />
            </div>
            <div className="form-input">
                <div>Summary:</div>
                <textarea
                    onChange={handleChange}
                    name="summary"
                    placeholder="Summary of your professional career"
                    value={formData.summary}
                />
            </div>
        </form>
    )
}