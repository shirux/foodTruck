exports.validateSearch = (req, res, next) => {
    const latitud = req.query.y;
    const longitud = req.query.x;


    if (!latitud || !longitud) {
        const err = new Error('Missing parameters');
        next(err);
    }

    if (isNaN(latitud)) {
        const err = new Error('Latitud is not a number');
        next(err);
    }
    
    if(isNaN(longitud)) {
        const err = new Error('Longitude is not a number');
        next(err);
    }

    if (latitud < -90 || latitud > 90) {
        const err = new Error('Latitud is not in a valid range');
        next(err);
    }

    if (longitud > 180 || longitud < -180) {
        const err = new Error('Longitude is not in a valid range');
        next(err);
    }
    
    next();
}