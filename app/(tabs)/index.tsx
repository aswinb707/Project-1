import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen: React.FC = () => {
  const currentDay = 7; // Mock value

  const handleRelearn = () => {
    console.log('Navigate to Relearn');
    // TODO: Add navigation
  };

  const handleLearnNew = () => {
    console.log('Navigate to Learn New Words');
    // TODO: Add navigation
  };

  const handleViewProgress = () => {
    console.log('Navigate to Progress');
    // TODO: Add navigation
  };

  const handleSettings = () => {
    console.log('Navigate to Settings');
    // TODO: Add navigation
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dayText}>Day {currentDay}</Text>
        <Text style={styles.title}>Welcome back to</Text>
        <Text style={styles.appName}>Dict-O-Day</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRelearn}>
          <Text style={styles.buttonText}>Re-learn Previous Words</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLearnNew}>
          <Text style={styles.buttonText}>Learn New Words</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleViewProgress}>
          <Text style={styles.buttonText}>View Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSettings}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fc',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  dayText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    color: '#222',
    fontWeight: '500',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2a74ff',
    marginTop: 4,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2a74ff',
    width: '90%',
    paddingVertical: 16,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
