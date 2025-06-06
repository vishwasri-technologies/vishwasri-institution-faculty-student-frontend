

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import FacultyDashboard from './screens/FacultyDashboard';
import ForgotScreen from './screens/Forgot';
import ScheduleScreen from './screens/Schedule';
import AttendanceScreen from './screens/Attendance';
import CalendarScreen from './screens/AcademicCalendar';
import NotesAssignmentsScreen from './screens/NotesAssignmentsScreen';
import UploadNotesScreen from './screens/UploadNotesScreen';
import UploadAssignmentScreen from './screens/UploadAssignmentScreen';
import AnnouncementsScreen from './screens/AnnouncementsScreen';
import ExamsScreen from './screens/ExamsScreen';
import MarksScreen from './screens/MarksScreen';
import InternalMarksScreen from './screens/InternalMarks';
import AssignmentMarksScreen from './screens/AssignmentMarks';
import FacultyProfileScreen from './screens/FacultyProfileScreen';
import HelpDeskScreen from './screens/HelpDeskScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="#1C7988"
        translucent={false}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotScreen"
            component={ForgotScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={FacultyDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScheduleScreen"
            component={ScheduleScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AttendanceScreen"
            component={AttendanceScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CalendarScreen"
            component={CalendarScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotesAssignmentsScreen"
            component={NotesAssignmentsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UploadNotesScreen"
            component={UploadNotesScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="UploadAssignmentScreen"
            component={UploadAssignmentScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="AnnouncementsScreen"
            component={AnnouncementsScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="ExamsScreen"
            component={ExamsScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="MarksScreen"
            component={MarksScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InternalMarksScreen"
            component={InternalMarksScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="AssignmentMarksScreen"
            component={AssignmentMarksScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FacultyProfileScreen"
            component={FacultyProfileScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="HelpDeskScreen"
            component={HelpDeskScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
