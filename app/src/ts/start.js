System.register(['angular2/platform/browser', './components/indexComponent/index.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, index_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            }],
        execute: function() {
            //import {enableProdMode} from 'angular2/core';
            //enableProdMode();
            browser_1.bootstrap(index_component_1.IndexComponent);
        }
    }
});
//# sourceMappingURL=start.js.map