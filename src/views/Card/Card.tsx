import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function Card() {
  return (
    <View style={styles.containerView}>
      <View style={styles.centerView}>
        <Image source={require('@assets/images/card.png')} />
        <Text style={{ ...styles.text, paddingVertical: 5 }}>No Cards Found</Text>
        <Text
          style={{
            ...styles.text,
            paddingTop: 5,
          }}>
          We recommend adding a card
        </Text>
        <Text
          style={{
            ...styles.text,
            paddingBottom: 5,
          }}>
          for easy payment
        </Text>
        <TouchableOpacity onPress={() => console.log('hello')}>
          <Text
            style={{
              ...styles.text,
              color: '#4AD8DA',
              paddingVertical: 5,
            }}>
            Add New Card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    marginTop: 44,
    marginBottom: 66,
    marginHorizontal: 20,
    flexDirection: 'column',
    height: '100%',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 100,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'FcSubjectRounded',
    fontWeight: 400,
  },
});
