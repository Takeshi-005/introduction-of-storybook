import React from 'react';
import styled from 'styled-components'


// ______________________________________________________
//
// @ Types
interface Props {
  text: string;
  className?:string;
  handleClick?: (e:React.MouseEvent) => void;
}


// ______________________________________________________
//
// @ View
const Button:React.FC<Props> = (props) => (
  <button
    className={props.className}
    onClick={props.handleClick}
  >
    {props.text}
  </button>
)

export default styled(Button)`
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
