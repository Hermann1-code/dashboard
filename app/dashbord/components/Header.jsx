import { Badge, IconButton } from '@material-tailwind/react';
import React from 'react';
import NotifBtn from './NotifBtn';

export default function Header() {
  return (
    <div className='h-24 bg-white fixed top-0 left-64 right-0 z-50 flex justify-between items-center px-12 shadow-sm'>
      <h3 className='text-2xl'>Tableau de bord</h3>
      <div>
        <Badge content="5">
          <IconButton variant="outlined">
            <NotifBtn />
          </IconButton>
        </Badge>
      </div>
    </div>
  );
}
