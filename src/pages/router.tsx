import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PAGE_NAMES } from "@/shared/config";

import { HomeScreen } from "./home";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PAGE_NAMES.home}>
        <Stack.Screen
          name={PAGE_NAMES.home}
          component={HomeScreen}
          options={{ title: "SWAPI mobile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
