import { PropsWithChildren, useState } from "react";
import { styled } from "styled-components/native";

import { ARROW_DOWN, ARROW_UP } from "@/shared/image-assets";

type AccordionProps = PropsWithChildren<{
  title: string;
}>;

const AccordionRoot = styled.View`
  padding-bottom: 4px;
`;

const AccordionContent = styled.View``;

const Header = styled.TouchableOpacity`
  color: #eee;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Accordion = ({ children, title }: AccordionProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <AccordionContent>{children}</AccordionContent>;

  return (
    <AccordionRoot>
      <Header onPress={toggleItem}>
        <Title>{title}</Title>
        <Icon source={expanded ? ARROW_UP : ARROW_DOWN} />
      </Header>
      {expanded && body}
    </AccordionRoot>
  );
};

export { Accordion };
