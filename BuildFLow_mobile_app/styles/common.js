import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
  button: {
    height: 'auto',
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFA500',
  },
  textView: {
    backgroundColor: "white",
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  view:{
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '80%',
  },  
});

export default commonStyles;
