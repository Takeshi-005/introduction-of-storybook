import React from 'react';
import styled from 'styled-components'


// ______________________________________________________
//
// @ Types
interface Props {
  /** 表示するテキスト */
  text: string;
  /** styled-components */
  className?:string;
  handleClick?: (e:React.MouseEvent) => void;
}

// ______________________________________________________
//
// @ View
const Button = (props:Props) => (
  <StyledButton
    className={props.className}
    onClick={props.handleClick}
  >
    {props.text}
  </StyledButton>
)

// ______________________________________________________
//
// @ StyledView
const StyledButton = styled.button`
  background-color: rgb(234, 53, 45);
  color: rgb(255, 255, 255);
  display: block;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 53, 45);
  border-image: initial;
  border-radius: 4px;
  padding: 8px 10px;
`;


export default Button;
