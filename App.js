import { StyleSheet, Text, View } from 'react-native';
import CanvasTShirt from './components/canvas/canvas';
import ColorPicker from './components/colorPicker/colorPicker';

export default function App() {
  return (
    <View style={styles.container}>
      <ColorPicker/>
      <CanvasTShirt/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
