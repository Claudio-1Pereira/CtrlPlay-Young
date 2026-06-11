import { useState } from "react"

export default function AddQuest(){

    const [quest, setQuest] = useState('')
    const [quests, setQuests] = useState([])

    function add(){
        setQuests([...quests, quest])
        setQuest('')
    }

    function remover(index){
        const novaQuests = [...quests]
        novaQuests.splice(index, 1)
        setQuests(novaQuests)
    }

    return(
        <>
            <div className="flex">
                <input className="input input-primary focus:outline-none mr-2" value={quest} onChange={(e)=> setQuest(e.target.value)} type="text" placeholder="Add quest..." />
                <button className="btn btn-soft btn-primary" onClick={add}>Add</button>
            </div>

            <ul>
                {quests.map((item,index) => (
                    <li key={index} className="flex m-4">
                        <span className="w-45">{item}</span>
                        <button className="btn ml-2 btn-secondary" onClick={()=>remover(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}