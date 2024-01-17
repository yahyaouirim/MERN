// import React, { useState } from 'react';
// import TabLabels from './components/TabLabels';
// import TabContent from './components/TabContent';

// function App() {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);

//   const tabs = [
//     { label: 'Tab 1', content: 'Content of Tab 1' },
//     { label: 'Tab 2', content: 'Content of Tab 2' },
//     { label: 'Tab 3', content: 'Content of Tab 3' },
//   ];

//   const handleTabClick = (index) => {
//     setActiveTabIndex(index);
//   };

//   return (
//     <div>
//       <TabLabels tabs={tabs} activeTabIndex={activeTabIndex} onTabClick={handleTabClick} />
//       <TabContent content={tabs[activeTabIndex].content} />
//     </div>
//   );
// }

// export default App;

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const backgroundImageUrl = 'pexels-pixabay-460672.jpg'; // Replace with your image URL

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover', // You can adjust this property based on your design
  width: '100%',

  height: '300px', // Set a height or adjust as needed
  // Add other styles as needed
};

export default function Example() {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 ">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
