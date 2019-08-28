import {Suspense , lazy} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Artists from './Artists';
const Artists = React.lazy(()=> import('./Artists'));
class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Suspense fallback={<h1>Loading.....</h1>}>
            <Artists /> 
            </Suspense>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
