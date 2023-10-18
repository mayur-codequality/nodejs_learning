module.exports = mware = (req, res, next) => {

    if (!req.query.age) {
        res.send("Please provide age!");
    } else if (req.query.age < 18) {
        res.send("You are not authorized to visit the site!");
    } else {
        next();
    }

    //console.log("Middleware");
}