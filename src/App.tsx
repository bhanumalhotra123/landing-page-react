import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { New } from './components/New'
import { Careers } from './components/Careers'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <New />
        <Careers />
      </div>
    </>
  )
}

export default App
