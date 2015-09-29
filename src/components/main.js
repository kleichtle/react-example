import React from 'react';
import Tile from './Tile';


class Ideas extends React.Component {
    constructor(props) {
        super(props);


        // Expected initial data set
        this.state = {};
    }
    componentWillMount() {


    }
    componentWillUnmount() {

    }
    componentDidMount() {


    }
    parentClickHandler(e) {

        console.log('parentClickHandler clicked!');
    }
    render() {
        return (
            <div>
                <h2>Ideas</h2>
                <p>List all ideas</p>
                {
                    this.props.initialCount.map(function(item, i) {
                      return (
                            <Tile onClick={this.parentClickHandler.bind(this, i)} key={i} {...item}></Tile>
                          );
                    }, this)
                }
              </div>
        );
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
