function inputCleaner (req, res, next) {
    console.log(req.body);
    
    if (req && req.body) {
        if (req.body.username) {
            req.body.username = req.body.username.toLowerCase();
        }

        if (req.body.comment) {
            req.body.comment = req.body.comment.replace(/<[^>]*>/gm, '');
        }
        console.log(req.body);
    }

    next();
}

function inputValidator (req, res, next) {
    if (req && req.body && req.body.username && req.body.username.length >= 3) {
        next();
    } else {
        res.redirect("/form?error=Username must be at least 3 characters.");
    }
}

export {
    inputCleaner,
    inputValidator
};