const {createContainer, asClass, asFunction, asValue} = require('awilix');

//config
const app = require('.');
const routes = require('../routes');
const config = require('../config');

//Service
const {HomeService} = require('../services');

//Controllers
const {HomeController} = require('../controllers');

//Routes
const {HomeRoutes} = require('../routes/index.routes');

const container = createContainer();

container.register({
    //config
    app: asClass(app).singleton(),
    routes: asFunction(routes).singleton(),
    config: asValue(config),
    //Services
    HomeService: asClass(HomeService).singleton(),
    //Controllers
    HomeController: asClass(HomeController).singleton(),
    //Routes
    HomeRoutes: asFunction(HomeRoutes).singleton()
});

module.exports = container;