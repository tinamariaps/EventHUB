import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-indigo-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
          alt="Trade show background"
        />
        <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your Ultimate Trade Show & Event Resource
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Discover and connect with the best trade shows, exhibitions, and industry events worldwide.
        </p>
        
        <div className="mt-10 max-w-xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Search for vendors or events..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}