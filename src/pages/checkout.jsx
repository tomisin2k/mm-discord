import React from 'react';
import { Card } from '@/components/ui/card';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left Section */}
        <div className="flex-1 border-r border-zinc-800 p-10">
          <h1 className="text-4xl mb-8 flex items-center gap-3">
            <span className="text-3xl">🔑</span>
            UNLOCK ACCESS TO...
          </h1>
          <ul className="space-y-5">
            <li className="flex items-center gap-3 text-lg">
              <span className="text-green-500">✓</span>
              Live calls and AMAs with Experts
            </li>
            <li className="flex items-center gap-3 text-lg">
              <span className="text-green-500">✓</span>
              24/7 Support and on-demand guidance
            </li>
            <li className="flex items-center gap-3 text-lg">
              <span className="text-green-500">✓</span>
              Live calls and AMAs with Experts
            </li>
            <li className="flex items-center gap-3 text-lg">
              <span className="text-green-500">✓</span>
              24/7 Support and on-demand guidance
            </li>
            <li className="flex items-center gap-3 text-lg">
              <span className="text-green-500">✓</span>
              24/7 Support and on-demand guidance
            </li>
            <li className="flex items-center gap-3 text-lg">
              <span className="text-green-500">✓</span>
              24/7 Support and on-demand guidance
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-10">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-2">JOIN MEMECOINMANIA</h1>
              <p className="text-gray-400">THE WORLD IS YOURS</p>
            </div>

            <div className="mb-10">
              <h2 className="text-sm text-gray-400 mb-5">PERSONAL INFORMATION</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-4 bg-zinc-900 border border-zinc-700 rounded text-white"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 bg-zinc-900 border border-zinc-700 rounded text-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 bg-zinc-900 border border-zinc-700 rounded text-white"
                />
              </div>
            </div>

            <div>
              <h2 className="text-sm text-gray-400 mb-5">SELECT PLAN</h2>
              <div className="space-y-4">
                <Card className="p-6 bg-zinc-900 border-zinc-700 relative">
                  <div className="text-3xl font-bold mb-2">
                    $24.99 <span className="text-sm text-gray-400">/ monthly</span>
                  </div>
                  <div className="text-xl mb-4">Bull Run Club</div>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Daily live broadcasts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Daily live broadcasts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Daily live broadcasts
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-zinc-900 border-zinc-700 relative">
                  <div className="absolute top-2 right-2 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    $74.99 <span className="text-sm text-gray-400">/ 3 months</span>
                  </div>
                  <div className="text-xl mb-4">Diamond Hands</div>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Daily live broadcasts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Daily live broadcasts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Daily live broadcasts
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-zinc-900 border-zinc-700 relative">
                  <div className="absolute top-2 right-2 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    SAVE $50
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    $249.99 <span className="text-sm text-gray-400">/ 1 year</span>
                  </div>
                  <div className="text-xl mb-4">Crypto Visionary</div>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Daily live broadcasts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Daily live broadcasts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Exclusive chats and lessons
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;