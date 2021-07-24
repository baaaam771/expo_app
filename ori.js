import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitleStyle}>나만의 꿀팁</Text>
      </View>
      <View style={styles.containerMainImage}>
        <Image 
          source={{uri:'https://mblogthumb-phinf.pstatic.net/MjAxOTAyMjhfNjQg/MDAxNTUxMzY0MTg3NzY4.We93E1Xf4br8hLQQPOyoMkDFSRBCv-vScIj0WWr9eIEg.kMfv0Jj1RUj1Gs4i4Pj2OeSrKwcrscjJhhmEIZN4Pkwg.PNG.3jeong/%EB%B2%8C%EA%BF%80%EC%9D%98_%ED%9A%A8%EB%8A%A5.%EB%AF%B8%EB%B0%B1%ED%9A%A8%EA%B3%BC.png?type=w2'}}
          // 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
          resizeMode={"cover"}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.innerOne}>
         
        </View>
        <View style={styles.innerTwo}>
          <Text>!!컨텐츠!!</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  containerTitle: {
    //영역의 바깥 공간 이격을 뜻합니다(하단 이미지 참조)
    margin: 10,
    //영역 안의 컨텐츠 이격 공간을 뜻합니다(하단 이미지 참조)
    padding: 10,
  },
  textTitleStyle: {
    //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
    color:"black",
    //글자의 크기를 결정합니다
    fontSize:30,
    //글자의 두께를 결정합니다
    fontWeight:"700",
    //가로기준으로 글자의 위치를 결정합니다
    textAlign:"left"
  },
  containerMainImage: {
    flex: 1,
    justifyContent:"center",
    alignContent:"center"
  },
  imageStyle: {
    // width:"100%",
    // height:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  containerTwo:{
    flex:2,
    flexDirection:"row",
    backgroundColor:"yellow"
  },
  innerOne: {
    flex:1,
    backgroundColor:"blue"
  },
  innerTwo: {
    flex:4,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"orange"
  }
});