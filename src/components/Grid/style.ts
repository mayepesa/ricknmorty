import styled from "styled-components";

export const StyledGrid = styled.div<{ color: string }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  border-radius: 20px;
  background-color: ${(props) => props.color || "transparent"};
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

  }

`;
