import styled from 'styled-components' 

export const MoreInfosItemContent = styled.div.attrs({ 
})`    
    margin: 27px auto 0;
    padding-top: 10px;
    border-radius: 23px; 
    padding-bottom: 20px; 
 
    display: flex;
    align-items: center;
    max-width: 500px;
`; 
 
export const MoreInfosImage = styled.div.attrs({ 
})`    
    height: 127px;
    border-radius: 23px 23px 0 0; 
    background: rgba(255,255,255,.1) url(${props => props.image}) no-repeat center center / cover;
`; 
 
 
export const MoreInfosItemText = styled.div.attrs({ 
})`    
    font-size: 20px;
    font-weight: bold;
    color: ${ props => props.theme.palette.colors.black };
    margin: 20px 30px 0;
    ${
        p => p.text ? `
            font-size: 16px;
            font-weight: 400;
            text-align: left;
        ` : ``
    }
`; 
 


export const MoreInfosItemSection = styled.div.attrs({ 
})`
`;