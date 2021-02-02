import React from 'react';
import PropTypes from 'prop-types';

function Game({ name, picture, rating }) {
    // 함수 매개변수에서  Movie({fav}) 와 같이 일부만 호출할 수 있음
    // 변수명을 {`변수명`}으로 호출해 사용
    // 매개변수 props로 불러서 호출
    // console.log(props.fav);

    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0 </h4>
            <img src={picture} alt={name} />
        </div>
    );
}

const gameILike = [
    {
        id: 1,
        name: 'THE OUTER WORLDS',
        image:
            'https://image.api.playstation.com/vulcan/img/cfn/11307bce4B5hVI6jiAtsB-7Q5rpQEzjwosGAyPA-NewqLwMsyg6VnBcO8s-0dOzmlWGnhaXt7MuHeHjBeu7QUuW0ivEw2gii.png',
        rating: 4.1,
    },
    {
        id: 2,
        name: 'Ratropolis',
        image:
            'https://tumblbug-pci.imgix.net/e32b7aef51d5b44a6fdc1e7b8fa19fad8e6e2a8e/a604ed7c557b45be21e8e9986058ab16aba32f6a/d9fb80daa4e2545676456e61a9ffc1297c4f4fbd/1fb4e96d-27cd-493c-b3ee-e4538819a347.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=f6e7c530d57cf5b844556705cd279270',
        rating: 4.5,
    },
    {
        id: 3,
        name: 'Hearthstone',
        image:
            'https://d2vkoy1na2a6o6.cloudfront.net/images/logos/logo-c66376ed06cce60a01849443a90be276dfcf2cebfda477fff2b90bd66397210229adf8c9ba9243fb30bf4299ec267633d17a14fb73e80177a0a8109b15cf74c3.png',
        rating: 5.5,
    },
];

Game.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

function renderGame(game) {
    return (
        <Game
            name={game.name}
            picture={game.image}
            key={game.id}
            rating={game.rating}
        />
    );
}

function App() {
    //jsx 내부 html에서 js는 {}로 감싸 선언 및 사용
    return (
        <div>
            {console.log(gameILike.map(renderGame))}
            {gameILike.map(renderGame)}
        </div>
    );
}

export default App;
