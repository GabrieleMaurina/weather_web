import waitress

import weather_web


def main():
    waitress.serve(weather_web.app, host="0.0.0.0", port=80)


if __name__ == "__main__":
    main()
