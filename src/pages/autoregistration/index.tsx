import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../../types";


type authScreenProp = NativeStackNavigationProp<RootStackParamList>;

const Autoregistration: FC = () => {
  const { navigate } = useNavigation<authScreenProp>();

  return (
    <View>
      <Text>
        2
      </Text>
      <Button
        onPress={() => navigate('posts')}
        title="Go in Two screen..."
      />
    </View>
  );
};

export { Autoregistration };