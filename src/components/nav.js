import React, {useState} from 'react'
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {useTheme} from '@mui/material/styles';
//import { makeStyles } from "@material-ui/core/styles"
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import HomeIcon from '@mui/icons-material/Home';
// import PeopleIcon from '@mui/icons-material/People';
// import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
// import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
// import PublicIcon from '@mui/icons-material/Public';
// import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
// import TimerIcon from '@mui/icons-material/Timer';
// import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
//import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BalanceIcon from '@mui/icons-material/Balance';
import InsertDriveFileSharpIcon from '@mui/icons-material/InsertDriveFileSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarsIcon from '@mui/icons-material/Stars';
import BookIcon from '@mui/icons-material/Book';

// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Stack } from '@mui/material';

const categories = [
    {
      id: 'Apps',
      children: [
        {
          id: 'Home',
          icon: <DashboardIcon />
        },
        { id: 'Profile', icon: <GroupIcon /> },
        { id: 'Aaer Meets', icon: <DateRangeIcon /> },
        { id: 'Aaer Notes', icon: <ImportContactsIcon /> },
        { id: 'Bookmarks', icon: <BookmarkIcon /> },
        // {
        //   id: 'Machine learning',
        //   icon: <SettingsInputComponentIcon />,
        // },
      ],
    },
    {
      id: 'Legal Research Tools',
      children: [
        { id: 'Latest Judgements', icon: <CheckCircleIcon />, children:[
          { id: 'Test', icon: <PhonelinkSetupIcon /> }
        ] },
        { id: 'Law Reports', icon: <CheckCircleIcon />, children:[
          { id: 'Test', icon: <PhonelinkSetupIcon /> }
        ] },
        { id: 'Law of the Federation', icon: <BalanceIcon /> },
        { id: 'Regulation of MDAs', icon: <PhonelinkSetupIcon /> },
      ],
    },
    {
      id: 'Courts & Agreements',
      children: [
        { id: 'Court Forms', icon: <InsertDriveFileSharpIcon />, children:[
          { id: 'Test', icon: <PhonelinkSetupIcon /> }
        ] },
        { id: 'Rules of Courts', icon: <AccountBalanceSharpIcon />, children:[
          { id: 'Test', icon: <PhonelinkSetupIcon /> }
        ] },
        { id: 'Forms & Aggrements', icon: <ChatIcon /> },
      ],
    },
    {
      id: 'Continous Education',
      children: [
        { id: 'Buy Textbooks', icon: <ShoppingCartIcon /> },
        { id: 'Sell Textbooks', icon: <ShoppingCartIcon /> },
        { id: 'Articles & Journals', icon: <PhonelinkSetupIcon /> },
      ],
    },
    {
      id: 'Quality',
      children: [
        { id: 'Nuggets', icon: <StarsIcon /> },
        { id: 'Aaer Blog', icon: <BookIcon /> },
        // { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
      ],
    },
  ];

  

  const con = {
    color: '#E00930'

  }

 const Nav = (prop) => {
   const theme = useTheme()
    const {...sent} = prop

    const [selectedIndex, setSelectedIndex] = useState('');

    const don = {
      color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'',
      // '&:hover, &:focus':{
      //   color: theme.palette.type === 'dark' ? 'rgba(0, 0, 0, 0.87)': ''
      // }
    }
    const item = {
   
      color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.87)',
      borderRadius: '0px 100px 100px 0px',
      '&$selected':{
          bgcolor: '#F2E7FE',
        background: '#F2E7FE',
        color: theme.palette.type === 'dark' ? 'rgba(0, 0, 0, 0.87)': ''
      },
      '&:hover, &:focus': {
        bgcolor: '#F2E7FE !important',
        background: '#F2E7FE !important',
        borderRadius: '0px 100px 100px 0px',
        color: theme.palette.type === 'dark' ? 'rgba(0, 0, 0, 0.87)': ''
      },
    };
    
    const item2 = {
   
      color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.87)',
      borderRadius: '0px 100px 100px 0px',
      
      
    };
    
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return (
        <Drawer {...sent}  >
            <List disablePadding>
            <ListItem>
                <Box sx={{  display: 'flex', flexDirection: 'column' }}>
                    <Avatar sx={{mb: 3, mt: 3}} alt="Remy Sharp" src="/images/image.svg" />
                    <span  style={{color:theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.87)',fontWeight: '400',fontSize: '16px',lineHeight: '14px',marginBottom: '4%'}}>Eze Josehp Ajalli</span>
                    <Stack direction="row"  justifyContent="space-between"
  alignItems="center"
  spacing={2}>
                        <div style={{color:theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.87)', fontWeight: '700',fontSize: '14px',lineHeight: '20px', letterSpacing: '0.25px'}}>eze.ajalli.joseph@gmail.com</div> <ArrowDropDownIcon sx={{color:theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)': ''}} />
                    </Stack>
                </Box>
             
            </ListItem>
            <Divider sx={{ mb: 3, bgcolor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)': '' }} />
            {categories.map(({ id, children },u) => (
          <Box key={id} >
            <ListItem >
              <ListItemText sx={{ color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.38)', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize:'10px' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, children:nestChildren }, i) => (<>
              <ListItem disablePadding sx={{paddingRight: 2}} key={childId}>
                <ListItemButton className="hov-tag" selected={selectedIndex === childId} onClick={(event) => handleListItemClick(event, childId)} sx={item}>
                  <ListItemIcon className={`hov-icon ${theme.palette.type === 'dark' ?'dark':''} ${selectedIndex === childId? '': 'nosel'}`} sx={selectedIndex === childId? con: don}>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                  {nestChildren? (selectedIndex === childId ? <ArrowDropUpIcon /> : <ArrowRightIcon />) : ""}
                </ListItemButton>
               
              </ListItem>
              {nestChildren &&  <Collapse in={selectedIndex === childId} timeout="auto" unmountOnExit>
        <List  disablePadding>
          {nestChildren.map(({id: childId2, icon,}, io)=>(
            <ListItem disablePadding key={io}>
                  <ListItemButton sx={{ ...item2,pl: 5 }}>
                  <ListItemIcon sx={don}>{icon}</ListItemIcon>
                  <ListItemText>{childId2}</ListItemText>
              </ListItemButton>
              </ListItem>
          ))}
        </List>
      </Collapse>}
              </>
            ))}

            <Divider sx={{ mb: 3,  bgcolor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)': ''}} />
          </Box>
        ))}
            </List>
        </Drawer>
    )
}

export default Nav
