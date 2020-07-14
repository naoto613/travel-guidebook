import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from 'react-navigation-tabs';


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    }
  },
//   Article: {
//     screen: ArticleScreen,
//   },
});

// const ClipStack = createStackNavigator({
//   Clip: {
//     screen: ClipScreen,
//     navigationOptions: {
//       title: 'クリップ一覧',
//     }
//   },
//   Article: {
//     screen: ArticleScreen,
//   },
// });

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    // navigationOptions: {
    // tabBarIcon: ({ tintColor }) => {
    //   return <FontAwesome name="home" color={tintColor} size={24} />;
    // },
    // },
  },
//   Clip: {
//     screen: ClipStack,
//     // navigationOptions: {
//     //   tabBarIcon: ({tintColor}) => {
//     //     return <FontAwesome name='bookmark' color={tintColor} size={24} />
//     //   },
//     // },
//   },
});

export default createAppContainer(AppNavigator);