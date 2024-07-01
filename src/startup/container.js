const {createContainer, asClass, asFunction, asValue} = require('awilix');

//config
const app = require('.');
const routes = require('../routes');
const config = require('../config');

//Service
const {
    ClinicService,
    ClinicHistoryService,
    ExpedientService,
    HomeService,
    HospitalService,
    OfficeClinicService,
    OfficeHospitalService,
    PatientService,
    PatientHospitalService,
    PersonalService,
    PersonalTypeService,
    SpecialtyService,
    UserService
} = require('../services');

//Controllers
const {
    ClinicController,
    ClinicHistoryController,
    ExpedientController,
    HomeController,
    HospitalController,
    OfficeClinicController,
    OfficeHospitalController,
    PatientController,
    PatientHospitalController,
    PersonalController,
    PersonalTypeController,
    SpecialtyController,
    UserController
} = require('../controllers');

//Routes
const {
    ClinicRoutes,
    ClinicHistoryRoutes,
    ExpedientRoutes,
    HomeRoutes,
    HospitalRoutes,
    OfficeClinicRoutes,
    OfficeHospitalRoutes,
    PatientRoutes,
    PatientHospitalRoutes,
    PersonalRoutes,
    PersonalTypeRoutes,
    SpecialtyRoutes,
    UserRoutes,
} = require('../routes/index.routes');

//Model
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
    Specialty,
    User
} = require('../models');

//Repositories
const {
    ClinicRepository,
    ClinicHistoryRepository,
    ExpedientRepository,
    HospitalRepository,
    PatientRepository,
    OfficeClinicRepository,
    OfficeHospitalRepository,
    PatientHospitalRepository,
    PersonalRepository,
    PersonalTypeRepository,
    SpecialtyRepository,
    UserRepository
} = require('../repositories');

const container = createContainer();

container.register({
    //config
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
    Specialty: asValue(Specialty),
    User: asValue(User),
    //Services
    ClinicService: asClass(ClinicService).singleton(),
    ClinicHistoryService: asClass(ClinicHistoryService).singleton(),
    ExpedientService: asClass(ExpedientService).singleton(),
    HomeService: asClass(HomeService).singleton(),
    HospitalService: asClass(HospitalService).singleton(),
    OfficeClinicService: asClass(OfficeClinicService).singleton(),
    OfficeHospitalService: asClass(OfficeHospitalService).singleton(),
    PatientService: asClass(PatientService).singleton(),
    PatientHospitalService: asClass(PatientHospitalService).singleton(),
    PersonalService: asClass(PersonalService).singleton(),
    PersonalTypeService: asClass(PersonalTypeService).singleton(),
    SpecialtyService: asClass(SpecialtyService).singleton(),
    UserService: asClass(UserService).singleton(),
    //Controllers
    ClinicController: asClass(ClinicController).singleton(),
    ClinicHistoryController: asClass(ClinicHistoryController).singleton(),
    ExpedientController: asClass(ExpedientController).singleton(),
    HomeController: asClass(HomeController).singleton(),
    HospitalController: asClass(HospitalController).singleton(),
    OfficeClinicController: asClass(OfficeClinicController).singleton(),
    OfficeHospitalController: asClass(OfficeHospitalController).singleton(),
    PatientController: asClass(PatientController).singleton(),
    PatientHospitalController: asClass(PatientHospitalController).singleton(),
    PersonalController: asClass(PersonalController).singleton(),
    PersonalTypeController: asClass(PersonalTypeController).singleton(),
    SpecialtyController: asClass(SpecialtyController).singleton(),
    UserController: asClass(UserController).singleton(),
    //Repository
    ClinicRepository: asClass(ClinicRepository).singleton(),
    ClinicHistoryRepository: asClass(ClinicHistoryRepository).singleton(),
    ExpedientRepository: asClass(ExpedientRepository).singleton(),
    HospitalRepository: asClass(HospitalRepository).singleton(),
    OfficeClinicRepository: asClass(OfficeClinicRepository).singleton(),
    OfficeHospitalRepository: asClass(OfficeHospitalRepository).singleton(),
    PatientRepository: asClass(PatientRepository).singleton(),
    PatientHospitalRepository: asClass(PatientHospitalRepository).singleton(),
    PersonalRepository: asClass(PersonalRepository).singleton(),
    PersonalTypeRepository: asClass(PersonalTypeRepository).singleton(),
    SpecialtyRepository: asClass(SpecialtyRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
    //Routes
    ClinicRoutes: asFunction(ClinicRoutes).singleton(),
    ClinicHistoryRoutes: asFunction(ClinicHistoryRoutes).singleton(),
    ExpedientRoutes: asFunction(ExpedientRoutes).singleton(),
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    HospitalRoutes: asFunction(HospitalRoutes).singleton(),
    OfficeClinicRoutes: asFunction(OfficeClinicRoutes).singleton(),
    OfficeHospitalRoutes: asFunction(OfficeHospitalRoutes).singleton(),
    PatientRoutes: asFunction(PatientRoutes).singleton(),
    PatientHospitalRoutes: asFunction(PatientHospitalRoutes).singleton(),
    PersonalRoutes: asFunction(PersonalRoutes).singleton(),
    PersonalTypeRoutes: asFunction(PersonalTypeRoutes).singleton(),
    SpecialtyRoutes: asFunction(SpecialtyRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
});

module.exports = container;