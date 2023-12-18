import './App.css'
import { Navbar } from '../src/componenten/navbar/index'
import { Home } from '../src/pages/home/index'
import { House } from '../src/pages/house/index'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <House />
    </>
  );
}

export default App
