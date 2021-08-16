import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default (styles = StyleSheet.create({
  input: {
    marginTop: 30,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 34,
    color: 'white',
    fontWeight: '500',
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -90 }],
    height: 250,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  textInput: {
    width: "90%",
    borderRadius: 5,
    paddingVertical: 35,
    paddingHorizontal: 16,
    fontSize: 24,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
  listItem: {
  	width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    margin: 15
  },
  listText: {
  	paddingLeft: 5, 
  	marginTop:10, 
  	fontSize: 24, 
  	color: 'white'
  },
  buttonStyle: {
  	width: width * 0.8,
  	paddingVertical: 40,
  }
}));
