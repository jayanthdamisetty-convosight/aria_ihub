import React, { useState } from 'react';
interface TabSystemProps {
  children: React.ReactNode[];
  tabNames: string[];
}
const TabSystem: React.FC<TabSystemProps> = ({
  children,
  tabNames
}) => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className="mb-10">
      <div className="flex justify-between overflow-x-auto scrollbar-hide border-b border-gray-200 mb-8">
        {tabNames.map((tabName, index) => <button key={index} className={`py-4 px-6 font-light ${tabName === 'My Profile' ? 'text-base' : 'text-sm'} transition-all duration-200 relative ${activeTab === index ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab(index)}>
            {tabName}
            {activeTab === index && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"></span>}
          </button>)}
      </div>
      {children[activeTab]}
    </div>;
};
export default TabSystem;