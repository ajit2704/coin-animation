import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing , Dimensions} from 'react-native';
import { interpolate } from 'react-native-reanimated';
// import { interpolate } from 'react-native-reanimated';

const App2 = () => {
  //   const [translation, setTranslation] = useState(0);
  //   const [translationYY, setTranslationYY] = useState(0);
 
  const [count , setCount] = useState(0)

   
 const windowWidth = Dimensions.get('window').width;
 
 const windowHeight = Dimensions.get('window').height;

 const initPosition = {
   x: parseInt(windowWidth / 2) - 50,
   y: parseInt(windowHeight / 2) - 50,
 }
   const translation = useRef(new Animated.ValueXY({ x: 0, y: 750 })).current;
  const translation2 = useRef(new Animated.ValueXY({ x: 0, y: 700 })).current;
  const translation3 = useRef(new Animated.ValueXY({ x: 0, y: 650 })).current;
  const translation4 = useRef(new Animated.ValueXY({ x: 0, y: 600 })).current;
  const translation5 = useRef(new Animated.ValueXY({ x: 0, y: 550 })).current;
  const translation6 = useRef(new Animated.ValueXY({ x: 0, y: 500 })).current;
  const translation7 = useRef(new Animated.ValueXY({ x: 0, y: 450 })).current;
  const translation8 = useRef(new Animated.ValueXY({ x: 0, y: 400 })).current;
  const translation9 = useRef(new Animated.ValueXY({ x: 0, y: 350 })).current;
  const translation10 = useRef(new Animated.ValueXY({ x: 0, y: 300 })).current;

  const handleAnimation = () => {
    setCount(1)
    Animated.parallel([
      Animated.timing(translation.x, {
        toValue: -40,
        duration: 400,
        useNativeDriver: true
      }),
      Animated.timing(translation.y, {
        toValue: initPosition.y * 2 - 100,
        duration: 400,
        useNativeDriver: true
      })
    ]).start(({ finished }) => {
//First Second

      Animated.parallel([
        Animated.timing(translation.x, {
          toValue: -150,
          duration: 400,
          // easing: Easing.bounce
          useNativeDriver: true
        }),
        Animated.timing(translation.y, {
          // toValue: 450,
          toValue: initPosition.y * 2 - 10,
          duration: 400,
          // easing: Easing.bounce()
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

        //First Third

        Animated.parallel([
          Animated.timing(translation.x, {
            toValue: 150,
            duration: 400,
            // easing: Easing.bounce(),


            useNativeDriver: true,
          }),
          Animated.timing(translation.y, {
            // toValue: 0,
            toValue: initPosition.y / 12 ,
            duration: 400,
            // easing: Easing.bounce(),

            useNativeDriver: true,
          }),
        ]).start()
      })
    }),


      // Second Ball



      Animated.parallel([
        Animated.timing(translation2.x, {
          toValue: -15,
          duration: 400,
          useNativeDriver: true,
          delay: 100
        }),
        Animated.timing(translation2.y, {
          // toValue: 570,
          toValue: initPosition.y * 2 - 150,
          duration: 400,
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

//Second Second

        Animated.parallel([
          Animated.timing(translation2.x, {
            toValue: -150,
            duration: 400,
            // easing: Easing.bounce
            useNativeDriver: true
          }),
          Animated.timing(translation2.y, {
            // toValue: 400,
            toValue: initPosition.y * 2 - 60,
            duration: 400,
            // easing: Easing.bounce()
            useNativeDriver: true
          })
        ]).start(({ finished }) => {

//Second Third

          Animated.parallel([
            Animated.timing(translation2.x, {
              toValue: 150,
              duration: 400,
              // easing: Easing.bounce(),


              useNativeDriver: true,
            }),
            Animated.timing(translation2.y, {
              toValue: -15,
              // toValue: initPosition.y / 1000,
              duration: 400,
              // easing: Easing.bounce(),

              useNativeDriver: true,
            }),
          ]).start()
        })
      }),


      //Third

      Animated.parallel([
        Animated.timing(translation3.x, {
          toValue: 20,
          duration: 400,
          useNativeDriver: true,
          delay: 200
        }),
        Animated.timing(translation3.y, {
          // toValue: 520,
          toValue: initPosition.y * 2 - 200,
          duration: 400,
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

//Third Second

        Animated.parallel([
          Animated.timing(translation3.x, {
            toValue: -150,
            duration: 400,
            // easing: Easing.bounce
            useNativeDriver: true
          }),
          Animated.timing(translation3.y, {
            // toValue: 350,
            toValue: initPosition.y * 2 - 110,
            duration: 400,
            // easing: Easing.bounce()
            useNativeDriver: true
          })
        ]).start(({ finished }) => {

          //Third Third

          Animated.parallel([
            Animated.timing(translation3.x, {
              toValue: 150,
              duration: 400,
              // easing: Easing.bounce(),


              useNativeDriver: true,
            }),
            Animated.timing(translation3.y, {
              // toValue: -150,
              toValue: -65,
              duration: 400,
              // easing: Easing.bounce(),

              useNativeDriver: true,
            }),
          ]).start()
        })
      })

    //Four


    Animated.parallel([
      Animated.timing(translation4.x, {
        toValue: 50,
        duration: 400,
        useNativeDriver: true,
        delay: 300
      }),
      Animated.timing(translation4.y, {
        // toValue: 480,
        toValue: initPosition.y * 2 - 230,
        duration: 400,
        useNativeDriver: true
      })
    ]).start(({ finished }) => {

//Four Second

      Animated.parallel([
        Animated.timing(translation4.x, {
          toValue: -150,
          duration: 400,
          // easing: Easing.bounce
          useNativeDriver: true
        }),
        Animated.timing(translation4.y, {
          // toValue: 300,
          toValue: initPosition.y * 2 - 160,
          duration: 400,
          // easing: Easing.bounce()
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

        //Four Third

        Animated.parallel([
          Animated.timing(translation4.x, {
            toValue: 150,
            duration: 400,
            // easing: Easing.bounce(),


            useNativeDriver: true,
          }),
          Animated.timing(translation4.y, {
            toValue: -115,
            duration: 400,
            // easing: Easing.bounce(),

            useNativeDriver: true,
          }),
        ]).start()
      })
    }),



      // Five



      Animated.parallel([
        Animated.timing(translation5.x, {
          toValue: 50,
          duration: 400,
          useNativeDriver: true,
          delay: 400
        }),
        Animated.timing(translation5.y, {
          // toValue: 450,
          toValue: initPosition.y * 2 - 250,
          duration: 400,
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

//Five Second

        Animated.parallel([
          Animated.timing(translation5.x, {
            toValue: -150,
            duration: 400,
            // easing: Easing.bounce
            useNativeDriver: true
          }),
          Animated.timing(translation5.y, {
            // toValue: 250,
            toValue: initPosition.y * 2 - 210,
            duration: 400,
            // easing: Easing.bounce()
            useNativeDriver: true
          })
        ]).start(({ finished }) => {

          //Five Third

          Animated.parallel([
            Animated.timing(translation5.x, {
              toValue: 150,
              duration: 400,
              // easing: Easing.bounce(),


              useNativeDriver: true,
            }),
            Animated.timing(translation5.y, {
              toValue: -165,
              duration: 400,
              // easing: Easing.bounce(),

              useNativeDriver: true,
            }),
          ]).start()
        })
      }),



      //Six


      Animated.parallel([
        Animated.timing(translation6.x, {
          toValue: 30,
          duration: 400,
          useNativeDriver: true,
          delay: 500
        }),
        Animated.timing(translation6.y, {
          // toValue: 100,
          toValue: initPosition.y * 2 - 300,
          duration: 400,
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

        //Six Second

        Animated.parallel([
          Animated.timing(translation6.x, {
            toValue: -150,
            duration: 400,
            // easing: Easing.bounce
            useNativeDriver: true
          }),
          Animated.timing(translation6.y, {
            // toValue: 200,
            toValue: initPosition.y * 2 - 260,
            duration: 400,
            // easing: Easing.bounce()
            useNativeDriver: true
          })
        ]).start(({ finished }) => {

          //Six Third

          Animated.parallel([
            Animated.timing(translation6.x, {
              toValue: 150,
              duration: 400,
              // easing: Easing.bounce(),


              useNativeDriver: true,
            }),
            Animated.timing(translation6.y, {
              toValue: -215,
              duration: 400,
              // easing: Easing.bounce(),

              useNativeDriver: true,
            }),
          ]).start()
        })
      }),


      //Seven



      Animated.parallel([
        Animated.timing(translation7.x, {
          toValue: 10,
          duration: 400,
          useNativeDriver: true,
          delay: 600
        }),
        Animated.timing(translation7.y, {
          // toValue: 100,
          toValue: initPosition.y * 2 - 350,
          duration: 400,
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

        //Seven Second

        Animated.parallel([
          Animated.timing(translation7.x, {
            toValue: -150,
            duration: 400,
            // easing: Easing.bounce
            useNativeDriver: true
          }),
          Animated.timing(translation7.y, {
            // toValue: 150,
            toValue: initPosition.y * 2 - 310,
            duration: 400,
            // easing: Easing.bounce()
            useNativeDriver: true
          })
        ]).start(({ finished }) => {

          //Seven Third

          Animated.parallel([
            Animated.timing(translation7.x, {
              toValue: 150,
              duration: 400,
              // easing: Easing.bounce(),


              useNativeDriver: true,
            }),
            Animated.timing(translation7.y, {
              toValue: -265,
              duration: 400,
              // easing: Easing.bounce(),

              useNativeDriver: true,
            }),
          ]).start()
        })



      }),



      //Eight


      Animated.parallel([
        Animated.timing(translation8.x, {
          toValue: -10,
          duration: 400,
          useNativeDriver: true,
          delay: 700
        }),
        Animated.timing(translation8.y, {
          // toValue: 100,
          toValue: initPosition.y * 2 - 400,
          duration: 400,
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

        //Eight Second

        Animated.parallel([
          Animated.timing(translation8.x, {
            toValue: -150,
            duration: 400,
            // easing: Easing.bounce
            useNativeDriver: true
          }),
          Animated.timing(translation8.y, {
            // toValue: 100,
            toValue: initPosition.y * 2 - 360,
            duration: 400,
            // easing: Easing.bounce()
            useNativeDriver: true
          })
        ]).start(({ finished }) => {

          //Eight Third

          Animated.parallel([
            Animated.timing(translation8.x, {
              toValue: 150,
              duration: 400,
              // easing: Easing.bounce(),


              useNativeDriver: true,
            }),
            Animated.timing(translation8.y, {
              toValue: -315,
              duration: 400,
              // easing: Easing.bounce(),

              useNativeDriver: true,
            }),
          ]).start()
        })
      }),


      //Nine



      Animated.parallel([
        Animated.timing(translation9.x, {
          toValue: -30,
          duration: 400,
          useNativeDriver: true,
          delay: 800
        }),
        Animated.timing(translation9.y, {
          // toValue: 60,
          toValue: initPosition.y * 2 - 450,
          duration: 400,
          useNativeDriver: true
        })
      ]).start(({ finished }) => {

        //Nine Second

        Animated.parallel([
          Animated.timing(translation9.x, {
            toValue: -150,
            duration: 400,
            // easing: Easing.bounce
            useNativeDriver: true
          }),
          Animated.timing(translation9.y, {
            // toValue: 0,
            toValue: initPosition.y * 2 - 410,
            duration: 400,
            // easing: Easing.bounce()
            useNativeDriver: true
          })
        ]).start(({ finished }) => {
          //Nine Third
          Animated.parallel([
            Animated.timing(translation9.x, {
              toValue: 150,
              duration: 400,
              // easing: Easing.bounce(),


              useNativeDriver: true,
            }),
            Animated.timing(translation9.y, {
              toValue: -365,
              duration: 400,
              // easing: Easing.bounce(),

              useNativeDriver: true,
            }),
          ]).start()
        })
      }),


      //Ten


      Animated.parallel([
        Animated.timing(translation10.x, {
          toValue: -50,
          duration: 400,
          useNativeDriver: true,
          delay: 900
        }),
        Animated.timing(translation10.y, {
          // toValue: -60,
          toValue: initPosition.y * 2 - 500,
          duration: 400,
          useNativeDriver: true
        })
      ]).start(({ finished }) => {


        Animated.parallel([
          Animated.timing(translation10.x, {
            toValue: -150,
            duration: 400,
            // easing: Easing.bounce
            useNativeDriver: true
          }),
          Animated.timing(translation10.y, {
            // toValue: 460,
            toValue: initPosition.y * 2 - 460,
            duration: 400,
            // easing: Easing.bounce()
            useNativeDriver: true
          })
        ]).start(({ finished }) => {
          Animated.parallel([
            Animated.timing(translation10.x, {
              toValue: 150,
              duration: 400,
              // easing: Easing.bounce(),


              useNativeDriver: true,
            }),
            Animated.timing(translation10.y, {
              toValue: -415,
              duration: 400,
              // easing: Easing.bounce(),

              useNativeDriver: true,
            }),
          ]).start(({finished})=> {
            // setCount(0)
          })
        })



      })



  };



  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'red',
        flex: 1
      }}>
        <View style={{
            flex: 1,
            // backgroundColor: '#000'
        }}>
        {
          count === 0 ? null :
           <View style={{
        
          }}>
          <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation.x }, { translateY: translation.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>1</Text> */}
            </Animated.Image>
            <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation2.x }, { translateY: translation2.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>2</Text> */}
            </Animated.Image>
            <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation3.x }, { translateY: translation3.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>3</Text> */}
            </Animated.Image>
    
            <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation4.x }, { translateY: translation4.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>4</Text> */}
            </Animated.Image>
            <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation5.x }, { translateY: translation5.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>5</Text> */}
            </Animated.Image>
            <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation6.x }, { translateY: translation6.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>6</Text> */}
            </Animated.Image>
            <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation7.x }, { translateY: translation7.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>7</Text> */}
            </Animated.Image>
            <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation8.x }, { translateY: translation8.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>8</Text> */}
            </Animated.Image>
            <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation9.x }, { translateY: translation9.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>9</Text> */}
            </Animated.Image>
             <Animated.Image
             source={require('./assets/coin.png')}
            style={{
              height: 50,
              width: 50,
              // backgroundColor: 'orange',
              transform: [{ translateX: translation10.x }, { translateY: translation10.y }],
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <Text>10</Text> */}
            </Animated.Image>
            </View>
        } 
        </View>
        <View style={{
          flex: 0.3,
          justifyContent: 'flex-end',
          paddingBottom: 20,
          // backgroundColor: 'pink'
        }}>
      <TouchableOpacity
        onPress={handleAnimation}
        style={{
          
          height: 50,
          width: 100,
          borderRadius: 20,
          backgroundColor: '#000',
        }}
      />
      </View>
      <Text>{windowHeight}</Text>
    </View>
  );
};

export default App2;
