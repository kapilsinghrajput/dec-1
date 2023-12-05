import React, { useState } from 'react'

const Form = () => {

  const arry =[
    {
      namee :"kapil",
     emaill:"kpl@gmail.com",
     passs:123
    },
    {namee :"kapil2",
     emaill:"kpl@gmail.com",
     passs:123
    },
    {namee :"kapil3",
     emaill:"kpl@gmail.com",
     passs:123
    }
  ]

const[name , setname] = useState("")
const[email , setemail] = useState("")
const[pass , setpass] = useState("")

const handelchangename = (e)=>{
  setname(e.target.value)
}
const handelchangeemail = (e)=>{
  setemail(e.target.value)
}
const handelchangepass  = (e)=>{
  setpass(e.target.value)
}




const submitHandel = (e)=>{
  const result = arry.find((ele)=>ele.namee === name && ele.emaill === email && ele.passs == pass )
  console.log(result)
  e.preventDefault()
  if(result){
    alert("right")
  }
  else{
    alert("wrong")
  }
}

  return (
    <div>
    <form>
        <input  type="text" placeholder="name" onChange={handelchangename} />
        <input  type="email" placeholder="email" onChange={handelchangeemail} />
        <input type="password" placeholder="password" onChange={handelchangepass}/>

        <button onClick={submitHandel}>submit</button>

    </form>
      
    </div>
  )
}

export default Form
