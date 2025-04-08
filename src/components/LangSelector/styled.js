import styled from "styled-components";
import { DecoratedScroll, Icon } from "ui/styled";




export const WrapLanguages = styled.div.attrs({})`
    position:relative;
`;

export const LangContent = styled.div.attrs({})`
    position: absolute;    
    width: 100%;
    background: ${ p => p.theme.palette.colors.white };
    margin-top: 6px;
    padding: 8px 12px;
    border-radius: 32px;
    box-shadow: 0px 1px 3px ${ p => p.theme.palette.colors.shadow };
`;

export const LangScroll = styled(DecoratedScroll).attrs({})`
    width: 100%;   
    height: 120px;
    overflow: auto;
    margin: 12px 0;
    ${
       p => p.footer ? `
          height: 80px;
          margin: 2px 0;
       ` : ``
    }
`;

export const LangItem = styled.div.attrs({})`
  color: ${ p => p.theme.palette.colors.black };
  padding: 8px 4px;
  cursor: pointer;
  transition: all .3s ease;
  &:hover{
    color: ${ p => p.theme.palette.secondary.main };
  }
`;