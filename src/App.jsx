import './App.css'
import { Navbar } from '../src/componenten/navbar/index'
import { Home } from '../src/pages/home/index'
import { House } from '../src/pages/house/index'
import { Gallery } from "./pages/gallery/index"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <House />
      <Gallery />
    </>
  );
}

export default App
