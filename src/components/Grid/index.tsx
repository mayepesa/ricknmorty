import React from "react";
import { ICharacter } from "../../types";
import Card from "../Card";
import { StyledGrid } from "./style";

type Props = {
  data: ICharacter[];
  backgroundColor: string;
};

const Grid = ({ data, backgroundColor }: Props) => {
  return (
    <StyledGrid data-testid="background" color={backgroundColor}>
      {data?.map((character: ICharacter, index: number) => (
        <Card key={character.id} data={character} isEven={index % 2 === 0} />
      ))}
    </StyledGrid>
  );
};

export default Grid;
