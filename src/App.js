import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Year from './components/year';

function App() {
  return (
    <div>
      <Header />
      <hr className="my-0" />
      <Year/>
    </div>
  );
}

export default App;
