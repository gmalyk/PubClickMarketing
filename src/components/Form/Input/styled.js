import styledCmp from 'styled-components'  

import { styled } from '@mui/material/styles'; 
// import Input from '@mui/material/Input'; // standard (material)
// import Input from '@mui/material/FilledInput'; 
import Input from '@mui/material/OutlinedInput'; 


export const MaterialInput = styled(Input)(({ theme }) => ({  
    background: theme.palette.colors.white
}));

export const InputIcon = styledCmp.img.attrs({ 
})`
`;