const {createContainer, asClass, asFunction, asValue} = require('awilix');

//config
const app = require('.');
const routes = require('../routes');
const config = require('../config');

//Service
const {
    HomeService,
    PatientService,
    PersonalService
} = require('../services');

//Controllers
const {
    HomeController,
    PatientController,
    PersonalController
} = require('../controllers');

//Routes
const {HomeRoutes} = require('../routes/index.routes');

//Models
const {Patient, Personal} = require('../models');

//Repositories
const {PatientRepository, PersonalRepository} = require('../repositories');

const container = createContainer();

container.register({
    //Configuration
    app: asClass(app).singleton(),
    routes: asFunction(routes).singleton(),
    config: asValue(config),
    //Values
    Patient: asValue(Patient),
    Personal: asValue(Personal),
    //Services
    HomeService: asClass(HomeService).singleton(),
    PatientService: asClass(PatientService).singleton(),
    PersonalService: asClass(PersonalService).singleton(),
    //Controllers
    HomeController: asClass(HomeController).singleton(),
    PatientController: asClass(PatientController).singleton(),
    PersonalController: asClass(PersonalController).singleton(),
    //Routes
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    //Repositories
    PatientRepository: asClass(PatientRepository).singleton(),
    PersonalRepository: asClass(PersonalRepository).singleton()
});

module.exports = container;