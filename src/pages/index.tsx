import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { Posts } from './posts';
import { Autoregistration } from './autoregistration';
import { View } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <NavigationContainer>
        <Navigator initialRouteName="autoregistration" screenOptions={{ headerShown: false }}>
          <Screen name="autoregistration" component={Autoregistration} />
          <Screen name="posts" component={Posts} />
        </Navigator>
      </NavigationContainer>
    </View>
  );
}
