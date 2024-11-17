import logo from './3.JPG';
import './App.css';
import Grid from '@mui/material/Grid2';
import {Button} from '@mui/material'
import { useState } from 'react';

function App() {
  const [helloVisable, setHelloVisability] = useState(false);
  const [dismiss, setDismiss] = useState(false);

  const handleImageClick = () => {
    setDismiss(true);
    setHelloVisability(true);
  };

  const handleCloseClick = () => {
    setDismiss(false);
    setHelloVisability(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        

        <Grid className="Griddy" container spacing={2} columns={{ xs: 12 }}>
          <Grid item size={6}>
            <Button className="CoolButton" onClick={handleImageClick}>Image</Button>
          </Grid>
          <Grid item size={6}>
            {helloVisable && <img src={logo} className="App-logo" alt="logo" />}
          </Grid>
          <Grid item size={6}>
            {dismiss && <Button className="CoolButton"  onClick={handleCloseClick}>Close</Button>}
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
