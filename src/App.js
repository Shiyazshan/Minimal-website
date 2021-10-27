import logo from './logo.svg';
import './App.css';
import Spotlight from './Components/screens/Spotlight';
import Minimal from './Components/screens/Minimal';
import Dark from './Components/screens/Dark';
import Theme from './Components/screens/Theme';
import Interface from './Components/screens/Interface';
import Bussiness from './Components/screens/Bussiness';
import Questions from './Components/screens/Questions';
import Footer from './Components/screens/Footer';


function App() {
  return (
    <>
       <Spotlight />
       <Minimal />
       <Dark />
       <Theme />
       <Interface />
       <Bussiness />
       <Questions />
       <Footer />
    </>
  );
}

export default App;
