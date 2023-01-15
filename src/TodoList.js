import { useState } from 'react'
import './TodoList.css'

function ToDo() {
  // const [checkState, setCheckState] = useState(false)
  const [inputItem, setInputItem] = useState('')
  const [itemList, setItemList] = useState([])

  return (
    <div className="todo">
      <h1>TODO LIST</h1>
      <div>
        <input
          className="add-todo"
          value={inputItem}
          type="text"
          placeholder="I'm going to ..."
          onChange={(e) => {
            setInputItem(e.target.value)
          }}
        />
        <button
          type="submit"
          onClick={() => {
            const newItemList = {id: +new Date(), item: inputItem, checked: false, edited: false  }
            setItemList([...itemList, newItemList])
            setInputItem('')
          }}
        >
          ADD
        </button>
      </div>

      <div className="task-container">
      <ul>
        {itemList.length !== 0 &&
          itemList.map((v, i) => {
            return (
              <div key={v.id} className="tasks">
                <li>
                  <input
                    type="checkbox"
                    checked={v.state}
                    onChange={(e) => {
                      const resetItemList = itemList.map((v2, i2) => {
                        if (v2.id === v.id) return { ...v2, checked: !v2.checked}
                        else{return { ...v2 }}
                      })
                      setItemList(resetItemList)
                    }}
                  />  
                </li>
                {v.edited? 
                <input type="text" value={v.item} onChange={(e)=>{
                  const value= e.target.value
                  const resetItemList = itemList.map((v2, i2) => {
                    if (v2.id === v.id)return { ...v2, item:  value  }
                    else{return { ...v2 }}
                  })
                  setItemList(resetItemList)
                }}/>:
                <li className={`item ${v.checked ? 'finished' : ''}`}>{v.item}</li>}
                <li
                onClick={()=>{
                  const resetItemList = itemList.map((v2, i2) => {
                    if(v2.id === v.id)return {...v2, edited: !v2.edited }
                    else{return {...v2}}
                  })
                  setItemList(resetItemList)
                }}
                >📝</li>
                <li
                  onClick={() => {
                    const resetItemList = itemList.filter((v2, i2) => 
                    v2.id !== v.id
                    )
                    console.log(resetItemList)

                    setItemList(resetItemList)
                  }}
                >
                  🗑️
                </li>
              </div>
            )
          })}
          </ul> 
      </div>
    </div>
  )
}

export default ToDo
