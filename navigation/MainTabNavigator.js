import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HistoryScreen from '../screens/HistoryScreen';
import InspectionSummaryScreen from '../screens/InspectionSummaryScreen';

import TemplatesScreen from '../screens/TemplatesScreen';
import TemplatePreviewScreen from '../screens/TemplatePreviewScreen';
import EditTemplateScreen from '../screens/EditTemplateScreen';
import TemplateCategoryScreen from '../screens/TemplateCategoryScreen';

import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import CreateTemplateScreen from '../screens/CreateTemplateScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
    InspectionSummary: InspectionSummaryScreen
  },
  config
)

HistoryStack.navigationOptions = {
  tabBarLabel: "Inspections",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="folder1" type="antdesign" />
  )
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
  },
  config
)

ProfileStack.navigationOptions = {
  tabBarLabel: "Account",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="user" type="antdesign" />
  )
}

const NewInspectionStack = createStackNavigator(
  {
    Templates: TemplatesScreen,
    TemplatePreview: TemplatePreviewScreen,
    CreateTemplate: CreateTemplateScreen,
    EditTemplate: EditTemplateScreen,
    TemplateCategory: TemplateCategoryScreen
  },
  config 
)

NewInspectionStack.navigationOptions = {
  tabBarLabel: "New",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="addfile" type="antdesign" />)
}

const tabNavigator = createBottomTabNavigator({
  HistoryStack,
  NewInspectionStack,
  ProfileStack
});



export default tabNavigator;
