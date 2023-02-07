<<<<<<< HEAD
import React from 'react'

const Header = () => {
  return (
    <h1>Header</h1>
=======
import React from 'react';
/*import { Autocomplete } from '@react-google-maps/api';*/
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import  SearchIcon from '@material-ui/icons/Search';
import useStyles from './style'

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travisor
        </Typography>
        <Box display="flex">
        <Typography variant="h6" className={classes.title}>
          Explore new places
        </Typography>
        {/*<Autocomplete>*/}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
          </div>
        {/*</Autocomplete>*/}
        </Box>
      </Toolbar>
    </AppBar>
>>>>>>> e554b3a17d4a778843f071336bfa0317ddadbfd9
  )
}

export default Header;