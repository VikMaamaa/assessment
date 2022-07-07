import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Brightness7SharpIcon from '@mui/icons-material/Brightness7Sharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
// import IconButton from '@mui/material/IconButton'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import Link from '@mui/material/Link';

const lightColor = '#CC2328;';

const Head = (props) => {
    const { onDrawerToggle, darkMode, setDarkMode } = props;
    return (
       <>
        <AppBar sx={{background:'transparent'}} position="static" elevation={0}>
            <Toolbar>
                <Grid container spacing={1} alignItems="center" justifyContent="space-between" >
                    <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                        <IconButton color="inherit" aria-label="open drawer" onClick={onDrawerToggle} edge="start">
                            <MenuIcon sx={{color: darkMode?'rgba(255, 255, 255, 0.38)':'#2C2C2C', fontSize:'2rem'}} />
                        </IconButton>
                    </Grid>
                    <Grid item xs sx={{ display: { sm: 'block', xs: 'none' } }} />
                   
                    <Grid item  sm={5} md={3} >
                      <ButtonGroup disableElevation variant="contained">
                        <Button sx={{background:"#D9D9D9", '&:hover':{background: '#D9D9D9'}, borderRadius: '8px 0px 0px 8px', borderRight: '1px solid #2C2C2C', borderColor:'#2C2C2C !important'}} onClick={()=>setDarkMode(false)}>
                          <Brightness7SharpIcon sx={{color: '#000000'}}/>
                        </Button>
                        <Button sx={{background: '#2C2C2C', '&:hover':{background: '#2C2C2C'},borderLeft: '1px solid #2C2C2C', borderColor:'#2C2C2C',borderRadius:' 0px 8px 8px 0px'}} onClick={()=>setDarkMode(true)}>
                          <DarkModeSharpIcon sx={{color: '#F2F2F2', }}/>
                        </Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid item>
              <Link
                href="/"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  border: darkMode? '2px solid #ffffff':'2px solid #000000',
                  fontWeight: '700',
                 fontSize: '2rem',
                  '&:hover': {
                    color: lightColor,
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                AARE
              </Link>
            </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
       </>
    )
}

export default Head
