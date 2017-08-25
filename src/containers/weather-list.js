import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from './../components/chart';
// import { fetchWeather } from './../actions'

class WeatherList extends Component{
    renderWeather (cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map( weather => weather.main.temp);
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity);
        const height = 120;
        const width = 120;
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart color="red" height={height} width={width} data={temps} />
                </td>
                <td>
                    <Chart color="blue" height={height} width={width} data={pressures} />
                </td>
                <td>
                    <Chart color="green" height={height} width={width} data={humidities} />
                </td>
            </tr>
        )
    }


    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature </th>
                        <th> Pressure </th>
                        <th> Humidity </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return { weather }
}


export default connect(mapStateToProps)(WeatherList);