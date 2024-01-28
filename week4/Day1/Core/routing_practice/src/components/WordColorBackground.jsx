import React from 'react';
import { useParams } from 'react-router-dom';

const WordColorBackground = () => {
    const { color, word, bgcolor } = useParams();

    const textStyle = {
        color: color, // Utilisez directement la variable color
    };

    const containerStyle = {
        backgroundColor: bgcolor,
        padding: '10px',
    };

    return (
        <div style={containerStyle}>
        {/* {isNaN(word) && isNaN(color) ? (
            <h1 style={textStyle}>The word is : {word}</h1>
        ) : null} */}

        {
            isNaN(word)?
                isNaN(color)? <h1 style={textStyle}>The word is : {word}</h1>:null

            
            :"please enter a word"
        }
        </div>
    );
};

export default WordColorBackground;
