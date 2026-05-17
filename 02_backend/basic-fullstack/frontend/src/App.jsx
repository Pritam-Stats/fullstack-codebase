import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'
import { forwardRef } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const fetchJokes = async () => {
      const data = await fetch("/api/jokes"); //http://localhost:3100/ standardization
      //now we are introduce proxy
      const res = await data.json();
      setJokes(res);
      console.log(res);
    }

    fetchJokes();
    
  }, [])

  return (
    <>
      <h1>Let's learn backend and react</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke) => {
          return (
          <div key={joke.id}>
            <h3>{joke["title"]}</h3>
            
            <p>{joke.content}</p>
          </div>
          )
        })
      }
    </>
  )
}

export default App
