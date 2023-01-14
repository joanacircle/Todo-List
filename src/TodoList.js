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
            const newItemlist = { item: inputItem, checked: false }
            setItemList([...itemList, newItemlist])
            setInputItem('')
          }}
        >
          ADD
        </button>
      </div>

      <div className="task-container">
        {itemList.length !== 0 &&
          itemList.map((v, i) => {
            return (
              <div key={i} className="tasks">
                <input
                  type="checkbox"
                  checked={v.state}
                  onChange={(e) => {
                    const resetItemState = itemList.map((v2, i2) => {
                      if (v2.item === v.item)
                        return { ...v2, checked: !v2.checked }
                      return { ...v2 }
                    })
                    setItemList(resetItemState)
                  }}
                />
                <p className={v.checked ? 'finished' : ''}>{v.item}</p>
                <a>📝</a>
                <a
                  onClick={(i) => {
                    const newItem = itemList.filter((v2, i2) => {
                      return !v2 === v
                    })
                    // const newItem = [
                    //   ...itemList.slice(0, i),
                    //   ...itemList.slice(i + 1),
                    // ]
                    setItemList(newItem)
                  }}
                >
                  🗑️
                </a>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ToDo
