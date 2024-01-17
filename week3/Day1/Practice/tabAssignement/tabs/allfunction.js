import React, { useState } from 'react';

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'Content of Tab 1' },
    { label: 'Tab 2', content: 'Content of Tab 2' },
    { label: 'Tab 3', content: 'Content of Tab 3' },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <TabLabels tabs={tabs} activeTabIndex={activeTabIndex} onTabClick={handleTabClick} />
      <TabContent content={tabs[activeTabIndex].content} />
    </div>
  );
}

function TabLabels({ tabs, activeTabIndex, onTabClick }) {
  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabClick(index)}
          style={{ fontWeight: index === activeTabIndex ? 'bold' : 'normal' }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function TabContent({ content }) {
  return (
    <div>
      <textarea rows="4" cols="50" value={content} readOnly />
    </div>
  );
}

export default App;
