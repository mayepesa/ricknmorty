import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";
import PalindromeInput from "./components/PalindromeInput";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  padding: 2em;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 300px;
  &:hover {
    transform: rotate3d(1, 2, 3, 10deg);
  }
`;

const ColorChange = styled.div`
  display: flex;
`;

function App() {
  const [gridColor, setGridColor] = useState("#7F8AB4");
  const [text, setText] = useState("");


  const { isLoading, error, data } = useQuery(
    "rick-morty-characters",
    async () => {
      // console.log("fetching");
      return fetch("https://rickandmortyapi.com/api/character").then((res) =>
        res.json()
      );
    },
    {
      // enabled: false,
      retry: 1,
      onError: (err) => {
        console.log("error", err);
      },
    }
  );

  // if (data) console.log(data);

  return (
    <AppWrapper>
      <Heading>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="logo"
        />
        <ColorChange>
          <p>Change me{`->`}</p>
          <ColorPicker color={gridColor} setColor={setGridColor} />
        </ColorChange>
      </Heading>

      <PalindromeInput text={text} setText={setText} />

      {data?.error && error ? (
        <p>{data.error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid data={data?.results} backgroundColor={gridColor} />
      )}
    </AppWrapper>
  );
}

export default App;
