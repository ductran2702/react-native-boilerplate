import Button from '@components/Button';
import { useTokenSlice } from '@modules/token/token.slice';
import { StackProps } from '@navigator';
import { colors } from '@theme';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';

export default function AddCard({ navigation }: StackProps) {
  const [cardObject, setCardObject] = useState<any>({});
  const { dispatch, addTokenToList } = useTokenSlice();

  return (
    <View
      style={{
        marginVertical: 22,
        marginHorizontal: 20,
        flexDirection: 'column',
        height: '100%',
      }}>
      <Text
        style={{
          color: '#000000',
          fontSize: 15,
          marginBottom: 22,
          marginLeft: 22,
        }}>
        ATM/Debit/Credit card number
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderColor: '#E6E3E6',
          borderRadius: 5,
          borderWidth: 1,
          paddingVertical: 21,
          marginHorizontal: 22,
        }}>
        <TextInput
          style={{
            fontSize: 16,
            marginRight: 25,
          }}
          placeholder="0000 0000 0000 0000"
          value={cardObject.number}
          onChangeText={text => setCardObject({ ...cardObject, number: text })}
        />
        <Image
          source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
          resizeMode="stretch"
          style={{
            width: 24,
            height: 8,
            marginRight: 9,
          }}
        />
        <Image
          source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
          resizeMode="stretch"
          style={{
            width: 21,
            height: 13,
            marginRight: 10,
          }}
        />
        <Image
          source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
          resizeMode="stretch"
          style={{
            width: 18,
            height: 14,
          }}
        />
      </View>
      <Text
        style={{
          color: '#000000',
          fontSize: 15,
          marginLeft: 22,
        }}>
        Name on Card
      </Text>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E6E3E6',
          borderRadius: 5,
          borderWidth: 1,
          paddingVertical: 23,
          paddingHorizontal: 16,
          marginHorizontal: 22,
        }}>
        <TextInput
          style={{
            fontSize: 16,
            marginRight: 25,
          }}
          placeholder="Ty Lee"
          onChangeText={text => setCardObject({ ...cardObject, name: text })}
          value={cardObject.name}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 22,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            marginRight: 93,
          }}>
          Expiry date
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            flex: 1,
          }}>
          CVV
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 22,
        }}>
        <View
          style={{
            width: 154,
            backgroundColor: '#FFFFFF',
            borderColor: '#E6E3E6',
            borderRadius: 5,
            borderWidth: 1,
            paddingVertical: 23,
            paddingHorizontal: 16,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              marginRight: 25,
            }}
            placeholder="Expiry date"
            onChangeText={text => setCardObject({ ...cardObject, expiry: text })}
            value={cardObject.expiry}
          />
        </View>
        <View
          style={{
            width: 154,
            backgroundColor: '#FFFFFF',
            borderColor: '#E6E3E6',
            borderRadius: 5,
            borderWidth: 1,
            paddingVertical: 23,
            paddingHorizontal: 16,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              marginRight: 25,
            }}
            placeholder="CVV"
            onChangeText={text => setCardObject({ ...cardObject, security_code: text })}
            value={cardObject.security_code}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
          }}
        />
        <Image
          source={require('@assets/images/secure_payment.png')}
          style={{ height: 25, width: 170, marginTop: 15 }}
          resizeMode="stretch"
        />
        <View
          style={{
            flex: 1,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
          }}
        />
        <Button
          title="Add card"
          titleStyle={{ color: 'white', fontWeight: 400, fontSize: 18 }}
          onPress={() => {
            const expiration_month = cardObject.expiry.slice(0, 2);
            const expiration_year = cardObject.expiry.slice(3, 5);
            fetch('http://localhost:3002/create-token', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...cardObject,
                expiration_month,
                expiration_year,
              }),
            })
              .then(res => res.json())
              .then(res => {
                dispatch(addTokenToList(res.tokenInfo.id, dispatch));
                console.log(res);
                navigation.navigate('CardStack', { from: 'AddCardStack' });
              })
              .catch(err => {
                console.log(err);
              });
          }}
          style={styles.button}
        />
        <View
          style={{
            flex: 1,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 16,
    marginBottom: 20,
    borderRadius: 22,
    height: 45,
    width: '100%',
    backgroundColor: '#4AD8DA',
  },
});
