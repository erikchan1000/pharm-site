import './form.css';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';

export default function Form({hidden, activeButton}) {

    return (
        <div className={'Form ' + (hidden ? 'hidden' : 'unhidden')} >
                <Box component="form" sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Name" variant="filled" className="fields"/>
                    <TextField label="Clinic" variant="filled" className="fields"/>
                    <TextField label="Docs" variant="filled" className="fields"/>
                </Box>
                    
                <Button className='submit'>
                Submit
                </Button>

        </div>

    )
}