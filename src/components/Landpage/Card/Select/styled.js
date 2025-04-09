import styled from 'styled-components' 

export const CardBanner = styled.div.attrs({ 
})`           
    padding: 40px 25px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;
    
    @media (max-width: 991px) {
        align-items: center;
        text-align: center;
    }
`; 
 

export const CardBannerTitle = styled.div.attrs({ 
})`           
    font-size: 36px; 
    font-weight: 700;
    text-align: left;
    color: #000000;
    letter-spacing: -0.5px;
    line-height: 1.2;
    margin-bottom: 30px;
    
    @media (max-width: 991px) {
        text-align: center;
        font-size: 32px;
    }
    
    @media (max-width: 767px) {
        font-size: 28px;
    }
    
    b{
        color: ${ props => props.theme.palette.secondary.main };
    }
`; 
 

export const CardBannerText = styled.div.attrs({ 
})`           
    font-size: 16px;
    color: #666666;
    margin: 0 0 25px;
    text-align: left;
    max-width: 550px;
    line-height: 1.5;
    font-weight: 400;
    
    @media (max-width: 991px) {
        text-align: center;
        font-size: 15px;
    }
    
    @media (max-width: 767px) {
        font-size: 14px;
    }
    
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
    
    @media (max-width: 767px) {
        max-width: 300px;
    }
`;

export const CardButtonWrapper = styled.div`
    margin-top: 10px;
    
    button {
        font-size: 18px;
        padding: 12px 30px;
        border-radius: 4px;
        background-color: #e57250;
        border: none;
        
        &:hover {
            background-color: #d86540;
        }
    }
    
    @media (max-width: 991px) {
        margin: 10px auto 0;
    }
`; 