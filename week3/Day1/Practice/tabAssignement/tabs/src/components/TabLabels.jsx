import React from 'react';

function TabLabels({ tabs, activeTabIndex, onTabClick }) {
    return (
    <div>
        {tabs.map((tab, index) => (
        <button
            key={index}
            onClick={() => onTabClick(index)}
            style={{border:"5px solid blue", borderBottom:"none" ,borderRadius:"0%", fontSize:"2rem",fontWeight: index === activeTabIndex ? 'bold' : 'normal', color: index === activeTabIndex ? "blue" : "grey" }}>
            {tab.label}
        </button>
        ))}
    </div>
    );
}

export default TabLabels;
