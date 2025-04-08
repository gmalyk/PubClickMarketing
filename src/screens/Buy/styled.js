import styled from 'styled-components' 

export const Content = styled.div.attrs({ 
})`          
    overflow:hidden;
`;
 

export const PageContent = styled.div.attrs({ 
})`          
    padding: 105px 0 32px;
`;

export const HeaderContent = styled.div.attrs({ 
})`
    margin-top: 73px;
    padding: 24px 0;
    display: flex;
    align-items: center;
    gap: 24px;

    @media(max-width: 767px){
        flex-wrap: wrap;
    }
`;
export const HeaderImage = styled.img.attrs({ 
    src:'/images/stripe.png'
})`
    width: 100%;
    max-width: 430px;
    mix-blend-mode: multiply;
`;
export const HeaderInfos = styled.div.attrs({ 
})`
`;
export const HeaderInfosTitle = styled.div.attrs({ 
})`
    font-size: 28px;
`;
export const HeaderInfosText = styled.div.attrs({ 
})`
    padding: 8px 0 0;
    font-size: 16px;
    p {
        margin: 0;
    }
`;
export const BodyForm = styled.div.attrs({ 
})`
    padding: 16px;
    background: ${ p => p.theme.palette.colors.lightshadow };
    border: 1px solid ${ p => p.theme.palette.colors.lightshadow };
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
`;

export const BodyTerms = styled.div.attrs({ 
})`
    display: flex;
    align-items: center; 
`;

export const BodyTermsLink = styled.div.attrs({ 
})`
    cursor: pointer;
    color: ${ p => p.theme.palette.secondary.main };
    text-decoration: underline;
    margin: -3px 2px 0 -10px;
`;
 
export const BodyActions = styled.div.attrs({ 
})`
    margin: 0 auto;
`;
 