import React from "react";
import {
  StatusBar,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { CurrencyItem } from "../../components/CurrencyItem";

import USASVG from "../../assets/Flag/USA.svg";
import EUROSVG from "../../assets/Flag/Euro.svg";
import CANADASVG from "../../assets/Flag/CANADA.svg";
import COLOMBIASVG from "../../assets/Flag/COLOMBIA.svg";
import CZECH_REPUBLICSVG from "../../assets/Flag/CZECH_REPUBLIC.svg";
import DENMARKSVG from "../../assets/Flag/DENMARK.svg";
import SWITZERLANDSVG from "../../assets/Flag/SWITZERLAND.svg";
import BRAZILSVG from "../../assets/Flag/BRAZIL.svg";

import {
  Container,
  Header,
  ButtonClose,
  ButtonCloseTitle,
  SearchBox,
  InputSearch,
  SearchIcon,
  Content,
} from "./styles";

const CurrencyData = [
  {
    id: 1,
    currencyName: "Dólares estadounidenses",
    currencyType: "USD",
    svg: <USASVG />,
    isActive: false,
  },
  {
    id: 2,
    currencyName: "Euros",
    currencyType: "EUR",
    svg: <EUROSVG />,
    isActive: true,
  },
  {
    id: 3,
    currencyName: "Dolares canadienses",
    currencyType: "USD",
    svg: <CANADASVG />,
    isActive: false,
  },
  {
    id: 4,
    currencyName: "Reales brasileños",
    currencyType: "BRL",
    svg: <BRAZILSVG />,
    isActive: false,
  },
  {
    id: 5,
    currencyName: "Pesos colombianos",
    currencyType: "COP",
    svg: <COLOMBIASVG />,
    isActive: false,
  },
  {
    id: 6,
    currencyName: "Francos suizos",
    currencyType: "CHF",
    svg: <SWITZERLANDSVG />,
    isActive: false,
  },
  {
    id: 7,
    currencyName: "Coronas checas",
    currencyType: "CZK",
    svg: <CZECH_REPUBLICSVG />,
    isActive: false,
  },
  {
    id: 8,
    currencyName: "Coronas danesas",
    currencyType: "DKK",
    svg: <DENMARKSVG />,
    isActive: false,
  },
];

export function Currencies() {
  const navigation = useNavigation<any>();

  function handleGoBack() {
    navigation.goBack();
  }

  const renderCurrencyItem = ({ item }) => <CurrencyItem data={item} />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#fff"
            translucent
          />
          <Header style={styles.shadow}>
            <ButtonClose onPress={handleGoBack}>
              <Ionicons name="ios-close-sharp" size={24} color="black" />
              <ButtonCloseTitle>Seleccionar divisa</ButtonCloseTitle>
            </ButtonClose>

            <SearchBox>
              <SearchIcon>
                <Fontisto name="search" size={18} color="#999999" />
              </SearchIcon>
              <InputSearch placeholder="Introducir divisa" />
            </SearchBox>
          </Header>

          <Content>
            <FlatList
              data={CurrencyData}
              keyExtractor={(item) => item.id}
              renderItem={renderCurrencyItem}
              showsVerticalScrollIndicator={false}
            />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
