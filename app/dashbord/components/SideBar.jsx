'use client'
import React from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  SquaresPlusIcon,
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from 'next/link';

export default function SideBar() {
  return (
    <Card className="h-screen fixed w-64 left-0 p-4 shadow-xl shadow-blue-gray-900/5 rounded-none">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <Link className='flex justify-center items-center' href='/dashbord'>
            
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            
          </Link>
        </ListItem>
        <ListItem>
          <Link className='flex justify-center items-center' href={'/dashbord/commandes'}>
            
              <ListItemPrefix>
                <SquaresPlusIcon className="h-5 w-5" />
              </ListItemPrefix>
              Commandes
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full ml-2" />
            
          </Link>
        </ListItem>
        <ListItem>
          <Link className='flex justify-center items-center' href={'/dashbord/categories'}>
            
              <ListItemPrefix>
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
              </ListItemPrefix>
              Categories
            
          </Link>
        </ListItem>
        <ListItem>
          <Link className='flex justify-center items-center' href={'/dashbord/rapports'}>
            
              <ListItemPrefix>
                <Bars3Icon className="h-5 w-5" />
              </ListItemPrefix>
              Rapports
            
          </Link>
        </ListItem>
        <ListItem>
          <Link className='flex justify-center items-center' href={'/dashbord/users'}>
            
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Utilisateurs
            
          </Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Deconnexion
        </ListItem>
      </List>
    </Card>
  );
}
