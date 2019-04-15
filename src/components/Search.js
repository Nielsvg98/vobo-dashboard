import React, { Component } from 'react';

function searchingFor(term) {
    return function (x) {
        return x.className.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: this.props.classes,
            term: '',
        };
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({
            term: event.target.value
        })
    }

    render() {
        const { term, classes } = this.state;
        return (
            <div style={left}>
                <input style={searchBox} placeholder="Zoek klas" onChange={this.searchHandler}></input>
                <div style={classList}>

                    <ul style={{paddingLeft: 12}}>{Object.values(classes).filter(searchingFor(term)).map((schoolClass) => <li style={{ listStyleType: 'none', marginTop: 12}} onClick={() => this.props.addToList(schoolClass.className)} key={schoolClass.id}>{schoolClass.className}</li>)}</ul>
                </div>
            </div>
        )
    }
}

const left = {
    width: '47.5%',
    marginRight: '2.5%',
}

const searchBox = {
    width: '100%',
    border: '1px solid #e1e1e1',
    borderRadius: 5,
    height: 24,
    fontSize: 18,
    marginBottom: 24,
}

const classList = {
    width: '100%',
    border: '1px solid #e1e1e1',
    borderRadius: 5,
}

export default Search;