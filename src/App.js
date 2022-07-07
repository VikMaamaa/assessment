import React, {useState} from 'react'
import './App.css';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Navi from './components/nav'
import Head from './components/head'
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Content from './components/content'

const drawerWidth = 350;


function Copyright() {
  const theme = useTheme()
  return (
    <Typography variant="h6"  sx={{display: 'flex', alignItems:'center', justifyContent: 'center', color: theme.palette.type === 'dark' ?'rgba(255, 255, 255, 0.6)':'#000000', fontSize:16}} align="center">
      
      <CopyrightIcon sx={{p: 0}}/>
      {new Date().getFullYear()}.
      <Link color="inherit" href="#" sx={{textDecoration:'none'}}>
       AARE. All Rights Reserved 
      </Link>{' '}
     
    </Typography>
  );
}
function App() {
  const [darkMode, setDarkMode] = useState(false);
  let theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
   
  });
  const [mobileOpen, setMobileOpen] = useState(false);
 
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  theme = {
    ...theme,
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: theme.palette.type === 'dark' ? 'rgba(0, 0, 0, 0.6)' : '',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              background: '#F2E7FE',
              color: theme.palette.type === 'dark' ?'rgba(0, 0, 0, 0.87)':''
            },
          },
        },
      },
      
    },
    overrides: {
     MUIRichTextEditor: {
      root: {
        width: "100%",
       height: '200px',
        display: "flex",
        overflow: "hidden",
        border: theme.palette.type === 'dark' ?'1px solid rgba(255, 255, 255, 0.38)':' 1px solid rgba(0, 0, 0, 0.18)',
        borderRadius: '4px',
        padding: '1%',
        boxShadow: '0px 11px 19px rgba(0, 0, 0, 0.1)',
        '&:hover' : {
			   border: theme.palette.type === 'dark' ?'':' 1px solid #000000'
			}
      },
      container: {
        margin: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column"
      },
      toolbar: {
        flexShrink: 0,
        color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.87)'
      },
      placeHolder: {
        position: "static",
        textAlign: 'left',
        padding: '1%',
        color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.38)':'rgba(0, 0, 0, 0.6)'
      },
      editor: {
        flexGrow: 1,
        overflowY: "auto",
        color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.87)',
        padding: '1%'
      }
    }
  }
  }

  
  return (
    <ThemeProvider theme={theme}>
     <Box sx={{ display: 'flex', minHeight: '100vh', background:theme.palette.type === 'dark' ?'rgba(0, 0, 0, 0.6)':'#F5F5F5' }}>
     <CssBaseline />
     <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} style={{ boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)'}}>
     {isSmUp ? null : (
            <Navi
              PaperProps={{ style: { width: '70%' } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
       <Navi  PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}  variant="permanent" />
     </Box>
     
     {/* <Container maxWidth="sm" style={{background:'green'}}> */}
     <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Head onDrawerToggle={handleDrawerToggle} setDarkMode={setDarkMode} darkMode={darkMode} />
        <Box component="main" sx={{ flex: 1, py: 6, px: {xs: 1, sm: 2, md: 4},  }}>
            <Content darkMode={darkMode} />
          </Box>
          <Box component="footer" sx={{ p: 2 }}>
            <Copyright />
          </Box>
          </Box>
    {/* </Container> */}
   
   
    </Box>
    </ThemeProvider>
  );
}

export default App;
