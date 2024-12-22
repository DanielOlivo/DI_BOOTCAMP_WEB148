import React from 'react';

class UserFavoriteAnimals extends React.Component {
    constructor(props){
        super()
        this.props = props
    }

    render(){
        return <ul>{this.props.favAnimals.map((an) => <li>{an}</li>)}</ul>
    }
}

export default UserFavoriteAnimals;