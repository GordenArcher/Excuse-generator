import Axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {

  const [genrateExcuse, setgenerateExcuse] = useState('')
  const [excuseHeader, setExcuseHeader] = useState('')

  const generateExcuse = (type) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}`).then((res) => {
      setgenerateExcuse(res.data[0].excuse);
    })
  }

  const generatePartyExcuse = () => {
    setExcuseHeader('Party Excuse');
    generateExcuse('party');
  }

  const generateFamilyExcuse = () => {
    setExcuseHeader('Family Excuse');
    generateExcuse('family');
  }

  const generateOfficeExcuse = () => {
    setExcuseHeader('Office Excuse');
    generateExcuse('office');
  }


  return (
    <>
    <div className='app'>
      <h1>Click any button to Generate an Excuse!</h1>
      <div className="buttons">

        <button onClick={generatePartyExcuse}
        >Party
        </button>

        <button onClick={generateFamilyExcuse}
        >Family
        </button>
        <button onClick={generateOfficeExcuse}
        >
          Office
        </button>
      </div>

      <h1>{excuseHeader}</h1>


      <div className="excuse_here">
        <div>{genrateExcuse}</div>
  
    </div>

    </div>


    </>
  )
}

export default App
