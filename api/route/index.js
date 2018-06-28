const userController = require('../controller/userController');
const textController = require('../controller/textController');
module.exports = (app) => {
    app.route('/tokens').get(userController.getAll);
    app.route('/tokens').post(userController.create);
    app.route('/tokens/:id').get(userController.get);
    app.route('/tokens/:id').put(userController.update);
    app.route('/tokens/:id').delete(userController.delete);

    app.route('/justify').post(textController.justify);

    app.use((req, res) => {
        res.status(404).json({url: req.originalUrl, error: 'not found'});
    });
};