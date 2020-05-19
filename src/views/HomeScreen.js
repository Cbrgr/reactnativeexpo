import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

class ListItem extends React.Component{


    
    _onPress(item){

        this.props.navigation.navigate('Produit', 
        {
            product_name: item.product_name,
            item: item
        })

    }
    
    render() {


        return (
            <View style={styles.listLine}>
                <TouchableOpacity style={{width: 320}} onPress={()=> this._onPress(this.props.item)}>
                    <Text style={styles.textLino}>{this.props.item.product_name}</Text>
                </TouchableOpacity>
                {/* <Icon name='favorite' size={18} /> */}
            </View>
        )
    }
}

export default class HomeScreen extends React.Component {
    


    constructor(props){
        super(props);
        this.state = { 
        }
    }

    componentDidMount(){
        return fetch('https://fr-en.openfoodfacts.org/category/fruits-and-vegetables-based-foods/1.json')
          .then((response) => response.json())
          .then((responseJson) => {
    

            this.setState({
              dataSource: responseJson.products,
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    
    
    render() {
          return(
            // <View style={{flex: 1, padding: 20}}>
            //     <Text>HOMESCREEN</Text>
            // </View>
            <SafeAreaView style={{flex: 1, paddingTop:20}}>
              
              <FlatList
                style={styles.list}
                data={this.state.dataSource}
                renderItem={({item}) => <ListItem item={item} navigation={this.props.navigation} />}
                keyExtractor={({id}, index) => id}
              />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    listLine: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        padding: 10,
        borderTopColor: 'rgba(0,0,0,0.08)',
        borderTopWidth: 1
    },
    list: {

    }
});