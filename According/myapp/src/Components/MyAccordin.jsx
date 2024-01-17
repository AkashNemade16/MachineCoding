import React, { useState } from 'react'

const MyAccordin = ({title,content}) => {
    const [show,setShow] = useState(false)
  return (
    <div>
        <div>
            {title}
            <button onClick={()=>setShow(!show)}>{`${show?'-':'+'}`}</button>
        </div>
        <div>{show && content}</div>
    </div>
  )
}

export default MyAccordin