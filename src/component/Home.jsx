import React from 'react';
import NavigationHeader from './NavigationHeader';
import Navbar from './Navigation';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationHeader />
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-center">Welcome to Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
