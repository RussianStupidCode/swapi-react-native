import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";
import { styled } from "styled-components/native";

import { FilmCard, filmsApi } from "@/enttities/film";
import { STACK_PAGE_NAMES } from "@/shared/config";
import { SpinnerBox } from "@/shared/ui/spinner-box";

const FilmRoot = styled.View`
  flex: 1;
`;

const FilmsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<Record<string, { id: number }>>>();

  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } =
    filmsApi.useInfiniteFilms();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const itemExtractorKey = (item: filmsApi.Film) => {
    return item.url;
  };

  const renderSpinner = () => {
    return <ActivityIndicator color="emerald" size="large" />;
  };

  if (isLoading) {
    return <SpinnerBox></SpinnerBox>;
  }

  return (
    <FilmRoot>
      <FlatList
        style={{ gap: 10 }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
        data={data?.pages.map((page) => page.results).flat()}
        keyExtractor={itemExtractorKey}
        renderItem={(data) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(STACK_PAGE_NAMES.home.films.detail, {
                id: data.item.episode_id,
              })
            }
          >
            <FilmCard film={data.item} />
          </TouchableOpacity>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
      />
    </FilmRoot>
  );
};

export { FilmsScreen };
