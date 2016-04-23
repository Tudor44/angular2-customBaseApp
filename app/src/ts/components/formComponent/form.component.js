System.register(['angular2/core', 'angular2/common', '../../beans/User'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, User_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.name = new common_1.Control('', common_1.Validators.required);
                    this.surname = new common_1.Control('', common_1.Validators.required);
                    this.userForm = formBuilder.group({
                        name: this.name,
                        surname: this.surname,
                    });
                }
                FormComponent.prototype.doLogin = function (event) {
                    var user = new User_1.User(this.userForm.value.name, this.userForm.value.surname);
                    console.log(user);
                };
                FormComponent = __decorate([
                    core_1.Component({
                        selector: 'form',
                        templateUrl: '/app/src/ts/components/formComponent/form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map