import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => (
    <NewsCard news={item} />
  ); /*renderItem'i Flatlist içerisinde arrow func'ı sürekli çağırmaktansa, burda arrow func ile bir kere tanımlarız, daha sonra FlatList içerisinde kaç kere çağıracaksak o kadar çağırırız */

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        /*json içinde id hazır gelmeseydi "keyExtractor" ile çözerdik*/
        data={news_data}
        renderItem={renderNews} /* Yukardaki arrow func'ı çağırıyoruz */
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});

export default App;
