import pytest

import weather_web


@pytest.fixture()
def app():
    weather_web.app.testing = True
    return weather_web.app


@pytest.fixture()
def client(app):
    return app.test_client()


def test_weather(client) -> None:
    response = client.get("/weather")
    assert response.status_code == 200
    assert "address" in response.json


def test_weather_no_ip(app, client) -> None:
    response = client.get("/weather", environ_base={"REMOTE_ADDR": None})
    assert response.status_code == 200
    assert "error" in response.json
