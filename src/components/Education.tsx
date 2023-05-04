import React from "react"

export default function Education(props:any){

    const {FormData,setFormData} = props

    const [items,setItems] = React.useState({
        universityName:"",
        uniCity:"",
        uniDegree:"",
        uniFrom:"",
        uniTo:""
    })

    function handleChange(event:any){
        setItems(prevData => {
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }

    console.log(items)

    function handleSubmit(event:any){
        event.preventDefault()
        setFormData((prevState: any) => {
            console.log(prevState)
            return{
                ...prevState,
                universityName:[...prevState.universityName,items.universityName],
                uniCity:[...prevState.uniCity,items.uniCity],
                uniDegree:[...prevState.uniDegree,items.uniDegree],
                uniFrom:[...prevState.uniFrom,items.uniFrom],
                uniTo:[...prevState.uniTo,items.uniTo],
            }
        })
        setItems({
            universityName:"",
            uniCity:"",
            uniDegree:"",
            uniFrom:"",
            uniTo:""
        })
        alert("Education Added"); 
    }

    return(
        <form id="education-form" onSubmit={handleSubmit} >
            <input
                type="text"
                name="universityName"
                value={items.universityName}
                onChange={handleChange}
                placeholder="University Name"
            />
            <input
                type="text"
                name="uniCity"
                value={items.uniCity}
                onChange={handleChange}
                placeholder="City"
            />
            <input
                type="text"
                name="uniDegree"
                value={items.uniDegree}
                onChange={handleChange}
                placeholder="University Degree"
            />
            <input
                type="text"
                name="uniFrom"
                value={items.uniFrom}
                onChange={handleChange}
                placeholder="Beginning Of Course"
            />
            <input
                type="text"
                name="uniTo"
                value={items.uniTo}
                onChange={handleChange}
                placeholder="End Of Course"
            />
            <button>Submit</button>
        </form>
    )
}