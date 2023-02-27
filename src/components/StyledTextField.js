import {styled} from '@mui/material/styles';
import {TextField} from '@mui/material';

export const StyledTextField = styled(TextField)({

    '& .MuiFilledInput-input': {
        'padding-top': '10px',
        'padding-bottom': '3px',
        'padding-left': '10px',
        'padding-right': '10px',
        fontSize: '0.65rem'
    },
    '& .MuiInputLabel-filled': {
        fontSize: '0.65rem',
        transform: 'translate(10px, 7px) scale(1)',
    },
    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
        transform: 'translate(10px, 1px) scale(0.7)',
    },
});