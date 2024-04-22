"use client";
import {
  PencilIcon,
  ShoppingCartIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import React from "react";

export default function FoodCard({ data }) {
  return (
    <div className="w-1/3 border bg-white rounded-xl flex">
      <div className="w-[40%] flex items-center justify-center ">
        <img
          src={`http://localhost:3001${data && data.image} `}
          className=" w-full object-cover"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center ">
          <h3 className="text-md font-bold">{data && data.name} </h3>
          <h2 className="text-lg font-bold">{data && data.price} FCFA</h2>
        </div>
        <span className="text-xs text-gray-500">Gouté</span>
        <p>{data && data.description} </p>
        <div className="flex gap-2 my-2">
          <StarIcon className="w-4 h-4" />
          <StarIcon className="w-4 h-4" />
          <StarIcon className="w-4 h-4" />
          <StarIcon className="w-4 h-4" />
          <StarIcon className="w-4 h-4" />
        </div>
        <div className="flex gap-5">
          <IconButton variant="text" className=" border">
            <PencilIcon className="w-4 h-4 " />
          </IconButton>
          <IconButton variant="text" className=" border border-red-500">
            <TrashIcon className="w-4 h-4" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
