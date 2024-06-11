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
const {
    HomeRoutes,
    PatientRoutes,
} = require('../routes/index.routes');

//Models
const {
    Clinic,
    ClinicHistory,
    Expedient,
    Hospital,
    OfficeClinic,
    OfficeHospital,
    Patient,
    PatientHospital,
    Personal,
    PersonalType,
    Speciality
} = require('../models');

//Repositories
const {PatientRepository, PersonalRepository} = require('../repositories');

const container = createContainer();

container.register({
    //Configuration
    app: asClass(app).singleton(),
    routes: asFunction(routes).singleton(),
    config: asValue(config),
    //Values
    Clinic: asValue(Clinic),
    ClinicHistory: asValue(ClinicHistory),
    Expedient: asValue(Expedient),
    Hospital: asValue(Hospital),
    OfficeClinic: asValue(OfficeClinic),
    OfficeHospital: asValue(OfficeHospital),
    Patient: asValue(Patient),
    PatientHospital: asValue(PatientHospital),
    Personal: asValue(Personal),
    PersonalType: asValue(PersonalType),
    Speciality: asValue(Speciality),
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
    PatientRoutes: asFunction(PatientRoutes).singleton(),
    //Repositories
    PatientRepository: asClass(PatientRepository).singleton(),
    PersonalRepository: asClass(PersonalRepository).singleton()
});

module.exports = container;