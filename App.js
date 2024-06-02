import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView,Image,FlatList, TouchableOpacity } from 'react-native';


const categoryCards = [
  {
    id: 1,
    title: 'Exercise',
    image: require('./assets/exercise.png'),
  },
  {
    id: 2,
    title: 'Study',
    image: require('./assets/study.png'),
  },
  {
    id: 3,
    title: 'Music',
    image: require('./assets/airpods.png'),
  },
  {
    id: 4,
    title: 'Workout',
    image: require('./assets/workout.png'),
  },
  {
    id: 5,
    title: 'Cooking',
    image: require('./assets/cooking.png'),
  },
  {
    id: 6,
    title: 'Code',
    image: require('./assets/code.png'),
  },
  {
    id: 7,
    title: 'Token',
    image: require('./assets/token.png'),
  },
  {
    id: 8,
    title: 'Referral',
    image: require('./assets/referral.png'),
  },
]

const veticalCategorycards = [
  {
    id: 10,
    title: 'Pullups',
  },
  {
    id: 20,
    title: 'Software Engineering',
  },
  {
    id: 30,
    title: 'Playing - Tell me- Yeat',
  },
  {
    id: 40,
    title: 'Web Development',
  },
  {
    id: 50,
    title: 'Cyber Security',
  },
  {
    id: 60,
    title: 'Artificial Inteligence',
  },
  {
    id:70,
    title: 'Python',
  },
  {
    id: 80,
    title: 'Data Analysis',
  },
  {
    id: 90,
    title: 'System Administration',
  },
  {
    id: 100,
    title: 'Networking',
  },
  {
    id: 110,
    title: 'Cloud Technical Essentials',
  },
  {
    id: 120,
    title: 'Information Systems Auditing, Controls and Assurance',
  },
  {
    id: 130,
    title: 'Security Priciples',
  },
  {
    id: 140,
    title: 'Introduction to Technical Support',
  },
  {
    id: 150,
    title: 'Configuration Managenent and the Cloud',
  },
  {
    id: 160,
    title: 'Linus Fundamentals',
  },
]


export default function App() {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryCards}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <Text style={styles.categoryText}>12 tasks</Text>
      <Image source={item.image} style={styles.categogies} />
    </TouchableOpacity>
    );

  const renderItem2 = ({ item }) => (
    <TouchableOpacity style={styles.veticalCategorycards}>
      <Text style={styles.verticalcategoryTitle}>{item.title}</Text>
    </TouchableOpacity>
    );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topsection}>
        <View>
          <Text style={styles.introText}>Hello ,Devs</Text>
          <Text style={styles.smallhaed} >14 tasks today</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('./assets/profile2.png')} style={styles.logo} />
        </View>
      </View>

      <View style={styles.section2}>
        <View style={styles.section2min}>
          <Image source={require('./assets/magnifying.png')} style={styles.magnify}/>
          <Text style={styles.intext} >Search</Text>
        </View>

        <View style={styles.mana}>
          <Image source={require('./assets/filter.png')} style={styles.filter}/>
        </View>
      </View>

      <View>
        <Text style={styles.cate}>Categories</Text>

        <FlatList
          data={categoryCards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={}
        />
      </View>

      <View style={styles.categoryColumn}>
        <Text style={styles.cate}>Ongoing Tasks</Text>

          <FlatList
            data={veticalCategorycards}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={}
          />
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    paddingHorizontal:20,
    backgroundColor:'#F0E6DA',
    paddingVertical:40,
  },
  introText: {
    fontSize: 40,
    fontWeight: '500'
  },
  smallhaed:{
    fontSize:16,
    fontWeight:'500'
  },
  profile:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'#fff',
  },
  topsection:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20,
    marginBottom:20,
  },
  
  logo:{
    width:50,
    height:50,
    alignSelf:'center'
  },

  section2:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginRight: 10,
  },
  section2min:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    width:280,
    height:50,
    borderRadius:20

  },
  magnify:{
    width:20,
    height:20,
  },
  intext:{
    fontSize:20,
    fontWeight:'500',
    marginLeft:10,
  },
  mana:{
    width:50,
    height:50,
    backgroundColor:"#F0522F",
    borderRadius:15,
    paddingVertical: 10,
  },

  filter:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  cate:{
    fontSize:30,
    fontWeight:'500',
    marginLeft:10,
    marginTop:30,
  },
  categogies:{
    width:120,
    height:120,
    alignSelf:'center',
  },
  categoryCards:{
    width:230,
    height:230,
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    marginRight:20,
    borderRadius:15,
    paddingVertical: 20,
    backgroundColor:'#fff',
    paddingHorizontal:20,
    
  },
  categoryText:{
    fontSize:14,
    fontWeight:'500',
    marginLeft:10,
  },
  categoryTitle:{
    fontSize:20,
    fontWeight:'500',
    marginLeft:10,
  },
  categoryColumn:{
    marginTop:20,
    marginBottom:20,
    
  },
  veticalCategorycards:{
    width:350,
    height:130,
    marginTop:10,
    marginBottom:10,
    borderRadius:15,
    backgroundColor:'#fff',
    justifyContent:'center',
  },
  verticalcategoryTitle:{
    fontSize:20,
    fontWeight:'500',
    marginLeft:10,
    paddingHorizontal:20,
  },


});

