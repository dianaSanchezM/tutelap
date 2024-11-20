import React from 'react';
import './index.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">TutelApp</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
        <Link href="/">
              <button className="btn-header">Home</button>
        </Link>
            </li>
            <li>
              <button className="btn-header">About Us</button>
            </li>
            <li>
              <button className="btn-header">Contact</button>
            </li>
            <li>
              <button onClick={()=>router.push(`/tutelas`)} className="btn-header btn-special">Manage Tutelas</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
