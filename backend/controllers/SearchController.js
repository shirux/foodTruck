const utils = require('../utils/utils')
const axios = require('axios')


const defaultValues = {
    "distance": 5
}


exports.search = async (req, res, next) => {

    // Grab location
    const latitud = parseFloat(req.query.y);
    const longitud = parseFloat(req.query.x);

    let distance = req.query.radius;

    if (!distance) {
        distance = defaultValues.distance
    }
    
    const coordinates = utils.parseCoordinates(latitud, longitud, distance);
    console.dir(coordinates);

    const url = utils.parseSearchQueryParams(coordinates);

    console.log(url);

    let results = []
    try {
        results = await axios.get(url);
        return results;
    } catch(err) {
        return [];
    }
}