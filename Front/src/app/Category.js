import React, { useState } from 'react'

const Category = () => {
    const [desc, setdesc] = useState("")
  return (
    <div>Category
        <input onChange={(e)=>setdesc(e.target.value)}></input>
        <button>Add</button>

    </div>
  )
}

export default Category