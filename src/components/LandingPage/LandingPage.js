import './index.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Form from '../Form/Form.js';
import logo from "../Assets/picture.webp";

export default function LandingPage(props) {

    const initialForm = {
        name: '',
        clinic: '',
        docs: ''
    }

    const [buttonId, setButtonId] = useState(null);
    const [form, setForm]  = useState(initialForm);


    const handleClick = (event) => {
        console.log(event.currentTarget.id)
        console.log(typeof(event.currentTarget.id))
        setButtonId(event.currentTarget.id);
    }

    return (
        
        <>
            <div className='Header'>
                <img src={logo} alt="logo" className="Logo"/>
                
            </div>
            <div className={'Login ' + (buttonId !== null ? "active" : '')}>
                <h1 className={buttonId !== null ? "adjust" : ""}>
                    You are a...
                </h1>
                <div className="Buttons">
                    <Button id="1" className={'Button ' + (buttonId !== null ? "active " : ' ') + (buttonId === "1" ? "selected" : "")} variant='contained' onClick={handleClick}>Customer</Button>
                    
                    <Button id="2" className={'Button ' + (buttonId !== null ? "active " : ' ') + (buttonId === "2" ? "selected" : "")} variant='contained' onClick={handleClick}>Prescriber</Button>
                    
                </div>
                <Form activeButton={buttonId} hidden={buttonId === null}/> 
            </div>
            
        </>
    )
}

