import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Container from "../src/component/Container"
function App() {
  return (
    <WeatherProvider>
      <Container/>
    </WeatherProvider>
  
  );
}

export default App;
