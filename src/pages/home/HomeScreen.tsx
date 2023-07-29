import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { getAllTiles } from "./lib";
import { Tile } from "./Tile";

const TilesView = styled.View`
  padding: 10px;
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const HomeScreen = () => {
  const tiles = getAllTiles();

  return (
    <ScrollView>
      <TilesView>
        {tiles.map((tile, index) => {
          return (
            <TouchableOpacity key={index}>
              <Tile size={tile.size} source={tile.source} title={tile.title} />
            </TouchableOpacity>
          );
        })}
      </TilesView>
    </ScrollView>
  );
};

export { HomeScreen };
