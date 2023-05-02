import React from 'react';
import './App.css';
import EditForm from './EditForm';
import SavedForm from './SavedForm';

function App()
{
  const [showEditOrSave,setShowEditOrSave] = React.useState(true)
  
  function toggleState()
  {
    setShowEditOrSave(prevState => !prevState)
  }

  return(
    <div>
      <button onClick={toggleState}>Save</button>
      {showEditOrSave ? <EditForm /> : <SavedForm />}
    </div>
  )
}

export default App;
