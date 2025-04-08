import styled from 'styled-components' 

export const CardBanner = styled.div.attrs({ 
})`           
    // background: ${ props => props.theme.palette.colors.white };
    // border-radius: 17px;
    padding: 24px 25px 30px;
    margin: 100px 0 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 
 

export const CardBannerTitle = styled.div.attrs({ 
})`           
    font-size: 48px; 
    font-weight: 900;
    text-align: center;
    color: ${ props => props.theme.palette.white.main };
    
    b{
        color: ${ props => props.theme.palette.secondary.main };
    }

`; 
 

export const CardBannerText = styled.div.attrs({ 
})`           
    font-size: 22px;
    color: ${ props => props.theme.palette.colors.white };
    margin: 12px 0 20px;
    padding-right: 30px;
    text-align: center;
    b{
        color: ${ props => props.theme.palette.primary.main };
    }
`; 

export const CardBannerDecoration = styled.div.attrs({ 
})`           
    height: .5px;
    background: ${ props => props.theme.palette.secondary.main };
    width: 240px;
`; 
 