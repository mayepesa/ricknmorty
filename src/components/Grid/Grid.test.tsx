import { render, screen} from "@testing-library/react";
import Grid from ".";
import 'jest-styled-components';

const ArrExample = [
  {
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
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    type: "Genetic experiment",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Testicle Monster Dimension",
      url: "https://rickandmortyapi.com/api/location/21",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
    ],
    url: "https://rickandmortyapi.com/api/character/7",
    created: "2017-11-04T19:59:20.523Z",
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/28"],
    url: "https://rickandmortyapi.com/api/character/8",
    created: "2017-11-04T20:03:34.737Z",
  },
];

describe("Rendering grid", () => {
  it("renders the grid", async () => {
    const { getByTestId } = render(<Grid data={ArrExample} backgroundColor="white" />);
    const grid = getByTestId("background");
    expect(grid).toBeInTheDocument();
  });

  it('should have the correct background color', () => {
    const { getByTestId } = render(<Grid data={ArrExample} backgroundColor="white" />);
    const grid = getByTestId('background');
    expect(grid).toHaveStyleRule('background-color', 'white');
  });
});
