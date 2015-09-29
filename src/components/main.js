import React from 'react';
import Tile from './Tile';


class Ideas extends React.Component {
    constructor(props) {
        super(props);


        // Expected initial data set
        this.state = {
            test: true
        };
    }
    componentWillMount() {


    }
    componentWillUnmount() {

    }
    componentDidMount() {


    }
    removeElement(el) {

    }
    handleFilterChange(e) {
        // this.removeElement(e.target);

        console.log('handleFilterChange changed!', e);
        this.setState({
            'test': false
        })
    }
    render() {
        if (this.state.test === true) {
            return (
                <div>
                    <h2>Ideas</h2>
                    <p>List all ideas</p>
                    
                        {
                            this.props.initialCount.map(function(item, i) {
                              return (
                                    <Tile handleFilterChange={this.handleFilterChange.bind(this)} key={i} {...item}></Tile>
                                  );
                            }, this)
                        
                    } 
                  </div>
            );
        } else {
            return <h1>BLAH BLAH</h1>
        }
    }

}
Ideas.propTypes = {
    initialCount: React.PropTypes.array
};
Ideas.defaultProps = {
    initialCount: [{
        title: 'hi'
    }, {
        title: 'hello'
    }, {
        title: 'bye'
    }]
};

export default Ideas;
