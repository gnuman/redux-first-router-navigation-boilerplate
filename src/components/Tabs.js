import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Dimensions
} from 'react-native'
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  TabBarTop,
  NavigationActions,
  addNavigationHelpers
} from 'react-navigation'

import RecentChats from './RecentChats'
import AllContacts from './AllContacts'
import Chats from './Chats'
import Notifications from './Notifications'

const { width, height } = Dimensions.get('window')

const Stack = () => (
  <View>
    <Text> This is an StackTab screen </Text>
    <Text> This is an StackTab screen </Text>
    <Text> This is an StackTab screen </Text>
    <Text> This is an StackTab screen </Text>
    <Text> This is an StackTab screen </Text>
  </View>
)

export const Tabs = TabNavigator(
  {
    Recent: { screen: RecentChats },
    All: { screen: AllContacts },
    StackTabs: { screen: Stack }
  },
  {
    // initialRouteName: 'SubTabs',
    animationEnabled: true,
    swipeEnabled: true,
    backBehavior: 'none',
    // lazy: true,
    navigationOptions: options => ({
      tabBarVisible: true,
      cardStyle: {
        backgroundColor: 'pink'
      }
    }),
    tabBarComponent: TabBarTop,
    tabBarPosition: 'bottom',
    style: {
      backgroundColor: 'black'
    },
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'white',
      indicatorStyle: {
        backgroundColor: 'blue'
      },
      tabStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      style: {
        backgroundColor: '#2196f3'
      }
    }
  }
)

const AppTabs = ({ tabs, tabsStack, dispatch }) => (
  <ScrollView style={{}}>
    <Tabs
      screenProps={{ tabsStack, index: tabs.index }}
      navigation={addNavigationHelpers({
        navKey: 'tabs',
        dispatch,
        state: tabs
      })}
    />
  </ScrollView>
)

const mapStateToProps = ({ tabs, tabsStack }) => ({ tabs, tabsStack })
const MainTabs = connect(mapStateToProps)(AppTabs)

export default MainTabs
