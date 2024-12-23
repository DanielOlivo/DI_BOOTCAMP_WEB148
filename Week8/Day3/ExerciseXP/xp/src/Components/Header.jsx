import React from "react";

class Header extends React.Component{
    componentWillUnmount(){
        // console.log('Header before unmounting');
        alert('Header befoure unmounting')
    }    

    render(){
        return <h1>Hello world!</h1>
    }
}

export default Header;