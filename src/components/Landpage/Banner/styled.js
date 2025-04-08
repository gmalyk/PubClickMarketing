import styled from 'styled-components' 

export const BannerImage = styled.div.attrs({ 
})`           
    margin-top: 73px;
    position: relative;
    min-height: calc(100vh - 73px);
    width: 100%;

    background: white url(/images/banner2.jpg) no-repeat center center / cover;

    overflow: hidden;
`; 

export const BannerOut = styled.div.attrs({ 
})`            
    min-height: calc(100vh - 73px);
    width: 100%;

    background: ${props => props.theme.palette.colors.shadow }; 
    mix-blend-mode: multiply;
`; 

export const BannerContent = styled.div.attrs({ 
})`           
    min-height: calc(100vh - 73px);
    width: 100%; 

    background: -moz-linear-gradient(0deg, ${ props => props.theme.palette.primary.main } -100px, rgba(41,28,68,0) 60%);
    background: -webkit-linear-gradient(0deg, ${ props => props.theme.palette.primary.main } -100px, rgba(41,28,68,0) 60%);
    background: linear-gradient(0deg, ${ props => props.theme.palette.primary.main } -100px, rgba(41,28,68,0) 60%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${ props => props.theme.palette.primary.main }",endColorstr="rgba(41,28,68,0)",GradientType=1);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`; 

export const BannerCard = styled.div.attrs({ 
})`           
`; 