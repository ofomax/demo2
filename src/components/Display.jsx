



import React from 'react'

function Display(props) {
  return (
    <div>
        {props.message.map((item,index)=>(
            <h3 key={index}>{item}</h3>
        ))}
    </div>
  )
}

export default Display