import React, { useState } from 'react';
import Counters from "./components/counters"
import NavBar from "./components/navBar"

function App() {
  const initialState = [
    { value: 0, id: 1 ,name: "iPhone 13"},
    { value: 4, id: 2, name: "RedMi 5" },
    { value: 2, id: 3, name: "Motorolla" },
    { value: 2, id: 4, name: "Motorolla Black" },
    { value: 2, id: 5, name: "Motorolla Blue" },
  ]

  const [counters, setCounters] = useState(initialState)
  const handlerDelete = (counterId)=>{
    const newCounters = counters.filter(c=> c.id !==counterId)
    setCounters(newCounters)
  }
  
  const handlerIncrement = (counterId) => {
  const newCounter = [...counters]
  newCounter.find(c=>c.id === counterId).value +=1
  setCounters(newCounter) 
  }

  const handlerDecrement = (counterId) => {
   const newCounter =[...counters]
   newCounter.find(c=>c.id === counterId).value -=1
   setCounters(newCounter)   
  }
  
  const handlerReset =()=>setCounters(initialState)
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar
        totalItems={counters.reduce((a,c) => a + c.value,0)} 
         />
        <Counters
        onIncrement = {handlerIncrement}
        onDecrement = {handlerDecrement}
        onDelete = {handlerDelete}
        onReset ={handlerReset}
        counters = {counters}
         />
      </main>
    </div>
  );
}

export default App;
