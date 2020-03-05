import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        //reference to a piece of data in db
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this, 
            state: 'fishes'
        });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // Take a copy of the existing state
        const fishes = { ... this.state.fishes};
        // Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // set the new fishes object to state
        this.setState({
            fishes // same as fishes: fishes
        });
    }

    updateFish = (key, updatedFish) => {
        //1. take a copy of the existing state
        const fishes = {...this.state.fishes};
        //2. update that state
        fishes[key] = updatedFish;
        //3. set that to state
        this.setState({ fishes});
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        // take a copy of state
        const order = {...this.state.order};
        // either add to order or update the number in our order
        order[key] = order[key] + 1 || 1;
        // call setState to update our state object
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood everyday" />
                    <ul className="fishes">
                        {
                            Object.keys(this.state.fishes).map(key => 
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder} />)
                        }
                    </ul>
                </div>

                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order}
                />

                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes}
                    addToOrder={this.addToOrder} 
                    fishes={this.state.fishes} 
                />
            </div>
        );
    }
}

export default App;