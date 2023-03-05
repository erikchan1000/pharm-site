import {styled} from '@mui/material/styles';
import {TextField} from '@mui/material';

export const StyledTextField = styled(TextField)({

    '& .MuiFilledInput-root': {
        borderRadius: '5px',
    },
    '& .MuiFilledInput-input': {
        'paddingTop': '10px',
        'paddingBottom': '3px',
        'paddingLeft': '10px',
        'paddingRight': '10px',
        fontSize: '0.65rem'
    },
    '& .MuiInputLabel-filled': {
        fontSize: '0.65rem',
        transform: 'translate(10px, 7px) scale(1)',
    },
    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
        transform: 'translate(10px, 1px) scale(0.7)',
    },
    '& .MuiFilledInput-underline:after': {
        borderBottom: 'none'
    },
    '& .MuiFilledInput-underline:before': {
        borderBottom: 'none'
    },
    '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: 'none'
    },

});