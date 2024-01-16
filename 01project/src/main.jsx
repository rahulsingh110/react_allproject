import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>customApp !</h2>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target='blank'>click me</a>
)

const creatElement= React.createElement(
  'a',
  {
    href:'https://firefox.com',target:"blank"
  },
  'push me '
)
  



ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    // anotherElement
    creatElement

)
