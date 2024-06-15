const {createContainer, asClass, asFunction, asValue} = require('awilix');

//config
const app = require('.');
const routes = require('../routes');
const config = require('../config');

//Service
const {
    ClinicService,
    HomeService,
    PatientService,
    PersonalService
} = require('../services');

//Controllers
const {
    ClinicController,
    HomeController,
    PatientController,
    PersonalController
} = require('../controllers');

//Routes
const {
    ClinicRoutes,
    HomeRoutes,
    PatientRoutes,
    PersonalRoutes,
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
const {
    ClinicRepository,
    PatientRepository,
    PersonalRepository
} = require('../repositories');

const container = createContainer();

console.log('Container');

console.log(`Hola Mundo`);

module.exports = container;

container.register({
    //Configuration
    app: asClass(app).singleton(),
    routes: asFunction(routes).singleton(),
    config: asValue(config),
    //Values
    Clinic: asValue(Clinic),
    // ClinicHistory: asValue(ClinicHistory),
    // Expedient: asValue(Expedient),
    // Hospital: asValue(Hospital),
    // OfficeClinic: asValue(OfficeClinic),
    // OfficeHospital: asValue(OfficeHospital),
    Patient: asValue(Patient),
    // PatientHospital: asValue(PatientHospital),
    Personal: asValue(Personal),
    // PersonalType: asValue(PersonalType),
    // Speciality: asValue(Speciality),
    //Services
    ClinicService: asClass(ClinicService).singleton(),
    HomeService: asClass(HomeService).singleton(),
    PatientService: asClass(PatientService).singleton(),
    PersonalService: asClass(PersonalService).singleton(),
    //Controllers
    ClinicController: asClass(ClinicController).singleton(),
    HomeController: asClass(HomeController).singleton(),
    PatientController: asClass(PatientController).singleton(),
    PersonalController: asClass(PersonalController).singleton(),
    //Routes
    ClinicRoutes: asFunction(ClinicRoutes).singleton(),
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    PatientRoutes: asFunction(PatientRoutes).singleton(),
    PersonalRoutes: asFunction(PersonalRoutes).singleton(),
    //Repositories
    ClinicRepository: asClass(ClinicRepository).singleton(),
    PatientRepository: asClass(PatientRepository).singleton(),
    PersonalRepository: asClass(PersonalRepository).singleton()
});
