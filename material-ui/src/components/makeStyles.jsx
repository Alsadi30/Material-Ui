import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
// import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
   buttonStyle : props => ({
       color : props.bool? 'Yello':'Red',
       background:props.bool?'Grey':'blue' ,
       fontSize:20
   })
})

function MakeStyles(props) {
    const classes = useStyles(props)
    console.log(props)
    return (
        <div>
            <Button variant="outlined" color="secondary" >Red </Button>
            <Button className={classes.buttonStyle} onClick={props.handleClick} > MakeStyles Button </Button>
        </div>
    )
}

export default MakeStyles
