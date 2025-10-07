import './App.css'
import CurrentWeather from './components/CurrentWeather'
import Header from './components/Header'

function App() {
  return (
    <div className='text-[#050505] dark:text-[#e4e6eb]'>
      <Header/>
      <CurrentWeather/>
    </div>
  )
}

export default App
