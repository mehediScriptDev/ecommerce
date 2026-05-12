import React from 'react';

const tabs = ['All', 'New', 'Excellent (Like New)', 'Very Good', 'Broken'];

const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="mb-6 overflow-x-auto scrollbar-hide">
            <div className="p-1 border border-gray-200 rounded-lg inline-flex md:w-full md:flex bg-[#f3f4f6] space-x-1 md:space-x-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        role="tab"
                        aria-selected={activeTab === tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                            md:flex-1 text-center py-1.5 md:py-2 px-2.5 md:px-3 
                            text-xs md:text-sm 
                            rounded-lg transition-all duration-200 ease-in-out font-medium whitespace-nowrap
                            ${activeTab === tab 
                                ? 'bg-white text-gray-900 shadow-sm' 
                                : 'text-gray-500 hover:text-gray-700'
                            }
                        `}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;