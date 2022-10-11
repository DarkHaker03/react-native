import { autorizationModel } from "../../../processes/autorization";
import { FC, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { isPhoneModel } from "../../../processes/isPhone";
import { useUnit } from "effector-react";
import styles from "./styles";

const LOGIN: string = 'login';
const PASSWORD: string = 'password';

const Autorization: FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isPhone = useUnit(isPhoneModel.$state);
  const autorization = () => {
    if (login === LOGIN && password === PASSWORD) {
      autorizationModel.set(true);
    } else {
      alert('error');
    }
  }
  return (
    <View style={[!isPhone && styles.center, { flex: 1, backgroundColor: '#fff' }]}>
      <View style={isPhone ? styles.body : styles.bodyTablet}>
        <Text style={styles.logoTablet}>
          Autorization
        </Text>
        <View style={isPhone ? styles.container : styles.containerTablet}>
          <Text style={[styles.text, isPhone && { marginBottom: 13 }]}>
            login
          </Text>
          <TextInput
            onChangeText={setLogin}
            value={login}
            style={isPhone ? styles.input : styles.inputTablet}
          />
        </View>
        <View style={isPhone ? styles.container : styles.containerTablet}>
          <Text style={[styles.text, isPhone && { marginBottom: 13 }]}>
            password
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={isPhone ? styles.input : styles.inputTablet}
          />
        </View>
        <Pressable
          onPress={autorization}
          style={styles.btn}
        >
          <Text style={styles.text}>
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Autorization;