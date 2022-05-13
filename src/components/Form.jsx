import React from 'react'

function Form(props) {

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("clicked")
    props.newMessage(e.target["message"].value)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="form-control-lg" type="text" name="message"/>
        <button className="btn btn-success btn-lg" type="submit">Add</button>
      </form>
    </div>
  )
}

export default Form