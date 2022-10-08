import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { Posts } from './posts/ui';
import { Autorization } from './autoregistration';
import { StatusBar, StyleSheet, View } from "react-native";
import { autorizationModel } from "../processes/autorization";
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();
import { useUnit } from 'effector-react'
import { Header } from "../widgets/header/ui";
import { isPhoneModel } from "../processes/isPhone";

export default function App() {
  const [isLoggedIn, isPhone] = useUnit([autorizationModel.$state, isPhoneModel.$state]);
  const heightOfBar = StatusBar.currentHeight;
  return (
    <View style={{ flex: 1, paddingTop: heightOfBar, paddingBottom: 30 }}>
      <Header />
      <View style={isPhone ? styles.wrapper : styles.wrapperTablet}>
        <NavigationContainer>
          <Navigator initialRouteName="autorization" screenOptions={{ headerShown: false }}>
            {
              !isLoggedIn
                ? (
                  <Screen name="autorization" component={Autorization} />
                )
                : (
                  <Screen name="posts" component={Posts} />
                )
            }
          </Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 15,
  },
  wrapperTablet: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 37,
  }
})

