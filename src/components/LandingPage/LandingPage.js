import './index.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Form from '../Form/Form.js';
import logo from "../Assets/picture.webp";
import customer from "../Assets/customer.png";
import doctor from "../Assets/doctor.png";


const CustomButton = ({image, content, buttonId, setButtonId, currId}) => {
    const handleClick = (event) => {
        setButtonId(event.currentTarget.id);
    }

    return (
        <div className={'CustomButton ' + (currId !== null ? "active " : ' ')}>
            <img src={image}></img>
            <Button id={buttonId} className={'Button ' + (currId === buttonId ? "selected" : "")} variant='contained' onClick={handleClick}>{content}</Button>
        </div>
    )
}

export default function LandingPage(props) {

    const initialForm = {
        name: '',
        clinic: '',
        docs: ''
    }

    const [buttonId, setButtonId] = useState(null);
    const [form, setForm]  = useState(initialForm);

    return (
        
        <>
            <div className='Header'>
                <img src={logo} alt="logo" className="Logo"/>
                
            </div>
            <div className={'Login ' + (buttonId !== null ? "active" : '')}>
                <h1 className={buttonId !== null ? "adjust" : ""}>
                    Select the account you are registering as:
                </h1>
                <div className="Buttons">
                    <CustomButton image={doctor} content="Doctor" buttonId="1" setButtonId={setButtonId} currId={buttonId}/>
                    <CustomButton image={customer} content="Patient" buttonId="2" setButtonId={setButtonId} currId={buttonId}/>
                </div>
                <Form activeButton={buttonId} hidden={buttonId === null}/>
            </div>
            <div className={"Register " + (buttonId !== null ? "hidden" : "")}>
                <p>
                    Already have an account? <a href='/login'>Login</a>
                </p>
            </div>            
        </>
    )
}

