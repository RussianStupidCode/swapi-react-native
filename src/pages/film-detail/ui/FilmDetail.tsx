import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import { useQuery } from "react-query";

import { FilmDetailCard, filmsApi } from "@/enttities/film";
import { SpinnerBox } from "@/shared/ui/spinner-box";

interface FilmDetailProps {
  id: number;
}

const FilmDetail = ({ id }: FilmDetailProps): JSX.Element => {
  const navigation = useNavigation();

  const { data, isLoading, isError } = useQuery(["film", id], () =>
    filmsApi.getFilmById({ id }),
  );

  useEffect(() => {
    if (isError) {
      Alert.alert("Ошибка", "Не удалось получить фильм");
      return;
    }

    if (data) {
      navigation.setOptions({ title: data.title });
    }
  }, [isError, data]);

  if (isLoading || !data) {
    return <SpinnerBox></SpinnerBox>;
  }

  return (
    <ScrollView>
      <FilmDetailCard film={data} />
    </ScrollView>
  );
};

export { FilmDetail };
