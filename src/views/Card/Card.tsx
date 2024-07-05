import { StackProps } from '@navigator';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTokenSlice } from '@modules/token/token.slice';

export default function Card({ navigation }: StackProps) {
  const [cardList, setCardList] = useState<any>([]);
  const { dispatch, tokenList } = useTokenSlice();

  useEffect(() => {
    tokenList.map((token: any) => {
      console.log('🚀 ~ tokenList.map ~ token:', token);
      fetch('http://localhost:3002/retrieve-card-info', {
        method: 'POST',
        // mode: 'no-cors',
        body: JSON.stringify({
          tokenId: token,
        }),
        headers: {
          //   Authorization: `Basic cGtleV90ZXN0XzV3dmlzYnhwaHAxemFwZzhpZTY6c2tleV90ZXN0XzV3dmlzZGpqb3FtZm9mNW5wenc=`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
          //   'Access-Control-Allow-Headers': 'Content-Type',
          //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          //   'Access-Control-Allow-Origin': '*',
        },
      })
        .then(res => res.json())
        .then(res => {
          setCardList([...cardList, res.card]);
          console.log(res.card);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }, [tokenList]);

  return (
    <View style={styles.containerView}>
      {cardList.length === 0 ? (
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
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCardStack', { from: 'Profile' })}>
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
      ) : (
        cardList.map((card: any) => (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
              paddingTop: 33,
              paddingBottom: 22,
              paddingHorizontal: 32,
              marginHorizontal: 20,
              shadowColor: '#00000026',
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 5 },
              shadowRadius: 20,
              elevation: 20,
            }}>
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode="stretch"
              style={{ width: 66, height: 21, marginBottom: 25 }}
            />
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 24.14858055114746,
                  marginTop: 2,
                  marginRight: 29,
                }}>
                ••••
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 24.14858055114746,
                  marginTop: 2,
                  marginRight: 27,
                }}>
                ••••
              </Text>
              <Text style={{ color: '#000000', fontSize: 13, marginTop: 2, marginRight: 33 }}>
                ••••
              </Text>
              <Text style={{ color: '#808080', fontSize: 15.092863082885742, flex: 1 }}>3282</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
              <Text style={{ color: '#8F8F8F', fontSize: 10, marginRight: 4, flex: 1 }}>
                Name on Card
              </Text>
              <Text style={{ color: '#8F8F8F', fontSize: 10 }}>Expires</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#000000', fontSize: 13, marginRight: 4, flex: 1 }}>
                Ty Lee
              </Text>
              <Text style={{ color: '#000000', fontSize: 13 }}>12/25</Text>
            </View>
          </View>
        ))
      )}
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
