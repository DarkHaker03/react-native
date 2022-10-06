import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../../types";


type authScreenProp = NativeStackNavigationProp<RootStackParamList>;

const Posts: FC = () => {
  const { navigate } = useNavigation<authScreenProp>();

  return (
    <View>
      <Text>
        32
      </Text>
      <Button
        onPress={() => navigate('autoregistration')}
        title="Go in One screen..."
      />
    </View>
  );
};

export { Posts };