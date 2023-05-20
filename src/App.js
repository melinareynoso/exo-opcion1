import './App.css';

import Header from './components/header';
import Section1 from './components/section1';
import Two from './components/section2';
import Three from './components/section3';
import Four from './components/section4';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Two/>
      <Three/>
      <Four/>
      <Footer/>
    </div>
  );
}

export default App;
