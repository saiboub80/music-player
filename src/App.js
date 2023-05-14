import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery"
import SearchBar from "./Components/SearchBar";
import AlbumView from "./Components/AlbumView";
import ArtistView from "./Components/ArtistView";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);

  const API_URL = `https://itunes.apple.com/search?term=`;

  useEffect(() => {
    if (search) {
      document.title = `${search} Music`;
      const fetchData = async () => {
        const response = await fetch(API_URL + search);
        const data = await response.json();
        if (data.results.length > 0) {
          return setData(data.results);
        } else {
          return setMessage("Not Found");
        }
      };
      fetchData();
    }
  }, [search, API_URL]);
  

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };

  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar handleSearch={handleSearch} />
                <Gallery data={data} />
              </>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;