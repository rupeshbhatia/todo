import React from 'react'
import "./App.css"
function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let newarr = []
  let handleClick = (val) => {
    newarr.push(val)
    // console.log(newarr)
    let a = document.getElementsByClassName("box")
    // console.log(a[val])
    a[val].style.cssText = "background-color:green;pointer-events:none;";
    if (newarr.length == 9) {
      setTimeout(() => {
        newarr.map((item, idx) => {
          setTimeout(() => {
            let a = document.getElementsByClassName("box")
            a[item].style.backgroundColor = "orange"
          }, 1000 * idx)

        })

      }, 1000)

    }

  }
  
  return (
    <div className="matrix">
      {
        arr.map((item, idx) => {
          return (
            <div className="box" key={idx} onClick={() => handleClick(idx)} >
              {item}
            </div>
          )
        })
      }
    </div>

  )
}

export default App