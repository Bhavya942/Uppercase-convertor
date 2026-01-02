import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="textUtils" aboutText="AboutText" />
    <div className="container">
    <TextForm heading="Lower C  ase to UPPER CASE"/>
    </div>
    </>
  );
}

export default App;
