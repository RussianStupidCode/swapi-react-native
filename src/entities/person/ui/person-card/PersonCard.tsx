import { memo } from "react";
import { styled } from "styled-components/native";

import { Person } from "../../api/persons";

interface PersonCardProps {
  person: Person;
}

const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
`;

const PersonCardRoot = styled.View`
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  border-width: 1px;
  gap: 5px;
  border-color: lightblue;
`;
const Birth = styled.Text`
  font-weight: 400;
  font-size: 14px;
`;

const Gender = styled.Text`
  font-weight: 300;
  font-size: 14px;
  color: gray;
`;

const PersonCard = ({ person }: PersonCardProps): JSX.Element => {
  return (
    <PersonCardRoot>
      <Title>{person.name}</Title>
      <Birth>{person.birth_year}</Birth>
      <Gender>{person.gender}</Gender>
    </PersonCardRoot>
  );
};

const memoized = memo(PersonCard);

export { memoized as PersonCard };
