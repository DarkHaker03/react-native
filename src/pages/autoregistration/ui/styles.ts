import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    borderColor: '#27569C',
    borderWidth: 5,
    backgroundColor: '#fff',
    borderRadius: 6,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 32,
    maxWidth: 480,
    width: '100%'
  },
  bodyTablet: {
    borderColor: '#27569C',
    borderWidth: 5,
    backgroundColor: '#fff',
    borderRadius: 6,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    maxWidth: 480,
    width: '80%'
  },
  logo: {
    color: '#27569C',
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '800',
  },
  logoTablet: {
    color: '#27569C',
    fontSize: 24,
    marginBottom: 30,
    fontWeight: '800',
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
  },
  input: {
    width: 212,
    height: 31,
    borderColor: '#27569C',
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputTablet: {
    width: 280,
    height: 36,
    borderColor: '#27569C',
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  btn: {
    width: 213,
    height: 43,
    backgroundColor: '#E4B062',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
  },
  container: {
    flexDirection: 'column',
    marginVertical: 13,
  },
  containerTablet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 25,
    width: '95%'
  },
  center: {
    alignItems: 'center', justifyContent: 'center',
  }
})

export default styles;