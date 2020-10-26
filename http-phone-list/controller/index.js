var contacts=require('../json_database/db.json')
exports.index = function (req, res) {
    console.log(req, res);
    res.render("index", {title: 'hay', message: 'ffgg', contacts});
};
exports.new = function (req, res) {
    res.render('new')
}
exports.create = function (req, res) {
    var name = req.body.name
    var phone = req.body.phone
    console.log(name, phone)
    res.render('new', {
        data: {
            name: name,
            phone: phone

        },
        errors: {
            
        }
    })
}