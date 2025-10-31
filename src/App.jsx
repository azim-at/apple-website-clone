import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ProductView from './components/ProductView'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <main>
      <NavBar />
      <Hero />
      <ProductView />
    </main>
  )
}

export default App
