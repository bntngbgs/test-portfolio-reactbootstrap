import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Bio />
      <TechStack />
    </div>
  );
}

export default App;
