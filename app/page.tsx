// File: app/page.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import MobileNavigation from '../components/MobileNavigation';
import AccountProgress from '../components/AccountProgress';
import FranchiseesOnboard from '../components/FranchiseesOnboard';
import KeyInsights from '../components/KeyInsights';
import FinancialWellbeing from '../components/FinancialWellbeing';
import ProspectLeads from '../components/ProspectLeads';
import PendingQuestions from '../components/PendingQuestions';
import ChatAssistant from '../components/ChatAssistant';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  
  // Simulate page loading and improve perceived performance
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-900"></div>
      </div>
    );
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - hide on mobile and tablet */}
      {!isMobile && !isTablet && <Sidebar />}
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile/Tablet header with burger menu */}
        {(isMobile || isTablet) && (
          <div className="sticky top-0 z-10 bg-teal-900 text-white p-4 flex items-center">
            <MobileNavigation />
            <h1 className="text-lg font-medium ml-3">Franchise Dashboard</h1>
            <div className="ml-auto">
              <Image 
                src="/placeholder/man.png" 
                alt="User profile" 
                width={32} 
                height={32}
                className="rounded-full"
              />
            </div>
          </div>
        )}
        
        {/* Desktop header */}
        {!isMobile && !isTablet && (
          <div className="flex justify-end p-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden ml-4">
              <Image 
                src="/placeholder/man.png" 
                alt="User profile" 
                width={40} 
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        )}
        
        {/* Dashboard Content */}
        <div className="p-4 md:p-6">
          {/* Top Section: 30% vertical rectangle + 4 square components (35% each, 2x2 grid) */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* First component - vertical rectangle (30% width, full height) */}
            <div className="w-full lg:w-3/10 bg-white rounded-lg shadow p-4 md:p-6">
              <AccountProgress />
            </div>
            
            {/* Four square components (35% width each, arranged in 2x2 grid) */}
            <div className="w-full lg:w-7/10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top row */}
              <div className="bg-white rounded-lg shadow p-4 md:p-6">
                <FranchiseesOnboard />
              </div>
              <div className="bg-white rounded-lg shadow p-4 md:p-6">
                <KeyInsights />
              </div>
              
              {/* Bottom row */}
              <div className="bg-white rounded-lg shadow p-4 md:p-6">
                <FinancialWellbeing />
              </div>
              <div className="bg-white rounded-lg shadow p-4 md:p-6">
                <ProspectLeads />
              </div>
            </div>
          </div>
          
          {/* Bottom Section: 40% / 60% split for last two components */}
          <div className="flex flex-col lg:flex-row gap-6 animate-slideUp">
            {/* PendingQuestions (40% width) */}
            <div className="w-full lg:w-2/5 bg-white rounded-lg shadow">
              <PendingQuestions />
            </div>
            
            {/* ChatAssistant (60% width) */}
            <div className="w-full lg:w-3/5 bg-white rounded-lg shadow p-4 md:p-6">
              <ChatAssistant />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}