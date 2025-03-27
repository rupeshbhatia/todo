import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
function TodoTask({data,remove,move}) {
    
  return (
    <ul className='mt-2 list-group'>
      {
        data.map((item,idx)=>{
            return(
        <li className='list-group-item d-flex justify-content-between align-items-center' key={idx}>
            <p>
        {item} 
        </p>
        <div className='d-flex justify-content-center gap-1' style={{width:"max-content"}}>
        <Button className='rounded rounded-circle px-3 fw-bold text-white'variant='warning' onClick={()=>move(idx)}>&uarr;</Button>
        <Button variant='danger rounded rounded-pill' onClick={()=>remove(item)}>Delete</Button>
       
        </div>
        </li>

            )

        })
      }
    </ul>
  )
}

export default TodoTask