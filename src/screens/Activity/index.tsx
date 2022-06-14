import React, { useState } from "react";
import { StatusBar, StyleSheet, FlatList } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { ActivityItem } from "../../components/ActivityItem";

// import { UserData, UserReceivedData, UserSendingData } from "../../utils/data";

import {
  Container,
  Header,
  HeaderRow,
  ButtonClose,
  ButtonCloseTitle,
  Content,
  Options,
  Option,
  OptionTitle,
  Section,
  NumberOfRow,
} from "./styles";

export const UserData = [
  {
    id: 1,
    name: "John Doe",
    message: "Dinero recibido (reclamado)",
    amount: "+ 50,00",
    currency: "EUR",
    img: require("../../assets/User/CarlosRoca.png"),
    isNegative: false,
  },
  {
    id: 2,
    name: "David López",
    message: "Dinero enviado",
    amount: "- 30,00",
    currency: "EUR",
    img: require("../../assets/User/DavidLópez.png"),
    isNegative: true,
  },
  {
    id: 3,
    name: "José Oslo",
    message: "Dinero enviado",
    amount: "+ 500,00",
    currency: "USD",
    img: require("../../assets/User/JoséOslo.png"),
    isNegative: false,
  },
  {
    id: 4,
    name: "Mary del Pino",
    message: "Dinero enviado",
    amount: "- 280,00",
    currency: "EUR",
    img: require("../../assets/User/MarydelPino.png"),
    isNegative: true,
  },
  {
    id: 5,
    name: "Sonia Alvarado",
    message: "Dinero enviado",
    amount: "- 320,00",
    currency: "EUR",
    img: require("../../assets/User/SoniaAlvarado.png"),
    isNegative: true,
  },
  {
    id: 6,
    name: "Santiago Ríos",
    message: "Dinero recibido (reclamado)",
    amount: "+ 35,00",
    currency: "EUR",
    img: require("../../assets/User/SantiagoRíos.png"),
    isNegative: false,
  },
];

export const UserReceivedData = [
  {
    id: 1,
    name: "John Doe",
    message: "Dinero recibido (reclamado)",
    amount: "+ 50,00",
    currency: "EUR",
    img: require("../../assets/User/CarlosRoca.png"),
    isNegative: false,
  },
  {
    id: 2,
    name: "José Oslo",
    message: "Dinero enviado",
    amount: "+ 500,00",
    currency: "USD",
    img: require("../../assets/User/JoséOslo.png"),
    isNegative: false,
  },
  {
    id: 3,
    name: "Santiago Ríos",
    message: "Dinero recibido (reclamado)",
    amount: "+ 35,00",
    currency: "EUR",
    img: require("../../assets/User/SantiagoRíos.png"),
    isNegative: false,
  },
];

export const UserSendingData = [
  {
    id: 1,
    name: "David López",
    message: "Dinero enviado",
    amount: "- 30,00",
    currency: "EUR",
    img: require("../../assets/User/DavidLópez.png"),
    isNegative: true,
  },
  {
    id: 2,
    name: "Mary del Pino",
    message: "Dinero enviado",
    amount: "- 280,00",
    currency: "EUR",
    img: require("../../assets/User/MarydelPino.png"),
    isNegative: true,
  },
  {
    id: 3,
    name: "Sonia Alvarado",
    message: "Dinero enviado",
    amount: "- 320,00",
    currency: "EUR",
    img: require("../../assets/User/SoniaAlvarado.png"),
    isNegative: true,
  },
];

export function Activity() {
  const [option, setOption] = useState<"all" | "received" | "sended">("all");

  const navigation = useNavigation<any>();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleOptionChange(optionSelected: "all" | "received" | "sended") {
    setOption(optionSelected);
  }

  const renderActivityItem = ({ item }) => <ActivityItem data={item} />;

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
      <Header style={styles.shadow}>
        <HeaderRow>
          <ButtonClose onPress={handleGoBack}>
            <Ionicons name="ios-close-sharp" size={24} color="black" />
            <ButtonCloseTitle>Actividad</ButtonCloseTitle>
          </ButtonClose>

          <MaterialIcons name="date-range" size={24} color="#999999" />
        </HeaderRow>

        <Options>
          <Option
            active={option === "all"}
            index={1}
            onPress={() => handleOptionChange("all")}
          >
            <OptionTitle active={option === "all"} index={1}>
              Todo
            </OptionTitle>
          </Option>
          <Option
            active={option === "received"}
            index={2}
            onPress={() => handleOptionChange("received")}
          >
            <OptionTitle active={option === "received"} index={2}>
              Recebido
            </OptionTitle>
          </Option>
          <Option
            active={option === "sended"}
            index={3}
            onPress={() => handleOptionChange("sended")}
          >
            <OptionTitle active={option === "sended"} index={3}>
              Enviado
            </OptionTitle>
          </Option>
        </Options>
      </Header>

      <Content>
        <NumberOfRow>12 ENE</NumberOfRow>

        {option === "all" ? (
          <Section>
            <FlatList
              data={UserData}
              keyExtractor={(item) => item.id}
              renderItem={renderActivityItem}
              showsVerticalScrollIndicator={false}
            />
          </Section>
        ) : option === "received" ? (
          <Section>
            <FlatList
              data={UserReceivedData}
              keyExtractor={(item) => item.id}
              renderItem={renderActivityItem}
              showsVerticalScrollIndicator={false}
            />
          </Section>
        ) : (
          <Section>
            <FlatList
              data={UserSendingData}
              keyExtractor={(item) => item.id}
              renderItem={renderActivityItem}
              showsVerticalScrollIndicator={false}
            />
          </Section>
        )}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  borderDashed: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#999999",
  },
});
