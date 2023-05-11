import styled from "styled-components";

export const StyledCard = styled.div<{ $isEven: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  min-height: 350px;
  padding: 1em;
  font-size: 16px;
  text-align: center;
  position: relative;
  isolation: isolate;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #D3D3D3;
    border-radius: 20px;
    z-index: -1;
    opacity: ${(props) => (props.$isEven ? 0.5 : 0.9)};
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  max-width: 200px;
`;