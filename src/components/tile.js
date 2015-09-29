import React from 'react';


class Tile extends React.Component {

    constructor(props) {
        // you must pass props every time you have props and you don't set them with 'this.props = props' manually
        super(props);
        console.log('Tile - current props=', this.props);
    
    }
    componentWillMount(){
        

    }
    componentWillUnmount(){

    }
    componentDidMount() {

   }
    titleClickHandler(e){

        console.log('title - clicked!');
    }
    render() {

        return (

            <div style={{margin: 10 + 'px', border: 1+'px solid #cc0000', padding: 10+'px'}} >
                <div>
                    <span >Title:</span> {this.props.title}
                </div>

            </div>

        );
    }
}
// Tile.propTypes = { initialCount: React.PropTypes.number };
// Tile.defaultProps = { initialCount: 0 };


export default Tile;