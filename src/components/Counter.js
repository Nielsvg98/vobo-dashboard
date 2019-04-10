import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 })
    }

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    styles = {
        padding: 10,
        borderRadius: 5,
        marginLeft: 5
    }

    render() {

        return (
            <div style={{ margin: 100 }}>
                {this.props.children}
                <span style={{ fontSize: 15, fontWeight: 'bold', padding: 10, TextAlign: 'center', borderRadius: 5, backgroundColor: this.state.count === 0 ? '#F9C22E' : '#009FFD' }}>{this.formatCount()}</span>
                <button onClick={this.doHandleIncrement} style={this.styles}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id)} style={{backgroundColor: '#D00000', padding: 10, borderRadius: 5, fontWeight: 'bold', color: 'white'}}>Delete</button>
                {/* <div>{this.renderTags()}</div> */}
            </div>
        )
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}



export default Counter;