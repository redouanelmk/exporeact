// Components/Search.js

import React from 'react'
import { View, TextInput, Button, StyleSheet, Text, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText }  from '../API/TMDBApi'


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText= "";
    this.state = { films: []}

  }
  _loadFilms() {
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({ films: data.results })
      })
    }
  }

  _searchedTextInputChanged(text){
    this.searchedText = text;
  }

  _displayDetailForFilm(idFilm){
    console.log("Displa film with id:" + idFilm)

  }

  render() {
    console.log("RENDER")
    return (
      <View style={styles.maincontainer}>
        <TextInput 
        style={styles.textinput} 
        placeholder='Titre du film'
        onChangeText={(text)=> this._searchedTextInputChanged(text)}/>
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm}/>}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 2,
    paddingLeft: 5

  }
})
export default Search