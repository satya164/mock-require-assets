module.exports = function mockRegex(regex) {
  var module = require('module');
  var originalLoader = module._load;

  module._load = function hookedLoader(request, parent, isMain) {
    if (request.match(regex)) {
      return { uri: request };
    }

    return originalLoader(request, parent, isMain);
  };
};
