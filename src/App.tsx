import { registerRootComponent } from "expo";
import { StatusBar, Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <StatusBar></StatusBar>
      <Text>Hello world</Text>
    </View>
  );
};

registerRootComponent(App);
