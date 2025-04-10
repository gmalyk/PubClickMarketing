import React from 'react';
import { Modal as ReactstrapModal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import styled from 'styled-components';

const StyledModal = styled(ReactstrapModal)`
  .modal-content {
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
  
  .modal-header {
    border-bottom: 1px solid #eee;
    padding: 15px 20px;
    
    .modal-title {
      font-weight: 700;
      font-size: 20px;
      color: #000;
    }
    
    .close {
      font-size: 24px;
      opacity: 0.5;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }
  
  .modal-body {
    padding: 20px;
    max-height: 70vh;
    overflow-y: auto;
    
    h1 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
      color: #000;
    }
    
    .subtitle {
      margin-bottom: 20px;
      font-size: 16px;
      color: #555;
    }
    
    h2 {
      font-size: 18px;
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 15px;
      color: #000;
    }
    
    p {
      margin-bottom: 15px;
      line-height: 1.5;
      color: #333;
    }
    
    ul {
      padding-left: 20px;
      margin-bottom: 15px;
      margin-top: 15px;
      
      li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 15px;
        list-style-type: none;
        
        &:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #555;
        }
      }
    }
  }
  
  .modal-footer {
    padding: 15px 20px;
    border-top: 1px solid #eee;
  }
`;

const Modal = ({ isOpen, toggle, title, children, size = "lg", centered = true }) => {
  return (
    <StyledModal isOpen={isOpen} toggle={toggle} size={size} centered={centered}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </StyledModal>
  );
};

export default Modal; 