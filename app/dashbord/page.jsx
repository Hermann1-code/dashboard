'use client'
import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import { Badge, IconButton } from '@material-tailwind/react'
import { BellAlertIcon, HomeIcon, QueueListIcon } from '@heroicons/react/24/outline'
import NotifBtn from './components/NotifBtn'
import Tableau from './components/Tableau'
import axios from 'axios'

function page() {

  const [commandes,setCommandes] = useState({})

  useEffect(()=>{
    fetchCommandes()
  },[])
  const fetchCommandes = async () =>{
    try {
      const response = await axios.get('http://localhost:3001/api/commandes/all')

      setCommandes(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full'>
      
      <div className='flex gap-8 my-5  w-full'>
        <div className='border p-8 w-1/3 bg-white rounded-lg h-36 flex justify-between items-center'>
          <div>
            <h4 className='text-lg '>Toutes les commandes</h4>
            <h1 className='text-3xl font-bold my-2'> {commandes.length} </h1>
          </div>
          <div><HomeIcon className='w-10 h-10'/></div>
        </div>
        <div className='border p-8 w-1/3 bg-white rounded-lg h-36 flex justify-between items-center'>
          <div>
            <h4 className='text-lg '>Commandes en attente</h4>
            <h1 className='text-3xl font-bold my-2'>3</h1>
          </div>
          <div><QueueListIcon className='w-10 h-10'/></div>
        </div>
        <div className='border p-8 w-1/3 bg-white rounded-lg h-36 flex justify-between items-center'>
          <div>
            <h4 className='text-lg '>Toutes les commandes</h4>
            <h1 className='text-3xl font-bold my-2'>3</h1>
          </div>
          <div><HomeIcon className='w-10 h-10'/></div>
        </div>
      </div>

      <div>
        <Tableau/>
      </div>

    </div>
  )
}

export default page