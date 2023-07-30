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

import { PersonCard, personsApi } from "@/entities/person";
import { STACK_PAGE_NAMES } from "@/shared/config";
import { SpinnerBox } from "@/shared/ui/spinner-box";

const PersonRoot = styled.View`
  flex: 1;
`;

const PersonsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<Record<string, { id: number }>>>();

  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } =
    personsApi.useInfinitePersons();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const itemExtractorKey = (item: personsApi.Person) => {
    return item.url;
  };

  const renderSpinner = () => {
    return <ActivityIndicator color="emerald" size="large" />;
  };

  if (isLoading) {
    return <SpinnerBox></SpinnerBox>;
  }

  return (
    <PersonRoot>
      <FlatList
        style={{ gap: 10 }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
        data={data?.pages.map((page) => page.results).flat()}
        keyExtractor={itemExtractorKey}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              const trimedUrl = item.url.slice(0, item.url.length - 1);
              const stringId = trimedUrl.slice(trimedUrl.lastIndexOf("/") + 1);

              navigation.navigate(STACK_PAGE_NAMES.home.persons.detail, {
                id: Number(stringId),
              });
            }}
          >
            <PersonCard person={item} />
          </TouchableOpacity>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
      />
    </PersonRoot>
  );
};

export { PersonsScreen };
