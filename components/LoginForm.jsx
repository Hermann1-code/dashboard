'use client'
import React from 'react'
import { Button, Input } from "@material-tailwind/react";
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className='w-[30%] h-96 border border-gray-300 rounded-lg '>
        <div className='p-5 border-b font-bold'>Connexion</div>
        <form action="" className='p-5 py-10 flex flex-col gap-8'>
        <Input size='lg' label="Adresse email" />
        <Input size='lg' label="Mot de pqsse" />

        <Link className='text-xs text-gray-500 self-end' href={''} >Mot de passe oublie </Link>
        <Button>Connexion</Button>
        </form>

        

    </div>
  )
}
