import styled from "styled-components";

export const ColorPickerWrapper = styled.div<{ color: string}>`
  position: relative;
  width: 50px;
  height: 50px;
  border-color: white;
  border-radius: 50%;
  border: 1px solid white;
  background-color: ${props => props.color || 'transparent'};

  &:hover{
    cursor: pointer;
  }
`;

export const StyledColorpicker = styled.div`
  z-index: 2;
  position: absolute;
  top: 20px;
  right: 30px;
  @media (max-width: 768px) {
    top: 30px;
    right: -20px;
  }
`;
