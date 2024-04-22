"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function page() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null); // Utilisez null pour stocker l'objet fichier

  const params = useParams();
  const category = params.products;

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/category/products/${category}`
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    // Mettez à jour le state du fichier avec le premier fichier sélectionné dans le champ
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      // const formData = new FormData(); // Créez un objet FormData pour envoyer le fichier
      // formData.append('name', name); // Ajoutez le nom de la catégorie
      // formData.append('image', file); // Ajoutez le fichier image

      const response = await axios.post(
        "http://localhost:3001/api/products",
        { name, description, image, price, category },
        {
          headers: {
            "Content-Type": "multipart/form-data", // Spécifiez le type de contenu pour le téléchargement de fichiers
          },
        }
      );

      handleOpen();
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpen = () => setOpen(!open);
  return (
    <div className="mt-15 overflow-y-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-5">Les plats</h1>
        <Button onClick={handleOpen}>Ajouter un plat</Button>

        <Dialog open={open} handler={handleOpen}>
          <form className="p-10" encType="multipart/form-data">
            <DialogHeader>Ajouter un nouveau plat</DialogHeader>
            <DialogBody>
              <div className="flex flex-col gap-10">
                <Input
                  onChange={(e) => setName(e.target.value)}
                  label="Nom du plat"
                />
                <Textarea
                  onChange={(e) => setDescription(e.target.value)}
                  label="Description du plat"
                />
                <Input
                  onChange={(e) => setPrice(e.target.value)}
                  label="Prix du plat"
                />
                <Input type="file" onChange={handleFileChange} />
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Annuler</span>
              </Button>
              <Button variant="gradient" color="green" onClick={handleSubmit}>
                <span>Ajouter</span>
              </Button>
            </DialogFooter>
          </form>
        </Dialog>
      </div>
      <div className="flex flex-wrap gap-3">
        {products && products.map((data, index) => <FoodCard data={data} />)}
      </div>
    </div>
  );
}
