import reactLogo from './assets/react.svg'
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Study from './components/Study'
import JokesData from './components/JokesData'


function App() {
  const jokesElement = JokesData.map(joke=>{
    return <Study setup={joke.setup} punchline={joke.punchline}/>
  })
  return (
    <>
    jokesElement
    
    </>
  )
}

export default App
