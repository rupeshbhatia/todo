import React, {  useEffect, useState } from 'react'
import { Button, Col,Row } from 'react-bootstrap'
import TodoTask from './TodoTask'
import { useNavigate } from 'react-router-dom'

function Todoinput() {
 let data= localStorage.getItem("data")
 data=JSON.parse(data)
let user=localStorage.getItem("name")
user=JSON.parse(user)
  let [task,setTask]=useState("")
  let[err,setErr]=useState(false)
  let [list,setList]=useState([])
    let[api,setApi]=useState({})
    let[show,setShow]=useState(false)
   let navi= useNavigate()
    let apiData=async()=>{
      try{
        let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=9c685aedc9b795900eea88b853a5e4b3&lang=en&units=metric`)
        result=await result.json()
        setApi(result)
        console.log(result)
        setShow(true)
      }
      catch(err){
        console.log(err)
      setShow(false)
      }
    }
    console.log(api)
    useEffect(()=>{
      apiData()
    },[])
  let addTask=()=>{
    if(task.length>0){
      setErr(false)
   setList([...list,task])
   setTask("")
    }
    else{
setErr(true)
    }
  }
  let removeTask=(val)=>{
    let data=list.filter((item)=>{
       return item!=val
    })
   setList(data)
  }
  let priority=(id)=>{
list.splice(id-1,0,list[id])
list.splice(id+1,1)
setList([...list])

  }
let reset=()=>{
 navi("/")
}
  return (<>
  <Row className='mt-3 d-flex justify-content-center p-3 ' >
    <Col lg={5} sm={6}  md={5} className='bg-light p-3 '>
    <h3 className=''>Welcome {user.name}</h3>
   
    </Col>
<Col lg={5} sm={6} md={5} className='bg-light d-flex justify-content-end p-3  '>
<Button variant='warning' onClick={reset}>Logout</Button>
</Col>
</Row>
    <Row style={{margin:"2rem auto"}} className='d-flex justify-content-center gap-2 '>

      <Col lg={5} md={8} sm={12} className='bg-light pb-5 rounded'>
      {
      show?
      <div >
     { api.weather.map((item,idx)=>{
     return(
      <Row key={idx} className='align-items-center'>
      <Col  className='d-flex justify-content-center '> <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="" height={200} />
      </Col>
      <Col >
      <Row className='fs-3 d-flex justify-content-center'>
        <Col  >{item.main } <Col className='fw-bold ' >{ api.main.feels_like}&deg;C</Col></Col>
        

      </Row>
      

</Col>
<Row className='fs-2 fw-bold'>
<Col className='text-center'>{api.name}</Col>
</Row>
      </Row>
     )
      })}
      <Row className='d-flex mt-3 justify-content-evenly text-center fs-4  gap-4 align-items-center'>
     <Col lg={6}>Humidity : {api.main.humidity}%</Col>
    
     
     <Col lg={5}>Wind : {api.wind.speed} km/hr</Col>
     
    <Col lg={6}>Temprature : {api.main.temp} &deg;C </Col>
   
    <Col lg={5}>Visibility : {api.visibility/100}%</Col> 
    </Row>
    </div>:<div className='d-flex justify-content-center align-items-center py-3'>
      <img src='loader.gif'/>
    </div>
    }
      </Col>
    <Col sm={12} lg={5} md={8}  className='bg-light p-4'>
    <h2 className='text-center'>Todo List</h2>
    <br />

      <div className='d-flex h-max'>
    <input type="text"  className='col form-control' value={task} onChange={(e)=>setTask(e.target.value)} required/>
  
    <Button onClick={addTask} >Add Task</Button>

    </div>
    {
      err?<p className='text-danger'>*Please enter input
     </p> :""
    }
    <TodoTask data={list} remove={removeTask} move={priority}/>
    </Col>
    </Row>
    </>
  )
}

export default Todoinput