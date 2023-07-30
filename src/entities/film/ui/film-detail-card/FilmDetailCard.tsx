import { Text } from "react-native";
import { styled } from "styled-components/native";

import { Accordion } from "@/shared/ui/accordion";

import { Film } from "../../api/films";

interface FilmDetailCardProps {
  film: Film;
}

const FilmCardRoot = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5px;
  border-width: 1px;
  gap: 20px;
  border-color: lightblue;
`;

const DetailBox = styled.View`
  flex: 1;
  flex-direction: row;
`;

const DetailColumn = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;

const FilmDetailCard = ({ film }: FilmDetailCardProps): JSX.Element => {
  return (
    <FilmCardRoot>
      <DetailBox>
        <DetailColumn>
          <Text>Название</Text>
          <Text>Директор</Text>
          <Text>Дата выхода</Text>
        </DetailColumn>

        <DetailColumn>
          <Text>{film.title}</Text>
          <Text>{film.director}</Text>
          <Text>{film.release_date}</Text>
        </DetailColumn>
      </DetailBox>

      <Accordion title="Опенинг">
        <Text>{film.opening_crawl}</Text>
      </Accordion>
    </FilmCardRoot>
  );
};

export { FilmDetailCard };
