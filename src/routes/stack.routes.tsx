import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Activity } from "../screens/Activity";
import { Cards } from "../screens/Cards";
import { Currencies } from "../screens/Currencies";
import { Pay } from "../screens/Pay";
import { Login } from "../screens/Login";

import colors from "../styles/colors";
import CourvesRoutes from "../routes/curves.routes";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Navigator
    initialRouteName="Login"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
      headerShown: false,
    }}
  >
    <Screen name="AuthRoutes" component={CourvesRoutes} />

    <Screen name="Activity" component={Activity} />

    <Screen name="Cards" component={Cards} />

    <Screen name="Currencies" component={Currencies} />

    <Screen name="Pay" component={Pay} />

    <Screen name="Login" component={Login} />
  </Navigator>
);

export default AppRoutes;
