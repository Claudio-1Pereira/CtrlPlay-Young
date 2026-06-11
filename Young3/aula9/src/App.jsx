import AddQuest from "./AddQuest"

export default function App(){

  
  return(
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1>Quest to do</h1>
        <AddQuest/>
      </div>
    </>
  )
}