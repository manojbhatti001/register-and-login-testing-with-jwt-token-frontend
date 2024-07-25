import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';




const Dashboard = () => {


  const [tokendata, settokendata] = useState({
    token: '',
  });


  const [getdatabutton,setgetdatabutton] = useState(false);
  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('Token')
    
    navigate("/Login")
  }


  const getdata = () => { 
   const token = localStorage.getItem("Token")
   settokendata({token})
    setgetdatabutton(true);
   
  }



  useEffect(()=> {
   
    if(!getdatabutton) return;
    if(getdatabutton)
      
    console.log("token in api ",tokendata)
    axios.post('http://localhost:9010/verify',{},{
      headers: { Authorization:tokendata.token,}
    }).then((Response)=> {
      console.log("respons from the server ", Response)
      toast.success(Response.data.message +" "+ Response.data.user.username)
    }).catch((error)=> {
      console.log(error);
    }).finally(()=> {
      setgetdatabutton(false);
    })
  },[getdatabutton])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl mb-4">Welcome to the dashboard</h1>
        <div className='flex  '>
          <button
            className="border-2 bg-red-600 text-black px-4 py-2 rounded-lg"
            onClick={logout}
          >
            Logout
          </button>
          <button className=" ml-10 px-4  bg-blue-500 hover:bg-blue-700 rounded-lg text-white" onClick={getdata}> Get data </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
