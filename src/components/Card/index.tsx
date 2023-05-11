import { ICharacter } from "../../types";
import { StyledCard, Image } from "./style";

type Props = {
  data: ICharacter;
  isEven: boolean;
};

const Card = ({ data, isEven }: Props) => {
  const { image, name, origin } = data;
  return (
    <StyledCard data-testid='card' $isEven={isEven}>
      <Image src={image} alt={name} />
      <p>Name: {name}</p>
      <p>Origin: {origin.name}</p>
    </StyledCard>
  );
};

export default Card;
