import React from "react"

export default function Skills(props:any){



    function handleChange(event:any){
        props.setFormData((prevState:any) => {
            return {
                ...prevState,
                userSkills:event.target.value
            }
        })
    }

    return(
        <form id = "skills-form">
            <div className="form-input">
                <div>Skills/Technologies:</div>
                <textarea 
                    name="userSkills"
                    placeholder="Enter technologies you're familiar with.Seperate the words by white space (Maximum 5)"
                    value={props.formData.userSkills}
                    onChange={handleChange}
                />
                </div>
        </form>
    )
}