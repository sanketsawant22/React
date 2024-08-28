import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// CUSTOM REACT

function MyApp() {
  return (
    <div>
      <a href="https://google.com" target='_blank'> Google </a>
    </div>
  )
} 

const anotherElement = 'sanket'

const reactElement = React.createElement(
  "a", 
  {href: "https://google.com",target: "_blank"},
  "google",
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root'))
.render(

reactElement

)
