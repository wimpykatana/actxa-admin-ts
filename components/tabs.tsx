import React, { useState } from 'react';

interface Props {
  tabHeader?: string[];
  tabs?: any[];
}

const Tabs = ({ tabHeader, tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='pb-[120px]'>
      {tabHeader != null && (
        <div className='tab-title mb-5'>{tabHeader[activeTab]}</div>
      )}
      <div className='bg-white rounded-md wshadow border-1'>
        <div className='tab-header flex bg-[#D2D3D4] rounded-t-md text-[#002245]'>
          {tabHeader?.map((val, i) => (
            <div
              key={i}
              className={`p-2 md:px-11 md:py-3 cursor-pointer
              ${activeTab === i ? 'bg-[#002245] text-white rounded-t-md' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {val}
            </div>
          ))}
        </div>
        {tabs != null && (
          <div className='tab-content px-5 pt-5 pb-20'>{tabs[activeTab]}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
