import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { STACK_PAGE_NAMES, TAB_PAGE_NAMES } from "@/shared/config";

import { FilmsScreen } from "./films";
import { HomeScreen } from "./home";

const HomeStack = createNativeStackNavigator<Record<string, undefined>>();
const FilmsStack = createNativeStackNavigator<Record<string, undefined>>();

const FilmsStackScreen = () => {
  return (
    <FilmsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FilmsStack.Screen
        name={STACK_PAGE_NAMES.home.films.list}
        component={FilmsScreen}
      />
    </FilmsStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={STACK_PAGE_NAMES.home.main}
        component={HomeScreen}
        options={{ title: "Главная" }}
      />

      <HomeStack.Screen
        name={STACK_PAGE_NAMES.home.films.main}
        component={FilmsStackScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={TAB_PAGE_NAMES.home}
      >
        <Tab.Screen name={TAB_PAGE_NAMES.home} component={HomeStackScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
