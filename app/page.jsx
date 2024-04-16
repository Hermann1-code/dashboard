'use client'
import LoginForm from "@/components/LoginForm";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <LoginForm/>
    </div>
    </>
  );
}
