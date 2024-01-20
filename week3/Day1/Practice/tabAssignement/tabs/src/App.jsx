import React, { useState } from 'react';
import TabLabels from './components/TabLabels';
import TabContent from './components/TabContent';

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = [
    { label: 'Tab 1', content: 'Content of Tab 1' },
    { label: 'Tab 2', content: 'Content of Tab 2' },
    { label: 'Tab 3', content: 'Content of Tab 3' },
  ];

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

export default App;
