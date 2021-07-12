import ConfirmBox from "./components/ConfirmBox";
//import Scooter from './images/Scooter.gif';
// import { ReactComponent as ReactScooter} from './images/Scooter.gif';
function App() {
 
  return (
    <div className="container">
      {/* <img src={Scooter} className="App-logo" alt="logo" /> */}
     <ConfirmBox /> 
     {/* <img src={require('./images/Scooter.gif').default} height={200} width={200}/> */}
     {/* <ReactScooter /> */}
    </div>
  );
}

export default App;
