import React, { useState, useEffect } from 'react';
import Gameboard from './Gameboard'

function Gameplay() {
    const [bestScore, setBestScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [cardsAll, setCardsAll] = useState([
        {id: "card-1", value: "Broccoli", status: false},
        {id: "card-2", value: "Carrot", status: false},
        {id: "card-3", value: "Onion", status: false},
        {id: "card-4", value: "Spinach", status: false},
        {id: "card-5", value: "Brussel Sprouts", status: false},
        {id: "card-6", value: "Cauliflower", status: false},
        {id: "card-7", value: "Squash", status: false},
        {id: "card-8", value: "Zucchini", status: false},
    ]);

    const cardSelect = (e) => {
        let selectedCard = cardsAll.filter(card => card.id === e.target.id);
        if (selectedCard[0].status) {
            resetScore();
            resetCards();
        } else {
            let newScore = currentScore;
            setCurrentScore(newScore + 1);
            switchStatus(selectedCard[0]);
        }
    };

    const resetScore = () => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
        setCurrentScore(0);
    }

    const resetCards = () => {
        setCardsAll([
            {id: "card-1", value: "Broccoli", status: false},
            {id: "card-2", value: "Carrot", status: false},
            {id: "card-3", value: "Onion", status: false},
            {id: "card-4", value: "Spinach", status: false},
            {id: "card-5", value: "Brussel Sprouts", status: false},
            {id: "card-6", value: "Cauliflower", status: false},
            {id: "card-7", value: "Squash", status: false},
            {id: "card-8", value: "Zucchini", status: false},
        ]);
    }

    const switchStatus = (card) => {
        let arrayCopy = cardsAll;
        let index = arrayCopy.indexOf(card);
        card.status = true;
        arrayCopy[index] = card;
        setCardsAll(arrayCopy);
    };

    const shuffleCards = () => {
        let arrayCopy = cardsAll;
        let n = cardsAll.length;
        let temp, i;
        while (n) {
            i = Math.floor(Math.random() * n--);
            temp = arrayCopy[n];
            arrayCopy[n] = arrayCopy[i];
            arrayCopy[i] = temp;
        }
        setCardsAll(arrayCopy);
    };

    useEffect(() => {
        shuffleCards();
    });


    return (
        <div className="game-main">
            <div className="header">
                <h1>Memory Game</h1>
                <p>Gain points by choosing a card but, don't choose a card more than once!</p>
            </div>
            <div className="scoreboard">
                <p>Current Score:{currentScore}</p>
                <p>Best Score:{bestScore}</p>
            </div>
            <Gameboard cards={cardsAll} cardSelect={cardSelect}/>
        </div>
    );
};

export default Gameplay;