import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./src/screens/MainScreen";
import InfoScreen from "./src/screens/InfoScreen";


const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Info: InfoScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle : {
        backgroundColor: '#E0E0E0',
        shadowColor: 'white',
        elevation: 0,
              
      },
      title: "AbiturGeo",
      headerTitleStyle : {
        textAlign: 'center',
        color: '#555555'
      }
    },
  }
);

export default createAppContainer(navigator);
