import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, SendNewItemImg, Heading } from "./styles";

interface DataProps {
  img: string | any;
  name: string;
}

interface Props extends TouchableOpacityProps {
  data: DataProps;
}

export function SendNewItem({ data, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <SendNewItemImg style={{ resizeMode: "cover" }} source={data.img} />
      <Heading>{data.name}</Heading>
    </Container>
  );
}
