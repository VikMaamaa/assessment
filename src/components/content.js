import React, {useState, useRef, useEffect} from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled,useTheme } from '@mui/material/styles';
// import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import FontDownloadSharpIcon from '@mui/icons-material/FontDownloadSharp';
import date from 'datejs'
import Box from '@mui/material/Box';
import MUIRichTextEditor from "mui-rte";
import Container from '@mui/material/Container';

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.type === 'dark' ? 'rgba(0, 0, 0, 0.6)' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color:theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.6)': '',
  borderRadius: 4,
  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)'
}));

const initialData =[
  {subject: 'How could people together can help bringing peace to the world', note: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Animi distinctio ea eligendi laborum nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!', date: '14th June 2022'},
  {subject: 'How could people together can help bringing peace to the world', note: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Animi distinctio ea eligendi laborum nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!', date: '14th June 2022'},
  {subject: 'How could people together can help bringing peace to the world', note: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Animi distinctio ea eligendi laborum nemo odio perferendis quas qui sint voluptatibus, iste minus perspiciatis quod vero!', date: '14th June 2022'}
]

function Content() {
  const theme = useTheme()
  const [notes, setNotes] = useState(initialData)
  const [dis, setDis] = useState()
  const subjectRef = useRef(null)
  const noteRef= useRef(null)
  const [toggle,setToggle] = useState(false)
  const currentPage = useRef(1)
  const countRef = useRef([0,3])
  
  useEffect(() => {
    let t = notes
    setDis(t.slice(0,3))
  }, [notes])

  const addNote = () =>{
   console.log(notes.length)
    setNotes((prev)=>{
      return [ {subject: subjectRef.current, note: noteRef.current, date: Date.today().toString("dS MMMM yyyy")},...prev]
    })


  }
  const nextNotes = () => {
    if( notes.length <= ((currentPage.current+1) * 3) ){
       //currentPage.current +=1
       let init = currentPage.current*3
       let ent =  init + 3
       countRef.current=[]
       currentPage.current +=1
       let t = notes
       //console.log(t.slice(init, ent))
       setDis(t.slice(init, ent))
       //setToggle(true)
    }else{
    
     return
    }
  }
  const prevNotes = () => {
    console.log(currentPage.current)
    if(currentPage.current-1 != 0)  {
      //currentPage.current +=1
      let init = (currentPage.current-1) * 3
      let ent =  init - 3
      countRef.current=[ent, init]
      currentPage.current -=1
      let t = notes
      //console.log(ent, init)
      //console.log(t.slice(ent,init))
      setDis(t.slice(ent,init))
      //setToggle(true)
   }else{
   
    return
   }
  }
  const save = (data) => {
    //console.log(data);
   // console.log(data.getCurrentContent().getPlainText());
  };
  
  const save2 = (data) => {
    //console.log(data.getCurrentContent().getPlainText());
    let value = data.getCurrentContent().getPlainText()
    noteRef.current = value
  };
    return (<>
        <Stack spacing={2}>
        <Item sx={{paddingLeft:{md:'1rem'}}}>
         <Stack direction="column"
  justifyContent="space-evenly"
  alignItems="flex-start"
  spacing={2}>
     <h2 style={{color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.87)', textAlign:'left', fontWeight:700, fontSize:22, marginTop:'0.2rem', marginBottom:'0.2rem'}}>Make Note</h2>
     
          <TextField
          id="input-with-icon-adornment"
          variant="outlined"
          sx={{width:{xs:'100%', sm:'90%'}, border: theme.palette.type === 'dark' ?'1px solid rgba(255, 255, 255, 0.38)':''}}
          InputProps={{
            disableunderline: 'true',
            sx: { fontSize: 'default', height: '2.4rem', color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)': '' },
            startAdornment:(
              <InputAdornment position="start">
                <FontDownloadSharpIcon sx={{color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)': ''}}/>
              </InputAdornment>
            ),
            placeholder: 'Subject',
            padding: '10%',
            onChange:(event)=> {
              const { value } = event.target;
          
              subjectRef.current = value
            }
          }}
         
        />
    
       <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{width:{xs:'100%', sm:'90%'}}}>
      
        <Box className={`tllbar ${theme.palette.type === 'dark' ? 'dark': '' }`} gridColumn="span 12" >
        <MUIRichTextEditor
      label="Enter Note"
      onSave={save}
      inlineToolbar={true}
      onChange={save2}
      toolbar={true}
       enableColorOnDark
       
      inlineStyle= {{
		   color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)':'rgba(0, 0, 0, 0.87)'
		  }}
      // sx={{width:{xs:'100%', sm:'90%'}}}
    />
        </Box>
      </Box> 
        {/*<TextField
          id="outlined-textarea"
          // label="Multiline Placeholder"
          placeholder="Enter Note"
          multiline
          rows={4}
          InputProps={{
            sx:{color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.87)': '', border: theme.palette.type === 'dark' ?'1px solid rgba(255, 255, 255, 0.38)':''},
            onChange:(event)=> {
              const { value } = event.target;
             
              noteRef.current = value
            }
          }}
          sx={{width:{xs:'100%', sm:'90%'}, boxShadow: '0px 11px 19px rgba(0, 0, 0, 0.1)', color: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.6)': ''}}
        />*/} 

          <Button onClick={()=>addNote()} sx={{background:'#6200EE', width:{md:'25%', sm:'40%', xs:'40%'}, fontSize:{md:'0.85rem',sm:'0.83rem' ,xs:'0.82rem'}, padding: '0.7%'}} variant="contained">
            <span >SAVE NEW NOTE</span> </Button>
         </Stack>
         
        </Item>
        {(dis?.length>0) && dis.map((n,io)=><Item key={io} sx={{paddingLeft:{md:'1rem'}}}>
        <Stack direction="column"
  justifyContent="space-evenly"
  alignItems="stretch"
  spacing={2}>
    <h6 style={{color: theme.palette.type === 'dark' ?'rgba(255, 255, 255, 0.6)' :'rgba(0, 0, 0, 0.6)',fontSize: '0.7rem', textTransform: 'uppercase', fontWeight:'400',textAlign:'left', margin:'0.3rem'}}>Your Note</h6>
    <h3 style={{margin:'0.2rem', textAlign:'left', fontSize:'1.3rem', color: theme.palette.type === 'dark' ?'rgba(255, 255, 255, 0.87)' :'rgba(0, 0, 0, 0.87)', fontWeight:'400'}}>{n.subject}</h3>  
    <h6 style={{color:theme.palette.type === 'dark' ?'rgba(255, 255, 255, 0.6)' :'rgba(0, 0, 0, 0.6)',fontSize: '0.7rem', letterSpacing:'0.4px', fontWeight:'400',textAlign:'left', margin:'0.7rem'}}>{n.date}</h6>
    <h6 style={{color: theme.palette.type === 'dark' ?'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)', letterSpacing: '0.5px', fontWeight:'400', fontSize:'16px',margin:'0.3rem', textAlign:'left'}}>
   {n.note}
    </h6>
    <Button className="but-view" variant="text" sx={{color:'#6200EE', alignSelf:'flex-end'}}>View</Button>
  </Stack>
        </Item>)}
        
     
      </Stack>
      <Stack mt={2} direction="row" justifyContent="flex-end"
  alignItems="center">
      <IconButton onClick={()=>prevNotes()}>
          <ArrowBackIosNewIcon sx={{color:'#E00930'}} />
      </IconButton>
      <IconButton onClick={()=>nextNotes()}>
        <ArrowForwardIosIcon sx={{color:'#E00930'}}/>
      </IconButton>
      </Stack>
      </>
    )
}

export default Content
