import React, { useState } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import axios from 'axios';
import * as constants from '../constants/env';

export default function NewAppointmentScreen() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date.format());
  }
  
  const addAppointment = () => {
    const appointment = {
      provider: "Alex",
      username: "Yuval",
      description: "Work on AppPoint.",
      duration: 10,
      date: selectedStartDate.substring(0,10)
    }

    axios.post(`${constants.DB_URL}/appointments/add`, appointment)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={onDateChange}
        />
        <Button
          title="יצירת פגישה חדשה "
          onPress={addAppointment}
        />
      </View>
    </ScrollView>
  );
}

NewAppointmentScreen.navigationOptions = {
  title: 'פגישה חדשה',
  headerTitleStyle: { flex: 1, alignItems: 'flex-start', textAlign: 'right' }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
});