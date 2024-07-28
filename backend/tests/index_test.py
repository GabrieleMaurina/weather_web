import weather_web


def test_index() -> None:
    response = weather_web.index()
    assert response == "Hello, World!"
