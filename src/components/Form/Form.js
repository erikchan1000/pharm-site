import './form.css';
import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { TextField, Button, useMediaQuery } from '@mui/material';
import { StyledTextField } from '../StyledTextField';



export default function Form({hidden, activeButton}) {
    const matches = useMediaQuery('(max-width:450px)');

    const form1 = (
        <>
            <StyledTextField id="standard-basic" label="Name" variant="filled" className="fields" size="small"/>
            <StyledTextField id="standard-basic" label="Clinic" variant="filled" className="fields" size="small"/>
            <StyledTextField id="standard-basic" label="Docs" variant="filled" className="fields" size="small"/>
            <StyledTextField id="standard-basic" label="Email" variant="filled" className="fields" size="small"/>
        </>
    )

    const form2 = (
        <>
            <TextField id="standard-basic" label="Name" variant="filled" className="fields" size="small"/>
            <TextField id="standard-basic" label="Clinic" variant="filled" className="fields" size="small"/>
            <TextField id="standard-basic" label="Docs" variant="filled" className="fields" size="small"/>
            <TextField id="standard-basic" label="Email" variant="filled" className="fields" size="small"/>
        </>
    )
    
    return (
        <div className={'Form ' + (hidden ? 'hidden' : 'unhidden')} >
            <div className='form-header'>
                <h2>Login</h2>
                <h2>Register</h2>

            </div>
            <div className='content'>
                <Box component="form" sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                    noValidate
                    autoComplete="off"
                >
                    {!matches ? form1 : form2}
                </Box>
                
                
            </div>
            <Button className='submit'>
                Submit
            </Button>

        </div>

    )
}