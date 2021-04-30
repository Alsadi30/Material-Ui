import React,{useState} from 'react'
import {Typography,Button,Paper,Switch} from '@material-ui/core'

// import DeleteIcon from '@material-ui/icons/Delete';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {  orange } from '@material-ui/core/colors';





function MakeStyles() {
 
const [dark,setMode] =  useState(true)
const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: orange[500],
      },
      primary:{
          main:orange[900]
      },
      type:dark?'dark':'light'

    },
  });

  return (
    <ThemeProvider theme={outerTheme}>
        <Paper elevation={10}>

        <Button  variant='contained' color={'secondary'} > Button</Button>
         <Switch checked={dark}  onClick={()=>setMode(!dark)} />
    <Typography variant="h3" color={'primary'} align={'center'}>Learning Typography of material ui</Typography>
    </Paper>
    </ThemeProvider> 
  )
}

export default MakeStyles
