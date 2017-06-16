import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'API_KEY';

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this components' generate HTML and put it on
// the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
