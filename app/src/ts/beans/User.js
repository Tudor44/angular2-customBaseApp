System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(name, surname, date, taxcode) {
                    this.name = name;
                    this.surname = surname;
                    this.date = date;
                    this.taxcode = taxcode;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=User.js.map