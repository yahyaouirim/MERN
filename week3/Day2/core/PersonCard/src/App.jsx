import PersonCard from './component/PersonCard'
import './App.css'
function App() {

  return (
    <div className='App'>
      <div className='card' ><PersonCard firstName={"Jane"} lastName={"Doe"} age={"34"} hairColor={"black"} /></div> 
      <div className='card'> <PersonCard firstName={"John"} lastName={"Smith"} age={"32"} hairColor={"brown"} /></div>  

      <div className='card'> <PersonCard firstName={"Millard"}  lastName={"Fillmore"}age={"30"} hairColor={"yellow"}/></div>  

      <div className='card'> <PersonCard firstName={"Maria"} lastName={"Smith"} age={"36"} hairColor={"grey"}/></div>  

    </div>
  )
}


export default App
