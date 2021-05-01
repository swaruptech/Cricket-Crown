import { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid, } from '@material-ui/core';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { amber } from '@material-ui/core/colors';



class NavBar extends Component {
    render() {
        return (
            <AppBar position="sticky" style={{backgroundColor:"#CC0000"}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Grid container justify="center" alignItems="center">
                        <IconButton>
                            <SportsCricketIcon htmlColor="white"/>
                        </IconButton>
                        <Grid>
                            <Typography style={{fontFamily: 'Serif', fontSize:"25px", letterSpacing: "8px", fontWeight: 'bold'}} >CRICKET CROWN</Typography>
                        </Grid>
                        <IconButton>
                            <SportsCricketIcon htmlColor="white" />
                        </IconButton>
                    </Grid>
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }

}

export default NavBar;