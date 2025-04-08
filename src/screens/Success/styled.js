import styled from 'styled-components' 

export const Content = styled.div.attrs({ 
})`          
    overflow:hidden;
`;
 

export const PageContent = styled.div.attrs({ 
})`          
    padding:105px 0 32px;
    display: flex;
    flex-direction: column;
`;
 

export const IconContent = styled.div.attrs({ 
})`          
    margin: 60px auto 32px;
`;

export const Title = styled.div.attrs({
})`           
    font-size: ${props => props.small ? `20px` : `32px`};
    font-weight: 900;
    text-align: center; 
    color: ${ p => p.theme.palette.colors.stell };
`;

export const Text = styled.div.attrs({
})`           
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: ${ p => p.theme.palette.colors.stell };

    max-width: 380px;
    margin: 18px auto 0;
`;