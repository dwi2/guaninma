(function(exports) {
  'use strict';

  var emit = function(evt, detail) {
    self.port.emit(evt, detail);
  };

  var scan = function() {
    var latestRevisionSection =
      document.querySelector('ng-view.ng-scope > div:nth-child(2)');
    var revisionElem =
      latestRevisionSection.querySelector('span.revision-text');
    var revision = revisionElem ? revisionElem.textContent : 'unknown';
    emit('message', revision);

    var gijAllSelector = 'span.job-btn[title^="Gaia JS Integration Test"]';
    var gijFailedSelector =
      'span.job-btn.btn-orange[title^="Gaia JS Integration Test"] ' +
      'span.job-btn.btn-purple[title^="Gaia JS Integration Test"] ' +
      'span.job-btn.btn-black[title^="Gaia JS Integration Test"] ' +
      'span.job-btn.btn-red[title^="Gaia JS Integration Test"] ';
    var gijAllElements = latestRevisionSection.querySelectorAll(gijAllSelector);
    var gijFailedElements = latestRevisionSection.querySelectorAll(gijFailedSelector);
    emit('message',
      'got ' + gijAllElements.length + ' jobs, ' +
      'failed jobs: ' + gijFailedElements.length);
    // TODO:
  };

  exports.addEventListener("load", function() {
    emit('loaded');
    scan();
  });

}(window));
