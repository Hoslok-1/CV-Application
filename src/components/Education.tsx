import React from "react"

export default function Education(props:any){

    const {setFormData} = props

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
            <div className="form-input">
                <div>Name:</div>
                <input
                    type="text"
                    name="universityName"
                    value={items.universityName}
                    onChange={handleChange}
                    placeholder="University Name"
                />
            </div>
            <div className="form-input">
                <div>City:</div>
                <input
                    type="text"
                    name="uniCity"
                    value={items.uniCity}
                    onChange={handleChange}
                    placeholder="City"
                />
            </div>
            <div className="form-input">
                <div>Degree:</div>
                <input
                    type="text"
                    name="uniDegree"
                    value={items.uniDegree}
                    onChange={handleChange}
                    placeholder="University Degree"
                />
            </div>
            <div className="form-input">
                <div>From:</div>
                <input
                    type="text"
                    name="uniFrom"
                    value={items.uniFrom}
                    onChange={handleChange}
                    placeholder="Beginning Of Course"
                />
            </div>
            <div className="form-input">
                <div>To:</div>
                <input
                    type="text"
                    name="uniTo"
                    value={items.uniTo}
                    onChange={handleChange}
                    placeholder="End Of Course"
                />
            </div>
            <button className="edu-submit">Submit</button>
        </form>
    )
}