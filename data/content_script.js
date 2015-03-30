(function(exports) {
  'use strict';

  var emit = function(evt, detail) {
    self.port.emit(evt, detail);
  };

  var scan = function() {
    var latestSelector = 'ng-view.ng-scope:ed';
    var revision = document.querySelector('');

    var gijSelector =
      'span.job-group[title="Gaia JS Integration Test"] + span.job-group-list' +
      ' > span.job-btn';
    var gijElements = document.querySelectorAll(gijSelector);
    emit('message', 'got ' + gijElements.length + ' jobs');
    // TODO:
  };

  exports.addEventListener("load", function() {
    emit('loaded');
    scan();
  });

}(window));
