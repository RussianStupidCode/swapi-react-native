import { ImageSourcePropType, Text } from "react-native";
import { styled } from "styled-components/native";

interface TileProps {
  source: ImageSourcePropType;
  size: string;
  title: string;
}

const TileRoot = styled.View<{ size: string }>`
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  overflow: hidden;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
`;

const ImageView = styled.Image`
  width: 80%;
  height: 80%;
`;

const Tile = ({ source, size, title }: TileProps): JSX.Element => {
  return (
    <TileRoot
      size={size}
      style={{
        shadowColor: "darkred",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      <ImageView source={source} style={{ resizeMode: "center" }} />
      <Text>{title}</Text>
    </TileRoot>
  );
};

export { Tile, TileProps };
