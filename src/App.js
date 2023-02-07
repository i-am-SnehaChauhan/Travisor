import React from 'react';
<<<<<<< HEAD
import { CssBaseLine, Grid} from '@material-ui/core';
=======
import { CssBaseline, Grid} from '@material-ui/core';
>>>>>>> e554b3a17d4a778843f071336bfa0317ddadbfd9
import Header from './components/Header/Header';
import List from './components/LIst/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

function App() {
  return (
<<<<<<< HEAD
    <div >
      <h1>Hello, World!</h1>
    </div>
=======
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map/>
        </Grid>
      </Grid>
    </>
>>>>>>> e554b3a17d4a778843f071336bfa0317ddadbfd9
  );
}

export default App;
