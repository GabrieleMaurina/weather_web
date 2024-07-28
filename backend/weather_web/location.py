import typing

import geocoder


def get_lat_lon(ip: str) -> typing.Any:
    if ip == "127.0.0.1":
        ip = "me"
    res = geocoder.ip(ip)
    return res.latlng[0], res.latlng[1], res.address
