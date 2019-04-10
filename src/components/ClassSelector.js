import React from 'react';

const main = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2D2D34',
}

const classlist = {
    backgroundColor: 'white',
    border: '1px solid #E1E1E1',
    borderRadius: 10,
    width: '20%',
    height: 300,
    margin: 25
}

const selected = {
    backgroundColor: 'white',
    border: '1px solid #E1E1E1',
    borderRadius: 10,
    width: '20%',
    height: 300,
    margin: 25
}

class ClassSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: [],
            countSelected: 0
        }
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        });
    }

    addToList(input) {
        let listArray = this.state.list;

        listArray.push(input);

        this.setState({
            list: listArray,
            countSelected: this.state.countSelected + 1,
            userInput: ''
        })
    }
    
    formatCount() {
        const { countSelected } = this.state;
        return countSelected === 1 ? countSelected + ' klas' : countSelected + ' klassen' // fix grammar of plural
    }

    render() {
        return (
            <div style={main}>
                <div style={classlist}>
                    <input
                        style={{ margin: 15 }}
                        onChange={(e) => this.changeUserInput(e.target.value)}
                        value={this.state.userInput}
                        type="text" />
                    <button onClick={() => this.addToList(this.state.userInput)}>Add</button>
                </div>

                <div style={selected}>
                    <p style={{ paddingLeft: 10 }}>{this.formatCount()} geselecteerd</p>
                    <ul>{this.state.list.map((val) => <li>{val}</li>)}</ul>
                </div>
            </div>

        );
    }
}


export default ClassSelector;