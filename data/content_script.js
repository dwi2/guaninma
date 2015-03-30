(function(exports) {
  'use strict';

  var emit = function(evt, detail) {
    self.port.emit(evt, detail);
  };

  var scan = function() {
    var revisionElem =
      document.querySelector('ng-view.ng-scope > div:nth-child(2) span.revision-text');
    var revision = revisionElem ? revisionElem.textContent : 'unknown';
    emit('message', revision);

    var gijSelector =
      'ng-view.ng-scope > div:nth-child(2) ' +
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
