import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Heading = ({ text }) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    text: {
        fontSize: 30,
        color: 'darkblue',
        fontFamily: 'BebasNeue-Regular',
        textAlign: 'center'      
    }
})

Heading.propTypes = {
    text: PropTypes.string.isRequired
}

export default Heading;
