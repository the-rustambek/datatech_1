import './App.css';
import Accordions from './components/Accordion/Accordion';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import Definition from './components/Definition/Definition';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Solution from './components/Solution/Solution';
import Student from './components/Student/Student';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Header />
       <Content />
       <Solution />
       <Accordions />
       <Aside />
       <Student />
       <Definition />
       <Section />
       <Footer />
    </div>
  );
}

export default App;
