import styled from 'styled-components' 

export const MoreInfosContainer = styled.div.attrs({ 
})`          
    background-color: #fdf1e6;
    padding: 60px 0;
    margin: 100px 0 0;
    position: relative;
    color: black;
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
    color: #333;
    font-size: 32px;
    font-weight: bold;   
    text-align: center;
    margin-bottom: 15px;
`; 

export const MoreInfosText = styled.div.attrs({ 
})`          
    color: #666;
    font-size: 18px;   
    text-align: center;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`; 