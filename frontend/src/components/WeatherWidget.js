import React, { Component } from 'react';
import axios from 'axios';

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      temperature: '',
      description: '',
      error: ''
    };
  }

  componentDidMount() {
    this.fetchLocation();
  }

  // Obtener la ubicación por IP usando ipinfo.io
  fetchLocation = () => {
    const ipInfoToken = '2a63e6f9820fbf'; // Reemplazar con tu API key de ipinfo.io

    axios
      .get(`https://ipinfo.io?token=${ipInfoToken}`)
      .then((response) => {
        const { city, country } = response.data;
        this.setState({ city, country }, this.fetchWeather);
      })
      .catch((error) => {
        this.setState({ error: 'Error al obtener la ubicación' });
      });
  };

  // Obtener el clima usando la API de OpenWeatherMap
  fetchWeather = () => {
    const openWeatherKey = '62a99f324f3b4d1637d2a93aa914300b'; // Reemplazar con tu API key de OpenWeatherMap
    const { city } = this.state;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherKey}`
      )
      .then((response) => {
        const { temp } = response.data.main;
        const { description } = response.data.weather[0];
        this.setState({
          temperature: temp,
          description: description
        });
      })
      .catch((error) => {
        this.setState({ error: 'Error al obtener el clima' });
      });
  };

  render() {
    const { city, country, temperature, description, error } = this.state;

    return (
      <div className="weather-widget">
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h4>Weather in {city}, {country}</h4>
            {temperature && (
              <p>
                {temperature}°C - {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default WeatherWidget;
