import React from 'react';

const classes = ["B1A", "B1B", "B1C", "H1A", "H1B", "H1C", "H1D", "V1A", "V1B", "V1C"];
const listItems = classes.map((item) =>
  <li style={{margin: 12}}>{item}</li>
);

class SelectClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isActive: false,
         };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isActive: !state.isActive

        }));
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
                <div style={{borderRadius: 10, backgroundColor:'grey', width: 722, height: 700 }}>
                    <h1 style={{ margin: 24, color: 'black' }}>Welkom.</h1>
                    <p style={{ marginLeft: 24, width: '50%' }}>Selecteer alle klassen die voor jou relevant zijn.
                Deze kun je altijd nog wijzigen.</p>

                    <div style={{ display: 'flex', margin: 24 }}>
                        <div style={{ width: 250, height: 50, backgroundColor: 'white' }}>
                            <input style={{width: '100%', height: '100%'}} type="text" name="name" placeholder="Zoek klas" />
                        </div>

                        <div>
                            <p style={{ marginLeft: 24 }}>0 klassen geselecteerd</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', margin: 24 }}>
                        <div style={{ width: 250, height: 450, backgroundColor: 'white', marginRight: 12 }}>
                            <ul onClick={this.handleClick} style={{color: this.state.isActive ? 'blue' : 'black', listStyleType: 'none'}}>{listItems}</ul>
                        </div>

                        <div style={{ width: 400, height: 450, backgroundColor: 'white', marginLeft: 12 }}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectClass;