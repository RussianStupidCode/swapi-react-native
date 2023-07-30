import { ActivityIndicator } from "react-native";
import { styled } from "styled-components/native";

const SpinnerRoot = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const SpinnerBox = () => {
  return (
    <SpinnerRoot>
      <ActivityIndicator color="emerald" size="large" />
    </SpinnerRoot>
  );
};

export { SpinnerBox };
