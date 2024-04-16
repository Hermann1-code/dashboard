'use client'
import React, { useState } from 'react'
import Tableau from '../components/Tableau'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from '@material-tailwind/react'
import axios from 'axios';

export default function Page() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [file, setFile] = useState(null); // Utilisez null pour stocker l'objet fichier

  const handleOpen = () => setOpen(!open);

  const handleFileChange = (e) => {
    // Mettez à jour le state du fichier avec le premier fichier sélectionné dans le champ
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    console.log(name)
    try {
      // const formData = new FormData(); // Créez un objet FormData pour envoyer le fichier
      // formData.append('name', name); // Ajoutez le nom de la catégorie
      // formData.append('image', file); // Ajoutez le fichier image

      const response = await axios.post('http://localhost:3001/api/category', {name,file}, {
        headers: {
          'Content-Type': 'multipart/form-data' // Spécifiez le type de contenu pour le téléchargement de fichiers
        }
      } );
      
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-15 overflow-y-auto'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold my-5'>Les catégories</h1>
        <Button onClick={handleOpen}>Ajouter une catégorie</Button>
      </div>

      <Dialog open={open} handler={handleOpen}>
        <form className='p-10' encType="multipart/form-data">
          <DialogHeader>Ajouter une nouvelle catégorie</DialogHeader>
          <DialogBody>
            <div className='flex flex-col gap-10'>
              <Input onChange={(e) => setName(e.target.value)} label='Nom de la catégorie'/>
              <Input type='file' onChange={handleFileChange}/>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
              <span>Annuler</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleSubmit}>
              <span>Ajouter</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>

      <Tableau/>
    </div>
  );
}
