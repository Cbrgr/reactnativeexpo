import React from 'react';
import { Text, StyleSheet,SafeAreaView, Image } from 'react-native';

export default class ProductView extends React.Component {

    render() {
        
          return(
            <SafeAreaView style={{flex: 1, padding: 20}}>
                <Image 
                    source={{uri: this.props.route.params.item.image_small_url }}
                    style={{ alignSelf: 'center', width: "100%", height: 200 }}
                />
                <Text style={{fontWeight: 'bold', paddingTop:20 }}>{this.props.route.params.product_name}</Text>
                <Text>{this.props.route.params.item.nutrition_score_warning_fruits_vegetables_nuts_from_category_value} / 100</Text>
            </SafeAreaView>
        );
    }
}
