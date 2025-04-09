import styled from 'styled-components' 

export const CardBanner = styled.div.attrs({ 
})`           
    padding: 24px 25px 30px;
    margin: 100px 0 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;
`; 
 

export const CardBannerTitle = styled.div.attrs({ 
})`           
    font-size: 56px; 
    font-weight: 900;
    text-align: left;
    color: #000000;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 20px;
    
    b{
        color: ${ props => props.theme.palette.secondary.main };
    }
`; 
 

export const CardBannerText = styled.div.attrs({ 
})`           
    font-size: 24px;
    color: #333333;
    margin: 20px 0 30px;
    text-align: left;
    max-width: 500px;
    line-height: 1.4;
    font-weight: 500;
    
    b{
        color: ${ props => props.theme.palette.primary.main };
    }
`; 

export const CardBannerDecoration = styled.div.attrs({ 
})`           
    height: 2px;
    background: ${ props => props.theme.palette.secondary.main };
    width: 180px;
    margin: 0 0 10px 0;
`; 

export const CardBannerLogo = styled.img.attrs({
    src: '/images/Logo.png',
    alt: 'PubClick Marketing Logo'
})`
    max-width: 400px;
    margin-bottom: 30px;
`;

export const CardButtonWrapper = styled.div`
    margin-top: 20px;
    
    button {
        font-size: 18px;
        padding: 12px 30px;
        border-radius: 8px;
    }
`; 