'use client'
import { Button, Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import React, { useState } from "react";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export default function Tableau() {
  const [open, setOpen] = useState(false); // État et fonction de mise à jour de l'état déclarés ici
  const [selectedRow, setSelectedRow] = useState(null); // État pour stocker les données de la ligne sélectionnée

  const handleOpen = (rowData) => {
    setSelectedRow(rowData); // Mettre à jour l'état avec les données de la ligne sélectionnée
    setOpen(true); // Ouvrir la boîte de dialogue
  };

  const handleClose = () => {
    setOpen(false); // Fermer la boîte de dialogue
  };

  return (
    <Card className="h-full w-full overflow-scroll rounded-none my-12">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
          {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Button size="md" onClick={() => handleOpen({ name, job, date })} className='text-xs text-black border bg-transparent hover:shadow-none shadow-none'>Voir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog open={open} handler={handleClose}>
        <DialogHeader>Detail de la commande</DialogHeader>
        <DialogBody>
          {selectedRow && (
            <div>
              <h1>Nom: {selectedRow.name}</h1>
              <h1>Emploi: {selectedRow.job}</h1>
              <h1>Date: {selectedRow.date}</h1>
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
      </Dialog>
    </Card>
  );
}
