import react from 'react';
import './App.css'
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

class App extends react.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         headerText: "Name It!"
    //     }
    // }
    state = {
        headerText: "Name It!",
        headerExpanded: true,
    }

    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !inputText })
    }


    render() {

        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
            </div>
        )
    }
}



export default App;