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
                    <TextField id="outlined-basic" label="Name" variant="filled" />
                    <TextField id="outlined-basic" label="Clinic" variant="filled" />
                    <TextField id="outlined-basic" label="Docs" variant="filled" />
                </Box>

                <Button className='submit'>
                Submit
                </Button>

        </div>

    )
}