import Nav from "./Nav"
import Library from "./Library"
import Hero from "./Hero"
import About from "./Playlist"
import Player from "./Player"

export default function App(){


  return(
    <>
    <div className="bg-black min-h-screen">
      <Nav/>
      <div className="flex justify-around">
        <Library/>
        <Hero/>
        <About/>
      </div>
      <Player/>
    </div>
    </>
  )
}