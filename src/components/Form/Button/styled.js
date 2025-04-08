import styledCmp from 'styled-components' 
import ReactLoading from 'react-loading'

import { styled } from '@mui/material/styles'; 
import Button from '@mui/material/Button'; 

export const Load = styledCmp(ReactLoading).attrs( props => ({
    type: 'spin',
    color:  props.theme.palette[ props.theme.palette[props?.color] ? props?.color : "primary"]?.[props.outline ? "main" : "contrastText"],
    height: 20,
    width: 20
}))`
`;

export const ColorButton = styled(Button)(({ theme, nospace }) => ({
    width:'100%',
    minHeight: '45px',
    marginTop: nospace ? '0px' : '12px'
}));