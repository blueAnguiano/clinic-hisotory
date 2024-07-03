const express = require("express");

//Middlewares
const cors = require("cors");
const helmet = require('helmet');
const compression = require('compression');

module.exports = function ({
                               ClinicRoutes,
                               ClinicHistoryRoutes,
                               ExpedientRoutes,
                               HomeRoutes,
                               HospitalRoutes,
                               PatientRoutes,
                               OfficeClinicRoutes,
                               OfficeHospitalRoutes,
                               PatientHospitalRoutes,
                               PersonalRoutes,
                               PersonalTypeRoutes,
                               SpecialtyRoutes,
                               UserRoutes
                           }) {
    const router = express.Router();
    const api = express.Router();

    api
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());


    api.use('/clinics/history', ClinicHistoryRoutes);
    api.use('/clinics', ClinicRoutes);
    api.use('/expedient', ExpedientRoutes);
    api.use('/home', HomeRoutes);
    api.use('/hospitals', HospitalRoutes);
    api.use('/patients/hospital', PatientHospitalRoutes);
    api.use('/patients', PatientRoutes);
    api.use('/office/clinic', OfficeClinicRoutes); //todo: review this paths
    api.use('/office/hospital', OfficeHospitalRoutes); //todo: review this paths
    api.use('/perosnals/type', PersonalTypeRoutes);
    api.use('/perosnals/specialty', SpecialtyRoutes);
    api.use('/perosnals', PersonalRoutes);
    api.use('/user', UserRoutes);


    router.use('/v1/api', api);

    return router;
}