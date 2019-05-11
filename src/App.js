import React, {Component} from 'react';
import './App.css';
import {createStore} from 'redux';
import {connect} from 'react-redux';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const data = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }
  const reducer = (state = data, action) => {
    switch (action.type) {
      default:
        return state
    }
}

export const store = createStore(reducer, enhancer)

class App extends React.Component {    
  constructor (props) {
    super(props);
    this.state = {value: {}}
    
  }

  
    
  updateSelection(event){
    console.log('event:', event.target.value) 
    //const selected= this.props.filter(selected => (selected.key === event.target.value))
  }
  
  render(){
    return (
    <div>
      <form className="App-header" >                 
        <br/>                 
        <select onChange={this.updateSelection} value={this.props.value}>
          
          <option > -- Pick a model ---</option>   
          {Object.keys(data).map (name =>
                <option value={name}> {name+ ' (' + data[name].year + ') '} </option>  
          )}

        </select>         
        <button> Add </button>            
      </form>     
     </div>
    );
    }
}

const mapStateToProps = (state) => {
  console.log('state in mapState:', state)
  return{
    techlist: state
  }
}
export default connect (mapStateToProps)(App)
