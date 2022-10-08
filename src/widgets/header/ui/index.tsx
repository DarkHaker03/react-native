import { useUnit } from "effector-react";
import { autorizationModel } from "../../../processes/autorization";
import { isPhoneModel } from "../../../processes/isPhone";
import { Image, Pressable, View } from "react-native";
import styles from "../styles";
import { FC } from "react";

const Header: FC = () => {
  const { $state, set } = autorizationModel;
  const [isLoggedIn, setIsLoggedIn, isPhone] = useUnit([$state, set, isPhoneModel.$state]);
  return (
    <>
      <View style={styles.header}>
        <Image
          style={
            isPhone
              ? styles.logo
              : styles.fullLogo
          }
          source={
            isPhone
              ? require('../../../shared/assets/images/logo.png')
              : require('../../../shared/assets/images/fullLogo.png')
          }
        />
        {isLoggedIn
          && (
            <Pressable
              onPress={() => {
                setIsLoggedIn(false);
              }}
            >
              <Image
                style={styles.logout}
                source={require('../../../shared/assets/images/logout.png')}
              />
            </Pressable>
          )
        }
      </View>
    </>
  )
}

export { Header };
