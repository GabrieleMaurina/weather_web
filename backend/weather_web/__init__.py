import flask
import flask_cors

import weather_web.forecast
import weather_web.location

app = flask.Flask(__name__)
flask_cors.CORS(app)


@app.route("/")
def index():
    return "Hello, World!"


@app.route("/weather")
def weather():
    ip = flask.request.remote_addr
    if ip is None:
        return flask.jsonify(error="Could not get IP address")
    lat, lon, address = weather_web.location.get_lat_lon(ip)
    current_temp, min_temp, max_temp = weather_web.forecast.get_forecast(lat, lon)
    return flask.jsonify(
        address=address,
        lat=lat,
        lon=lon,
        current_temp=current_temp,
        min_temp=min_temp,
        max_temp=max_temp,
    )
