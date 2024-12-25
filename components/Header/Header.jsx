'use client';
import React, { useState } from 'react';
import ToggleMode from '../ToggleMode';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Bell, Menu, Settings } from 'lucide-react';
import Image from 'next/image';
import logo from '../../public/logomain.svg';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Image src={logo} alt="logo" width={80} height={80} />
        <div className="flex items-center gap-4">
          <ToggleMode />
          <Settings className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KW</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
