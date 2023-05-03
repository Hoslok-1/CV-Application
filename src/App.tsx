import React from 'react';
import './App.css';
import EditForm from './EditForm';
import SavedForm from './SavedForm';

export let workExpArr:any = [];

function App()
{
  const [showEditOrSave,setShowEditOrSave] = React.useState(true)
  
  const [formData,setFormData] = React.useState({
    jobTitle:[],
    companyName:[],
  })

  function toggleState()
  {
    setShowEditOrSave(prevState => !prevState)
  }

  return(
    <div>
      <button onClick={toggleState}>Save</button>
      {showEditOrSave ? <EditForm formData = {formData} setFormData = {setFormData} /> : <SavedForm formData = {formData}/>}
    </div>
  )
}

export default App;