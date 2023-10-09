// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   Animated,
//   TouchableOpacity,
//   ScrollView,
//   Easing,
//   Dimensions,
// } from 'react-native';

// const App = () => {
//   const animationView = useRef(new Animated.Value(0)).current;
//   const animationViewRef = useRef(0);
//   const animationViewPro = useRef(new Animated.Value(0)).current;
//   const Box1 = useRef(new Animated.Value(0)).current;
//   const Box2 = useRef(new Animated.Value(0)).current;
//   const BoxAnimationRef = useRef(0);
//   const BAnimation1 = useRef(new Animated.Value(0)).current;
//   const BAnimation2 = useRef(new Animated.Value(0)).current;
//   const BAnimation3 = useRef(new Animated.Value(0)).current;
//   // const JumpAnimation = useRef(new Animated.Value(0)).current;
//   const position = useRef(new Animated.Value(0)).current;
//   const screenHeight = Dimensions.get('window').height;
//   const Data = [
//     Animated.timing(position, {
//       toValue: screenHeight * 0.75,
//       duration: 300,
//       easing: Easing.position,
//       useNativeDriver: true,
//     }),
//     Animated.timing(position, {
//       toValue: screenHeight * 0.3,
//       duration: 400,
//       useNativeDriver: true,
//     }),
//     Animated.timing(position, {
//       // toValue: 450,
//       toValue: screenHeight * 0.75,
//       duration: 350,
//       easing: Easing.position,
//       friction: 1,
//       useNativeDriver: true,
//     }),
//     Animated.timing(position, {
//       // toValue: 300,
//       toValue: screenHeight * 0.4,
//       duration: 370,
//       useNativeDriver: true,
//     }),
//     Animated.timing(position, {
//       // toValue: 450,
//       toValue: screenHeight * 0.75,
//       duration: 380,
//       easing: Easing.position,
//       friction: 1,
//       useNativeDriver: true,
//     }),
//     Animated.timing(position, {
//       // toValue: 400,
//       toValue: screenHeight * 0.5,
//       duration: 390,
//       useNativeDriver: true,
//     }),
//     Animated.timing(position, {
//       // toValue: 450,
//       toValue: screenHeight * 0.74,
//       duration: 450,
//       easing: Easing.position,
//       friction: 1,
//       useNativeDriver: true,
//     }),
//   ];

//   const Handleanimation = () => {
//     animationViewRef.current = animationViewRef.current === 0 ? 1 : 0;

//     Animated.sequence([
//       Animated.spring(animationView, {
//         toValue: animationViewRef.current,
//         useNativeDriver: true,

//         duration: 2000,
//       }),
//       Animated.spring(animationViewPro, {
//         toValue: animationViewRef.current,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const HandleBox = () => {
//     BoxAnimationRef.current = BoxAnimationRef.current === 0 ? 1 : 0;

//     Animated.sequence([
//       Animated.timing(Box1, {
//         toValue: BoxAnimationRef.current,
//         duration: 2000,
//         useNativeDriver: true,
//       }),
//       Animated.delay(1000),
//       Animated.timing(Box2, {
//         toValue: BoxAnimationRef.current,
//         duration: 3000,
//         useNativeDriver: true,
//       }),
//     ]).start(({finished}) => {
//       // if (finished) {
//       //   Box1.setValue(0);
//       //   Box2.setValue(0);
//       // }
//     });
//   };

//   const HandleBAnimation = () => {
//     BAnimation1.setValue(0);
//     BAnimation2.setValue(0);
//     BAnimation3.setValue(0);

//     Animated.stagger(100, [
//       Animated.timing(BAnimation1, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//       Animated.timing(BAnimation2, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//       Animated.timing(BAnimation3, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//     ]).start(({finished}) => {});
//   };

//   const HandleJump = () => {
//     Animated.sequence(Data).start(({finished}) => {
//       // position.setValue(0);
//     });
//   };

//   return (
//     // <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
//     <View
//       style={{
//         height: '100%',
//         // marginTop: 20,
//         paddingTop: 20,
//       }}>
//       <View
//         style={{
//           height: '100%',
//           width: '100%',
//           // justifyContent: 'center',
//           alignItems: 'center',
//           // padding: 20,
//           flex: 1,
//           backgroundColor: 'green',
//         }}>
//         <TouchableOpacity
//           style={{
//             marginTop: 20,
//           }}
//           onPress={HandleJump}>
//           <Text>Press me</Text>
//         </TouchableOpacity>
//         <View style={{}}>
//           <Animated.View
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: 50,
//               backgroundColor: 'red',
//               transform: [{translateY: position}],
//               marginTop: 20,
//             }}
//           />
//         </View>
//       </View>
//       <View
//         style={{
//           borderTopWidth: 1,
//           // height: 5,
//           flex: 0.04,
//           backgroundColor: 'red',
//         }}>
//         {/* <Text>Hello</Text> */}
//       </View>
//       {/* // </ScrollView> */}
//     </View>
//   );
// };

// export default App;

// {
//   /* <Animated.View
//           style={{
//             height: 200,
//             width: 200,
//             backgroundColor: '#000',
//             transform: [
//               {
//                 scale: animationView.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [1, 0],
//                 }),
//               },
//             ],
//           }}></Animated.View>

//         <TouchableOpacity onPress={Handleanimation}>
//           <Text>Press me</Text>
//         </TouchableOpacity>
//         <Animated.View
//           style={{
//             height: 150,
//             width: 150,
//             backgroundColor: 'red',
//             transform: [
//               {
//                 scale: animationViewPro.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [1, 0],
//                 }),
//               },
//             ],
//           }}></Animated.View>

//         <Animated.View
//           style={{
//             height: 100,
//             width: 100,
//             borderRadius: 75,
//             backgroundColor: '#000',
//             transform: [
//               {
//                 translateX: Box1.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [1, 200],
//                 }),
//               },
//             ],
//           }}></Animated.View>
//         <Animated.View
//           style={{
//             height: 100,
//             width: 100,
//             borderRadius: 75,
//             backgroundColor: 'green',
//             transform: [
//               {
//                 translateX: Box2.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [1, 200],
//                 }),
//               },
//             ],
//           }}></Animated.View>
//         <TouchableOpacity
//           onPress={HandleBox}
//           style={{
//             marginTop: 20,
//           }}>
//           <Text>Press me</Text>
//         </TouchableOpacity> */
// }

// {
//   /* <View>
//           <Animated.View
//             style={{
//               height: 50,
//               width: 80,
//               backgroundColor: '#000',
//               opacity: BAnimation1.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [0, 1],
//               }),
//               margin: 10,
//             }}></Animated.View>
//           <Animated.View
//             style={{
//               height: 50,
//               width: 80,
//               backgroundColor: 'green',
//               opacity: BAnimation2.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [0, 1],
//               }),
//               margin: 10,
//             }}></Animated.View>
//           <Animated.View
//             style={{
//               height: 50,
//               width: 80,
//               backgroundColor: 'blue',
//               opacity: BAnimation3.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [0, 1],
//               }),
//               margin: 10,
//             }}></Animated.View>

//           <TouchableOpacity
//             onPress={HandleBAnimation}
//             style={{
//               margin: 10,
//             }}>
//             <Text>Press me</Text>
//           </TouchableOpacity>
//         </View> */
// }

// // import React, {useRef} from 'react';
// // import {
// //   StyleSheet,
// //   Dimensions,
// //   View,
// //   Animated,
// //   Button,
// //   Easing,
// // } from 'react-native';

// // const App = () => {
// //   const windowWidth = Dimensions.get('window').width;
// //   const windowHeight = Dimensions.get('window').height;
// //   const initPosition = {
// //     x: parseInt(windowWidth / 2) - 50,
// //     y: 0,
// //   };

// //   const position = useRef(new Animated.ValueXY(initPosition)).current;

// //   const animate = () => {
// //     Animated.sequence([ 
// //       Animated.spring(position, {
// //         toValue: {x: initPosition.x, y: 350},
// //         speed: 4,
// //         useNativeDriver: false,
// //         easing: Easing.position,
// //       }),
// //       Animated.spring(position, {
// //         toValue: {x: initPosition.x, y: 350},
// //         speed: 4,
// //         useNativeDriver: false,
// //       }),
// //     ]).start(() => {
// //       position.setValue(initPosition);
// //     });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Button onPress={animate} title="RUN" />
// //       <Animated.View style={[position.getLayout(), styles.ball]} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     marginTop: 40,
// //   },
// //   ball: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 100,
// //     backgroundColor: 'red',
// //   },
// // });

// // export default App;

import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';

const App = () => {
  const coinAnim = useRef(new Animated.ValueXY({x: 40, y: 100})).current;
  const coinAnim2 = useRef(new Animated.ValueXY({x: 40, y: 40})).current;
  const coinAnim3 = useRef(new Animated.ValueXY({x: 40, y: -10})).current;
  const coinAnim4 = useRef(new Animated.ValueXY({x: 40, y: -40})).current;
  const coinAnim5 = useRef(new Animated.ValueXY({x: 40, y: -100})).current;
  const [coinSet, setCoinSet] = useState(0);

  const handleCoin = () => {
    // var range = 1,
    //   snapShort = 50,
    //   radius = 100;
    // var inputRange = [],
    //   outputRange = [];

    // for (let i = 0; i <= snapShort; i++) {
    //   var value = i / snapShort;
    //   var move = Math.sin(value * Math.PI * 2) * radius;
    //   inputRange.push(value);
    //   outputRange.push(move);
    // }

    // translateX = coinAnim.interpolate({inputRange, outputRange});

    // var inputRange = [],
    //   outputRange = [];
    // for (let i = 0; i <= snapShort; i++) {
    //   var value = i / snapShort;
    //   var move = -Math.cos(value * Math.PI * 2) * radius;
    //   inputRange.push(value);
    //   outputRange.push(move);
    // }
    // translateY = coinAnim.interpolate({inputRange, outputRange});

    // Animated.sequence([
    setCoinSet(1);

    Animated.parallel([
      Animated.timing(coinAnim, {
        toValue: {x: 20, y: 0},
        useNativeDriver: true,
        duration: 200,
      }),
      Animated.delay(1000),
      Animated.spring(coinAnim2, {
        toValue: {x: 50, y: -20},
        useNativeDriver: true,
        duration: 200,
      }),
      Animated.delay(1000),

      Animated.spring(coinAnim3, {
        toValue: {x: 80, y: -50},
        useNativeDriver: true,
        duration: 200,
      }),
      Animated.delay(1000),

      Animated.spring(coinAnim4, {
        toValue: {x: 100, y: -60},
        useNativeDriver: true,
        duration: 200,
      }),
      Animated.delay(1000),

      Animated.spring(coinAnim5, {
        toValue: {x: 120, y: -80},
        useNativeDriver: true,
        duration: 200,
      }),
    ]).start(({finished}) => {
      // setCoinSet(0);
      // coinAnim.setValue({x: 40, y: -50});
      HandleSecondView();
    });
    // ]);
  };

  const HandleSecondView = () => {
    Animated.sequence([
      Animated.delay(10),
      Animated.timing(coinAnim, {
        toValue: {x: 300, y: -350},
        useNativeDriver: true,
        duration: 200,
        easing: Easing.linear,
      }),
      // Animated.delay(1000),

      Animated.timing(coinAnim2, {
        toValue: {x: 300, y: -380},
        useNativeDriver: true,
        duration: 200,
      }),
      // Animated.delay(1000),

      Animated.timing(coinAnim3, {
        toValue: {x: 300, y: -450},
        useNativeDriver: true,
        duration: 200,
      }),
      // Animated.delay(1000),

      Animated.timing(coinAnim4, {
        toValue: {x: 300, y: -500},
        useNativeDriver: true,
        duration: 200,
      }),
      // Animated.delay(1000),

      Animated.timing(coinAnim5, {
        toValue: {x: 300, y: -580},
        useNativeDriver: true,
        duration: 200,
      }),
    ]).start(({finished}) => {
      setCoinSet(0);
      // coinAnim.setValue({x: 40, y: -50});
    });
  };
  // const rotate = getAnimated.interpolate({inputRange, outputRange});

  // const rotateOpposit = getAnimated.interpolate({
  //   inputRange,
  //   outputRange: ['0deg', '-360deg'],
  // });

  // const transform = [{rotate}];
  // const transform1 = [{rotate: rotateOpposit}];

  return (
    <View
      style={{
        padding: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <Text>Helllo</Text>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
          }}>
          <View
            style={{
              height: 30,
              width: 50,
              borderRadius: 30,
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Wallet
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          // flex: 1,
          height: '100%',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={handleCoin}
          style={{
            height: 50,
            width: 100,
            borderRadius: 20,
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Redeem
          </Text>
        </TouchableOpacity>
        {coinSet === 0 ? null : (
          <View>
            {/* <Animated.View
              style={[
                {position: 'absolute', width: 10, height: 10},
                {transform},
              ]}>
              <Animated.View
                style={[
                  {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    borderRadius: 100,
                    width: 50,
                    height: 50,
                  },
                  {transform: transform1},
                ]}>
                <Text style={{color: '#fff'}}>Test</Text>
              </Animated.View>
            </Animated.View> */}
            <Animated.View
              style={[
                styles.coinStyle,
                {
                  transform: [
                    {translateX: coinAnim.x},
                    {translateY: coinAnim.y},
                  ],
                },
              ]}>
              <Text>2</Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.coinStyle,
                {
                  transform: [
                    {translateX: coinAnim2.x},
                    {translateY: coinAnim2.y},
                  ],
                },
              ]}>
              <Text>2</Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.coinStyle,
                {
                  transform: [
                    {translateX: coinAnim3.x},
                    {translateY: coinAnim3.y},
                  ],
                },
              ]}>
              <Text>3</Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.coinStyle,
                {
                  transform: [
                    {translateX: coinAnim4.x},
                    {translateY: coinAnim4.y},
                  ],
                },
              ]}>
              <Text>4</Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.coinStyle,
                {
                  transform: [
                    {translateX: coinAnim5.x},
                    {translateY: coinAnim5.y},
                  ],
                },
              ]}>
              <Text>5</Text>
            </Animated.View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coinStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 100,
    width: 50,
    height: 50,
  },
});

export default App;
