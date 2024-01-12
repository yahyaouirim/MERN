import logo from './logo.svg';
import './App.css';
import PersonCardResponsive from './components/PersonCardResponsive';

function App() {
  return (
    <div className="App">
      <div className='card' ><PersonCardResponsive firstName={"Jane"} lastName={"Doe"} age={"34"} hairColor={"black"} /></div> 
      <div className='card'> <PersonCardResponsive firstName={"John"} lastName={"Smith"} age={"32"} hairColor={"brown"} /></div>  

      
    </div>
  );
}

export default App;
