
import './App.css'
import Navbar from "./Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import CharactersGallery from "./CharactersGallery.tsx";
import AddCharacter from "./AddCharacter.tsx";
import CharacterCard from "./CharacterCard.tsx";

function App() {

  return (

      <div className="app-layout">
          <Navbar/>
          <main className="main-content">
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/characters"} element={<CharactersGallery/>}/>
                  <Route path={"/characters/new"} element={<AddCharacter/>}/>
                  <Route path={"/characters/:id"} element={<CharacterCard/>}/>
                  <Route path={"/characters/page/:page"} element={<CharactersGallery/>} />
              </Routes>
          </main>
          <footer className="footer">Mimoona Raheel &copy; 2025</footer>
      </div>
  )
}

export default App