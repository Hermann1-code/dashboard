'use client'
import React from 'react'
import TabsCom from './components/TabsCom'
import Tableau from '../components/Tableau'


export default function page() {
  return (
    <div className='mt-15 overflow-y-auto'>
    <h1 className='text-2xl font-bold my-5'>Commandes</h1>
    <TabsCom/>
    <Tableau/>
    <Tableau/>
</div>
  )
}
