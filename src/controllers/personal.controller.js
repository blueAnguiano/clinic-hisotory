let _personalService = null;

class PersonalController {
    constructor({PersonalService}) {
        _personalService = PersonalService;
    }

}

module.exports = PersonalController;