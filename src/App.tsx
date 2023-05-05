import React from 'react';
import './App.css';
import EditForm from './EditForm';
import SavedForm from './SavedForm';

export let workExpArr:any = [];

function App()
{
  const [showEditOrSave,setShowEditOrSave] = React.useState(true)
  
  const [formData,setFormData] = React.useState({
    fullName:"",
    githubLink:"",
    linkdinLink:"",
    summary:"",
    jobTitle:[],
    companyName:[],
    joiningDate:[],
    jobDesc:[],
    universityName:[],
    uniCity:[],
    uniDegree:[],
    uniFrom:[],
    uniTo:[]
  })

  function toggleState()
  {
    setShowEditOrSave(prevState => !prevState)
  }

  return(
    <div>
      <button onClick={toggleState}>Save</button>
      {showEditOrSave ? <EditForm formData = {formData} setFormData = {setFormData} /> : <SavedForm formData = {formData} setFormData = {setFormData} />}
    </div>
  )
}

export default App;
