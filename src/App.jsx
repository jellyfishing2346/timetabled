import './App.css';
import Calendar from './components/Calendar'
import Event from './components/Event'

const App = () => {

  return (
    <div className="App">
      <h1>Itineary for 7 Days of Chicago</h1>
      <h2>Welcome to Chicago, Natalia! Check out this calendar to get to know the city and see all the sights during your stay.</h2>
      <Calendar />
      <Event />
    </div>
  )
}

export default App
