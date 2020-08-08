require('dotenv').config()

exports.parseCoordinates = (latitud, longitud, distance) => {
    
    const radian = process.env.RADIAN;
    const Ydistance = process.env.LATITUDE;
    const Xdistance = process.env.LONGITUDE * Math.cos(latitud/radian);

    // Deltas
    const yDelta = distance / Ydistance;
    const xDelta = distance / Xdistance;

    const coordinates = {}
    // casos atipicos
    const minY = latitud - yDelta
    const maxY = latitud + yDelta
    const minX = longitud - xDelta
    const maxX = longitud + xDelta

    coordinates.minY = minY < -90 ? -90 : minY;
    coordinates.maxY = maxY > 90 ? 90 : maxY;
    coordinates.minX = minX < -180 ? minX + 360 : minX;
    coordinates.maxX = maxX > 180 ? maxX - 360 : maxX;

    return coordinates;
}

exports.parseSearchQueryParams = coordinates => {
    const { minY, minX, maxX, maxY } = coordinates;
    let parsedURL = `${process.env.API_URL}?$where=latitude>${minY} AND latitude<${maxY} AND longitude>${minX} AND longitude<${maxX}&facilitytype=Truck`;
    return encodeURI(parsedURL);
}
