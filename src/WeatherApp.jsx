import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp(){

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const [weatherInfo, setWeatherInfo] = useState({
        city: "WonderLand",
        feelsLike: 0,
        humidity: 10,
        temp: 0,
        tempMin: 0,
        tempMax: 0, 
        weather: "snowy"

});

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
};
    return(
        <div className={`weather-container ${theme}`}>
            <button onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            <h2 className="title">Weather App</h2>
            < SearchBox updateInfo={updateInfo}/>
            < InfoBox info={weatherInfo}/>
        </div>
    );
}