"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";

const TABLE_HEAD = ["Image", "Nom", "Actions"];

export default function CategoriesTableau({ data, fetchCategorie }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpen = (rowData) => {
    setSelectedRow(rowData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!Array.isArray(data)) {
    return <div>Les données ne sont pas valides.</div>;
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/category/${id}`
      );

      fetchCategorie();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    // Mettez à jour le state du fichier avec le premier fichier sélectionné dans le champ
    setImage(e.target.files[0]);
  };
  return (
    <Card className="h-full w-full overflow-scroll rounded-none my-12">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(({ _id, image, name }, index) => (
              <tr
                key={name}
                className={index % 2 === 0 ? "even:bg-blue-gray-50/50" : ""}
              >
                <td className="p-4">
                  <div className="w-[70px] h-[70px] object-cover rounded-full">
                    <img
                      src={`http://localhost:3001${image}`}
                      width={"100%"}
                      height={"100%"}
                      alt={`Image de ${name}`}
                    />
                  </div>
                </td>
                <td className="p-4">
                  <Link href={`/dashbord/categories/${_id}`}>{name}</Link>
                </td>
                <td className="p-4 flex items-center gap-10">
                  {/* <IconButton
                    // onClick={() => handleOpen({ name })}
                    variant="text"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </IconButton> */}
                  <IconButton variant="text" onClick={() => handleDelete(_id)}>
                    <TrashIcon className="w-5 h-5" />
                  </IconButton>
                  {/* <Button
                    size="md"
                    onClick={() => handleOpen({ name, image })}
                    className="text-xs text-black border bg-transparent hover:shadow-none shadow-none"
                  >
                    Voir
                  </Button> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Dialog open={open} handler={handleClose}>
        <DialogHeader>Modifier la category</DialogHeader>
        <DialogBody>
          {selectedRow && (
            <div className="flex flex-col gap-10">
              <Input
                onChange={(e) => setName(e.target.value)}
                label="Nom de la catégorie"
                value={selectedRow.name}
              />
              <Input type="file" onChange={handleFileChange} />
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleClose}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog> */}
    </Card>
  );
}
