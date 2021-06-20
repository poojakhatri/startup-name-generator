import react from 'react';
import './App.css'
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

class App extends react.Component {
    state = {
        headerText: "Name It!"
    }

    render() {

        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <SearchBox />
            </div>
        )
    }
}



export default App;