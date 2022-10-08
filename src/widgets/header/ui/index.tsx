import { useUnit } from "effector-react";
import { autorizationModel } from "../../../processes/autorization";
import { isPhoneModel } from "../../../processes/isPhone";
import { Image, Pressable, StyleSheet, View } from "react-native";

const Header = () => {
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E4B062',
    height: 118,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 63,
  },
  fullLogo: {
    width: 273,
    height: 63,
  },
  logout: {
    width: 62,
    height: 56,
  }
})