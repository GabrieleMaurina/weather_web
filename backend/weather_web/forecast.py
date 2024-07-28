import openmeteo_requests


def get_forecast(lat, lon):
    openmeteo = openmeteo_requests.Client()
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lon,
        "current": ["temperature_2m"],
        "hourly": "temperature_2m",
        "forecast_days": 1,
        "temperature_unit": "fahrenheit",
    }
    response = openmeteo.weather_api(url, params=params)[0]

    current_temp = 0.0
    current = response.Current()
    if current is not None:
        first = current.Variables(0)
        if first is not None:
            current_temp = first.Value()

    min_temp = max_temp = 0.0
    hourly = response.Hourly()
    if hourly is not None:
        temp = hourly.Variables(0)
        if temp is not None:
            values = []
            for i in range(temp.ValuesLength()):
                values.append(temp.Values(i))
            min_temp = min(values)
            max_temp = max(values)

    return int(round(current_temp)), int(round(min_temp)), int(round(max_temp))
