import React, { useState, useRef } from "react";
import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { useNavigation } from "@react-navigation/native";

import { Send } from "../screens/Send";

import { Feather } from "@expo/vector-icons";

import { Home } from "../screens/Home";

StatusBar.setBarStyle("dark-content");

const ThemeScreen = (props) => {
  const ref = useRef();
  const [type, setType] = useState<"down" | "up">("down");
  const navigation = useNavigation<any>();

  function handleAccount() {
    navigation.navigate("Cards");
  }

  const onClickButton = () => {
    // if (type === "up") {
    //   setType("down");
    //   alert("Change type curve down");
    // } else {
    //   setType("up");
    //   alert("Change type curve up");
    // }
    handleAccount();
  };

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = "" as any;

    switch (routeName) {
      case "Send":
        icon = "arrow-up-circle";
        break;
      case "Perfil":
        icon = "user";
        break;
    }

    return (
      <Feather
        name={icon}
        size={24}
        color={routeName === selectedTab ? "#005EBC" : "gray"}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CurvedBottomBar.Navigator
        ref={ref}
        type={type}
        height={60}
        circleWidth={55}
        bgColor="white"
        borderTopLeftRight={true}
        strokeWidth={0.3}
        swipeEnabled={true}
        initialRouteName="Send"
        renderCircle={({ selectedTab, navigate }) => (
          <TouchableOpacity
            style={[type === "down" ? styles.btnCircle : styles.btnCircleUp]}
            onPress={onClickButton}
          >
            <Feather name="chevrons-down" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        tabBar={({ routeName, selectedTab, navigate }) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(routeName)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
          );
        }}
      >
        <CurvedBottomBar.Screen
          name="Send"
          position="left"
          component={({ navigate }) => <Send />}
        />
        <CurvedBottomBar.Screen
          name="Perfil"
          component={({ navigate }) => (
            <View style={{ backgroundColor: "#FFEBCD", flex: 1 }} />
          )}
          position="right"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    backgroundColor: 'red',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#005EBC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "#48CEF6",
  },
  img: {
    width: 30,
    height: 30,
  },
});
