import React from 'react'

const Community = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white dark:bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-[#80609f]/20 px-8 py-6 backdrop-blur-sm">
        <h1 className="text-3xl font-bold dark:text-white text-gray-900">Community</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Connect with other QuickGPT users</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Community
