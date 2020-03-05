import React, { Component } from 'react';

class StorePicker extends Component {
    // constructor() {
    //     super();
    //     console.log ("going to create a component");
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();
    
    // goToStore is a property (Lesson 11)
    goToStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input
        console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value;
        // 3. change the page to /store/whatever (use React)
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit = {this.goToStore} >
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue="The Fish Market" />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;