import React, { useState, useEffect } from 'react';

function Scoreboard(props) {

    const cardDivs = props.cards.map((card) =>
            <div key={card.id} id={card.id} className={card.id} onClick={props.cardSelect}>{card.value}</div>
    );

    return (
        <div className="game-content">
            {cardDivs}
        </div>
    );
}

export default Scoreboard;