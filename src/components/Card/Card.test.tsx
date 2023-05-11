import { render, screen } from "@testing-library/react";
import Card from ".";
import 'jest-styled-components';

const CharacterExample = {
  id: 6,
  name: "Abadango Cluster Princess",
  status: "Alive",
  species: "Alien",
  type: "",
  gender: "Female",
  origin: {
    name: "Abadango",
    url: "https://rickandmortyapi.com/api/location/2",
  },
  location: {
    name: "Abadango",
    url: "https://rickandmortyapi.com/api/location/2",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/27"],
  url: "https://rickandmortyapi.com/api/character/6",
  created: "2017-11-04T19:50:28.250Z",
};

describe("Rendering Card", () => {
  it("renders correctly with image and content", async () => {
    const { getByText, getByAltText, getByTestId } = render(<Card data={CharacterExample} isEven={true}/>);


    const card = getByTestId('card');
    expect(card).toBeInTheDocument();

    const name = 'Name: Abadango Cluster Princess';
    const nameElement = getByText(name);
    expect(nameElement).toBeInTheDocument();
    
    const imgAlt = 'Abadango Cluster Princess';
    const imgElement = getByAltText(imgAlt);
    expect(imgElement).toBeInTheDocument();
  });

  it('should have the correct opacity', () => {
    const { getByTestId } = render(<Card data={CharacterExample} isEven={true}/>);
    const card = getByTestId('card');
    expect(card).toHaveStyleRule('opacity', '0.5', {
        modifier: '&:after' 
      });
  });

});
