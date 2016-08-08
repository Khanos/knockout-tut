/// <reference path="../node_modules/knockout/build/output/knockout-latest.js" />
$(function() {
    var viewModel = {
        firstName: ko.observable("John")
    };
    ko.applyBindings(viewModel);
})