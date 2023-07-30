import { styled } from "styled-components/native";

import { Film } from "../../api/films";

interface FilmCardProps {
  film: Film;
}

const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
`;

const FilmCardRoot = styled.View`
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  border-width: 1px;
  gap: 5px;
  border-color: lightblue;
`;
const Director = styled.Text`
  font-weight: 400;
  font-size: 14px;
`;

const CreatedAt = styled.Text`
  font-weight: 300;
  font-size: 14px;
  color: gray;
`;

const FilmCard = ({ film }: FilmCardProps): JSX.Element => {
  return (
    <FilmCardRoot>
      <Title>{film.title}</Title>
      <Director>{film.director}</Director>
      <CreatedAt>{film.release_date}</CreatedAt>
    </FilmCardRoot>
  );
};

export { FilmCard };
