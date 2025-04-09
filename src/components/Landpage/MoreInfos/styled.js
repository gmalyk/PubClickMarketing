import styled from 'styled-components' 

export const MoreInfosContainer = styled.div.attrs({ 
})`          
    background: url('/images/orangeBackground.jpg') no-repeat center center;
    background-size: cover;
    padding: 60px 0;
    margin: 100px 0 0;
    position: relative;
    color: white;
`; 

export const MoreInfosDecoration = styled.img.attrs({ 
    src:'/icons/circle-1.svg'
})`          
    width: 793px;
    position: absolute;
    top: 0px;
    left: -279px;
`; 

export const MoreInfosTitle = styled.div.attrs({ 
})`          
    color: white;
    font-size: 32px;
    font-weight: bold;   
    text-align: center;
    margin-bottom: 15px;
`; 

export const MoreInfosText = styled.div.attrs({ 
})`          
    color: rgba(255, 255, 255, 0.9);
    font-size: 20px;   
    text-align: center;
    margin-bottom: 30px;
`; 