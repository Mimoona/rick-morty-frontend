
import './App.css'
import Navbar from "./Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import CharacterList from "./CharacterList.tsx";
import AddCharacter from "./AddCharacter.tsx";

function App() {

  return (

      <div className="app-layout">
          <Navbar/>
          <main className="main-content">
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/characters"} element={<CharacterList/>}/>
                  <Route path={"/characters/new"} element={<AddCharacter/>}/>
              </Routes>
          </main>
          <footer className="footer">Mimoona Raheel &copy; 2025</footer>
      </div>
  )
}

export default App
