import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router'

const Detail = React.lazy(() => import('./pages/Deatil'))
const Main = React.lazy(() => import('./pages/Main'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
