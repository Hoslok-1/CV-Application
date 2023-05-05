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
        <form>
            <textarea 
                name="userSkills"
                placeholder="Enter technologies you're familiar with. (Maximum 5)"
                value={props.formData.userSkills}
                onChange={handleChange}
            />
        </form>
    )
}