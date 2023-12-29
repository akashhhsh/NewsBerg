import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import NewsPage from './Components/NewsPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {

  const apiKey = process.env.REACT_APP_API

  const [progress, setProgress] = useState(0)

  return (
    <div className="App">
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NewsPage topProgressbar={setProgress} key={"top"} apikey={apiKey} category={"top"} country={"in"} size={"8"} />} />
          <Route exact path="/business" element={<NewsPage topProgressbar={setProgress} key={"business"} apikey={apiKey} category={"business"} country={"in"} size={"8"} />} />
          <Route exact path="/environment" element={<NewsPage topProgressbar={setProgress} key={"environment"} apikey={apiKey} category={"environment"} country={"in"} size={"8"} />} />
          <Route exact path="/entertainment" element={<NewsPage topProgressbar={setProgress} key={"entertainment"} apikey={apiKey} category={"entertainment"} country={"in"} size={"8"} />} />
          <Route exact path="/business" element={<NewsPage topProgressbar={setProgress} key={"business"} apikey={apiKey} category={"business"} country={"in"} size={"8"} />} />
          <Route exact path="/food" element={<NewsPage topProgressbar={setProgress} key={"food"} apikey={apiKey} category={"food"} country={"us"} size={"8"} />} />
          <Route exact path="/health" element={<NewsPage topProgressbar={setProgress} key={"health"} apikey={apiKey} category={"health"} country={"in"} size={"8"} />} />
          <Route exact path="/politics" element={<NewsPage topProgressbar={setProgress} key={"politics"} apikey={apiKey} category={"politics"} country={"in"} size={"8"} />} />
          <Route exact path="/science" element={<NewsPage topProgressbar={setProgress} key={"science"} apikey={apiKey} category={"science"} country={"in"} size={"8"} />} />
          <Route exact path="/sports" element={<NewsPage topProgressbar={setProgress} key={"sports"} apikey={apiKey} category={"sports"} country={"in"} size={"8"} />} />
          <Route exact path="/technology" element={<NewsPage topProgressbar={setProgress} key={"technology"} apikey={apiKey} category={"technology"} country={"in"} size={"8"} />} />
          <Route exact path="/tourism" element={<NewsPage topProgressbar={setProgress} key={"tourism"} apikey={apiKey} category={"tourism"} country={"in"} size={"8"} />} />
          <Route exact path="/world" element={<NewsPage topProgressbar={setProgress} key={"world"} apikey={apiKey} category={"world"} country={"in"} size={"8"} />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;
