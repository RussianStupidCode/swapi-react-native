import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { STACK_PAGE_NAMES, TAB_PAGE_NAMES } from "@/shared/config";

import { FilmDetailScreen } from "./film-detail";
import { FilmsScreen } from "./films";
import { HomeScreen } from "./home";
import { PersonsScreen } from "./persons";

const HomeStack = createNativeStackNavigator<Record<string, undefined>>();
const FilmsStack = createNativeStackNavigator<Record<string, undefined>>();
const PErsonsStack = createNativeStackNavigator<Record<string, undefined>>();

const FilmsStackScreen = () => {
  return (
    <FilmsStack.Navigator initialRouteName={STACK_PAGE_NAMES.home.films.list}>
      <FilmsStack.Screen
        name={STACK_PAGE_NAMES.home.films.list}
        component={FilmsScreen}
        options={{ title: "Фильмы" }}
      />
      <FilmsStack.Screen
        name={STACK_PAGE_NAMES.home.films.detail}
        component={FilmDetailScreen}
        options={{ title: "Фильм" }}
      />
    </FilmsStack.Navigator>
  );
};

const PersonsStackScreen = () => {
  return (
    <PErsonsStack.Navigator initialRouteName={STACK_PAGE_NAMES.home.persons.list}>
      <PErsonsStack.Screen
        name={STACK_PAGE_NAMES.home.persons.list}
        component={PersonsScreen}
        options={{ title: "Персонажи" }}
      />
    </PErsonsStack.Navigator>
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
        options={{ title: "Фильмы", headerShown: false }}
      ></HomeStack.Screen>

      <HomeStack.Screen
        name={STACK_PAGE_NAMES.home.persons.main}
        component={PersonsStackScreen}
        options={{ title: "Персонажи", headerShown: false }}
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
        <Tab.Screen
          name={TAB_PAGE_NAMES.home}
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
