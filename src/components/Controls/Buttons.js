import React from 'react'
import { Button as MuiButton} from '@mui/material';


export default function Buttons(props) {
    const{text, size,color,variant, onClick, ...other}=props;
    return (
    <MuiButton
    variant={variant || 'contained'}
    color={color || 'primary'}
    size={size || 'large'}
    onClick={onClick}
    {...other}
    style={{margin:'4px'}}
    >
        {text}
    </MuiButton>
  )
}
