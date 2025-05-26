
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import ClockHeading from '../component/ClockHeading';
import CurrentTime from '../component/CurrentTime';

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
  
