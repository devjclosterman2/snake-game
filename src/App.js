import './App.css';
import WelcomeAnimation from './components/welcome/WelcomeAnimation';
import Snake from './components/snake/Snake';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="App">
     <WelcomeAnimation />
     <Snake />
     <Contact />
    </div>
  );
}

export default App;
