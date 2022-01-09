import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type:''});


const  handleSubmit = (e) => {
  e.preventDefault();
 if(!name) {
  //  display alert
  showAlert(true,'danger', 'Enter valid value'); 
 

 } 
 else if (name && isEditing){
// deal with edit
 }
 else {
  //  show alert, showwing successfull message when we add item
  showAlert(true,'success', 'item added to the grocery list')
  // create new item
  const newItem = {id: new Date().getTime().toString(), title: name};
  setList([...list, newItem])
  setName('');
 }
}

// buildning a function to put display alert
const showAlert = (show=false, type="", msg="") => {
  setAlert({show,type, msg})
}

const clearList = () => {
  showAlert(true, 'danger', 'empty List');
  setList([]);
}

  return(
     <>
      <section className="section-center">
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert}  />}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input type="text" 
            className='grocery'
             placeholder='e.g. eggs'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            <button type='submit' className='submit-btn'>
             {/*  value by defualt is false : submit */}
              {isEditing? 'edit':'submit'}
            </button>
          </div>

        </form>
        {/* if we have sometgin in list array then we show */}
        {list.length > 0 && (
           <div className="grocery-container">
           <List items={list} />
           <button className="clear-btn" type='submit' onClick={clearList}>Clear</button>
         </div>

        )}
       
      </section>
     </>)
}

export default App
