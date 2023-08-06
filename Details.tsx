import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IFollowers {
  avatar_url: string;
  login: string;
}

const Details = ({ route }) => {
  const [listRpos, setListRepos] = useState<IFollowers[]>([]);
    const { followers_url } = route.params;
  //   const [isLoading, setIsLoading] = useState<Boolean>(true);

  const URL = 'https://api.github.com';

  useEffect(() => {
    fetch(followers_url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(`Detalhes: ${JSON.stringify(json)}`);
        setListRepos(json);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Seguidores</Text>
      </View>
      <FlatList
        data={listRpos}
        renderItem={({ item }) => (
            <View style={{ backgroundColor: '#FFF', marginTop: 8, padding: 8 }}>
              <Text>{item.login}</Text>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: item.avatar_url }}
              />
            </View>
        )}
        // ListHeaderComponent={
        //   <View style={{ padding: 8 }}>
        //     <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Repositórios</Text>
        //   </View>
        // }
        ListEmptyComponent={<ActivityIndicator size={'large'} color={'red'} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageView: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: '#2196f3',
    borderRadius: 60,
    alignSelf: 'center',
  },
});

export default Details;
