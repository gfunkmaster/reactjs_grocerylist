import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(() => {
    const timeout = setTimeout(() =>{
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout);
    //we get a new set of timeout, when we add list to our depedency
  }, [list])
  return (
    <>
    <p className={`alert alert-${type}`}>{msg}</p>
    </>
  )
}

export default Alert
