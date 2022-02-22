import './App.css';


const weather_API_Key = {
  key : "908e1279e9312c592fb9f563f5ce02a5",
  base : "https://api.openweathermap.org/data/2.5/"
};

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </main>
    </div>
  );
}

export default App;
