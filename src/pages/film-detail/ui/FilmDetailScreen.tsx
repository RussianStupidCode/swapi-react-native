import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Alert } from "react-native";

import { SpinnerBox } from "@/shared/ui/spinner-box";

import { FilmDetail } from "./FilmDetail";

const FilmDetailScreen = (): JSX.Element => {
  const route = useRoute<RouteProp<Record<string, { id?: number }>>>();

  const { id } = route.params;

  useEffect(() => {
    if (id === undefined) {
      Alert.alert("Ошибка", "Неизвестный идентификатор фильма");
    }
  }, [id]);

  if (id === undefined) {
    return <SpinnerBox></SpinnerBox>;
  }

  return <FilmDetail id={id}></FilmDetail>;
};

export { FilmDetailScreen };
