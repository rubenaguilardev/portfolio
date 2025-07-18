import { useState } from 'react'
import LoadingScreen from "./LoadingScreen"


const App = () => {

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <main>
        
      </main>
    </>
  )
}

export default App

