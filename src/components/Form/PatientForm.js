import { TextField } from '@mui/material';
import { StyledTextField } from '../StyledTextField';
import FormControl from '@mui/material/FormControl';
import React from 'react';
import {IMaskInput} from 'react-imask';
import {useState} from 'react';

const PhoneTextMask = React.forwardRef( 
    function PhoneTextMask(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="(000) 000-0000"
                lazy={false}
                definitions={{
                    '0': /[0-9]/,
                }}
                inputRef={ref}
                onAccept={(value) => onChange({target: { name: props.name, value}})
                }
                overwrite
            />
        )
    }
)

export default function PrescriberForm({formId, buttonId}) {

    const [values, setValues] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        NPI: '',
        StateLicense: '',
        PhoneTextMask: '',

    })
    
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })

    }
    
    const form1 = (
        <>
            
            <StyledTextField id={buttonId} label="First Name" variant="filled" className="fields" size="small" 
                inputProps={{
                    value: values.FirstName,
                    onChange: handleChange,
                    name: 'FirstName'
                }}
            />
            <StyledTextField id={buttonId} label="Last Name" variant="filled" className="fields" size="small"
                inputProps={{
                    value: values.LastName,
                    onChange: handleChange,
                    name: 'LastName'
                }}
            />
            <FormControl variant="standard" className='phone'>
                <StyledTextField id={buttonId} label="Phone" variant="filled" className="fields phone" size="small"
                    
                    InputProps={{
                        inputComponent: PhoneTextMask,
                        value: values.PhoneTextMask,
                        onChange: handleChange,
                        name: 'PhoneTextMask',

                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>
            <StyledTextField id={buttonId} label="Email" variant="filled" className="fields" size="small"
                inputProps={{
                    value: values.Email,
                    onChange: handleChange,
                    name: 'Email'
                }}
            />

        </>
    )

    const form2 = (
        <>
            <StyledTextField
                id={buttonId}
                label="Password"
                variant="filled"
                className="fields"
                size="small"
                inputProps={{ 
                    type: 'password',
                    value: values.Password,
                    onChange: handleChange,
                    name: 'Password'
            }}
            />
            <StyledTextField
                id={buttonId}
                label="Confirm Password"
                variant="filled"
                className="fields"
                size="small"
                inputProps={{ 
                    type: 'password',
                    value: values.ConfirmPassword,
                    onChange: handleChange,
                    name: 'ConfirmPassword'
                 }}
            />
        </>
    )

    const form3 = (
        <>
            <TextField id={buttonId} label="First Name" variant="filled" className="fields" size="small"
                inputProps={{
                    value: values.FirstName,
                    onChange: handleChange,
                    name: 'FirstName'
                }}
            />
            <TextField id={buttonId} label="Last Name" variant="filled" className="fields" size="small"
                inputProps={{
                    value: values.LastName,
                    onChange: handleChange,
                    name: 'LastName'
                }}
            />
            <FormControl variant="standard" className='phone'>
                <TextField id={buttonId} label="Phone" variant="filled" className="fields phone" size="small"
                    
                    InputProps={{
                        inputComponent: PhoneTextMask,
                        value: values.PhoneTextMask,
                        onChange: handleChange,
                        name: 'PhoneTextMask'

                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>
            <TextField id={buttonId} label="Email" variant="filled" className="fields" size="small"
                inputProps={{
                    value: values.Email,
                    onChange: handleChange,
                    name: 'Email'
                }}
            />
        </>
    )

    const form4 = (
        <>
            <TextField
                id={buttonId}
                label="Password"
                variant="filled"
                className="fields"
                size="small"
                inputProps={{ 
                    type: 'password',
                    value: values.Password,
                    onChange: handleChange,
                    name: 'Password'
            }}
            />
            <TextField
                id={buttonId}
                label="Confirm Password"
                variant="filled"
                className="fields"
                size="small"
                inputProps={{ 
                    type: 'password',
                    value: values.ConfirmPassword,
                    onChange: handleChange,
                    name: 'ConfirmPassword'
                 }}
            />
        </>
    )
    

    if (formId === "1") {
        return (
            form1
        )
    }
    if (formId === "2") {
        return (form2)
    }
    if (formId === "3") {
        return (form3)
    }
    if (formId === "4") {
        return (form4)
    }

}
