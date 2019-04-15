import React, { Component } from 'react';

const PrimaryActionButton = ({activebutton, onClick, children}) => (
    <button style={activebutton ? styles.active : styles.inactive} onClick={onClick}>
        <p>{children}</p>
    </button>
);

const styles = {

    active: {
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
        fontSize: 18,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 24,
        outline: 0
    },

    inactive: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        fontSize: 18,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 24,
        outline: 0
    }
}

export default PrimaryActionButton;