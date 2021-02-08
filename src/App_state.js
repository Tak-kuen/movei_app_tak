import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);
        console.info('class created!');
    }
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: this.state.count - 1 }));
    };
    // 처음 렌더링 했을때
    componentDidMount() {
        console.info('component rendered');
    }
    // setState로 업데이트 됐을때
    componentDidUpdate() {
        console.info('when setState called');
    }
    componentWillUnmount() {
        console.info('Fucking Bye');
    }
    render(){
        console.log('rendering');
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
