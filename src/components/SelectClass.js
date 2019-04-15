import React, { Component } from 'react';
import Search from "./Search";
import PrimaryActionButton from './PrimaryActionButton';

class Counters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: {
                1: { id: 1, className: 'BA1', active: false },
                2: { id: 2, className: 'MA1', active: false },
                3: { id: 3, className: 'VA2', active: false },
                4: { id: 4, className: 'DA2', active: false },
                5: { id: 5, className: 'BB2', active: false },
                6: { id: 6, className: 'ES3', active: false },
                7: { id: 7, className: 'SD3', active: false }
            },
            activebutton: 'false',
            showPopup: 'true'
        };
    }

    setActiveButton() {
        this.setState(state => ({
            activebutton: !state.activebutton
        }));
    }

    selectClass = (classId) => {
        this.setState({
            classes: { ...this.state.classes, [classId]: true },
        })
    };

    showPopup() {
        alert('close popup');
    }

    render() {
        const klassen = Object.values(this.state.classes);
        const active = Object.entries(this.state.classes).filter(f => f[1] === true);
        const count = active.length;

        return (
            <div style={main}>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button onClick={this.showPopup}>X</button>
                </div>
                <div>
                    <h1>Welkom.</h1>
                    <p>Selecteer alle klassen die voor jou relevant zijn. Deze kun je altijd nog wijzigen.</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p>{count === 1 ? count + ' klas' : count + ' klassen'} geselecteerd</p>
                </div>

                <div style={classStyling}>
                    <Search classes={this.state.classes} key={klassen.id} addToList={this.selectClass} value={klassen.className}></Search>
                    <div style={right}>
                        <ul style={{ paddingLeft: 12 }}>
                            {active.map(cls =>
                                <li style={{ listStyleType: 'none', marginTop: 12 }}>{cls}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <PrimaryActionButton activebutton={count > 0 ? true : false}>Opslaan</PrimaryActionButton>
                </div>

            </div>
        )
    }
}


const main = {
    width: '40%',
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '5%',
    padding: 24,
    backgroundColor: 'white',
    border: '1px solid #e1e1e1',
    borderRadius: 5,
}

const classStyling = {
    display: 'flex',
    marginTop: 24,
}

const right = {
    width: '47.5%',
    marginLeft: '2.5%',
    border: '1px solid #e1e1e1',
    borderRadius: 5,
    marginTop: 48,
}



export default Counters;