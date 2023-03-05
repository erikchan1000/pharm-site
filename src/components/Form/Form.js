import './form.css';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Button, useMediaQuery } from '@mui/material';
import PrescriberForm from './PrescriberForm.js';
import PatientForm from './PatientForm.js';


export default function Form({hidden, activeButton}) {
    const matches = useMediaQuery('(max-width:520px)');
    console.log(activeButton)
    if (activeButton === '1') {
        return (
            <div className={'Form ' + (hidden ? 'hidden' : 'unhidden')}>
                
                <div className='content' >
                    <Box component="form" sx={{
                        '& > :not(style)': { margin: "0px 8px", width: '25ch' },
                    }}
                        noValidate
                        autoComplete="off"
                    >
                        {!matches ? <PrescriberForm formId="1" /> : <PrescriberForm formId="3"/>}
                    </Box>

                    <Box component="form" sx={{
                        '& > :not(style)': { margin: "0px 8px", width: '25ch' },
                    }}
                        noValidate
                        autoComplete="off"
                    >
                        {!matches ? <PrescriberForm formId="2" /> : <PrescriberForm formId="4" />}
                    </Box>
                  
                    
                </div>
                <Button className='submit'>
                    Submit
                </Button>

            </div>

        )
    }

    return (
        <div className={'Form ' + (hidden ? 'hidden' : 'unhidden')}>
                
                <div className='content'>
                    <Box component="form" sx={{
                        '& > :not(style)': { margin: "0px 8px", width: '25ch' },
                    }}
                        noValidate
                        autoComplete="off"
                    >
                        {!matches ? <PatientForm formId="1"  buttonId={activeButton}/> : <PatientForm formId="3"  buttonId={activeButton}/>}
                    </Box>

                    <Box component="form" sx={{
                        '& > :not(style)': { margin: "0px 8px", width: '25ch' },
                    }}
                        noValidate
                        autoComplete="off"
                    >
                        {!matches ? <PatientForm formId="2"  buttonId={activeButton}/> : <PatientForm formId="4"  buttonId={activeButton}/>}
                    </Box>
                    
                    
                </div>
                <Button className='submit'>
                    Submit
                </Button>

            </div>
    )
}