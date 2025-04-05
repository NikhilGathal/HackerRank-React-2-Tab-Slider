import React from 'react'
import './App.css'
import 'h8k-components'
import Slides from '../Components/Slides.Functional.Component'
const title = 'Slideshow App'

function App({slides}) {
  return (
 <>
  
     <div>
   
      <div className='App'>
        <Slides slides={slides} />
      </div>
    </div>
 </>
  )
}

export default App
