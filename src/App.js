import { Route, Routes } from 'react-router'
import Detail from './pages/Deatil'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
