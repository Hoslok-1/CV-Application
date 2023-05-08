import React from 'react';
import './App.css';
import EditForm from './EditForm';
import SavedForm from './SavedForm';
import Header from './components/Header';

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
    uniTo:[],
    userSkills:[""]
  })



  return(
    <div>
      <Header setShowEditOrSave = {setShowEditOrSave} />
      {showEditOrSave ? <EditForm formData = {formData} setFormData = {setFormData} /> : <SavedForm formData = {formData} setFormData = {setFormData} />}
    </div>
  )
}

export default App;
