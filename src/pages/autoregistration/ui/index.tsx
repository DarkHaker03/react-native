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
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#fff' }}>
      <View style={isPhone ? styles.body : styles.bodyTablet}>
        <Text style={styles.logoTablet}>
          Autorization
        </Text>
        <View style={isPhone ? styles.container : styles.container2}>
          <Text style={styles.text}>
            login
          </Text>
          <TextInput
            onChangeText={setLogin}
            style={isPhone ? styles.input : styles.inputTablet}
          />
        </View>
        <View style={isPhone ? styles.container : styles.container2}>
          <Text style={styles.text}>
            password
          </Text>
          <TextInput
            onChangeText={setPassword}
            style={isPhone ? styles.input : styles.inputTablet}
          />
        </View>
        <Pressable
          onPress={
            () => {
              if (login === LOGIN && password === PASSWORD) {
                autorizationModel.set(true);
              } else {
                alert('error');
              }
            }
          }
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