import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(1)
  const tags = ["tag1", "tag2", "tag3"]

  const formCount = () => {
    return count === 0 ? <h1>0</h1> : count
  }

  const getBageClasses = () => {
    let classes = "badge m-2 bg-"
    classes += count === 0 ? "danger" : "primary"

    return classes
  }

  const renderTags = () => {
    if (tags.length === 0) return "Tags not found"
    return tags.map((tag) => <li key={tag}>{tag}</li>)
  }

  const handlerIncrement = () => {
    setCount(count + 1)
  }

  const handlerDecrement = () => {
    return count === 0 ? 0 : setCount(count - 1)
  }
  return (
    <React.Fragment>
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={handlerIncrement}
        className="btn btn-secondary btn-sm m-2"
      >
        Increment
      </button>
      <button
        onClick={handlerDecrement}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
    </React.Fragment>
  )
}

export default Counter
