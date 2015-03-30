var pageWorker = require('sdk/page-worker');
var notifications = require('sdk/notifications');
var self = require("sdk/self");

function run() {

  var URL = 'https://treeherder.mozilla.org/#/jobs?repo=mozilla-b2g37_v2_2';

  var worker = pageWorker.Page({
    contentScriptFile: self.data.url('content_script.js'),
    contentURL: URL
  });

  worker.port.on('loaded', function() {
    console.log(URL + ' loaded');
    notifications.notify({
      text: URL + ' loaded'
    });
  });

  worker.port.on('message', function(message) {
    console.log(message);
    notifications.notify({
      text: message
    });
  })

};

run();
