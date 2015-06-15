"use strict";

module.exports = {
  toSnakeCase: function every(str) {
    return str.replace(/[A-Z]+/g, function(match) {
      if (match.length > 1) {
        match = match.replace(/[A-Z]$/, function(m) {
          return "_" + m.toLowerCase();
        });
      }
      return "_" + match.toLowerCase();
    }).replace(/^_/, "");
  },

  setupCommands: function(commands, source, target) {
    var self = this;
    commands.forEach(function(command) {

      target[command] = function(val, structureId) {
        if (command === "structures") {
          return source;
        }
        var specialCmds = ["structureName", "deviceName"];
        var sId = structureId || target.structureId,
            res;

        if (specialCmds.indexOf(command) > -1 && target.type === "Nest") {
          return source[sId].name;
        }
        if (specialCmds.indexOf(command) > -1) {
          return source.name;
        }

        switch (target.type) {
          case "Nest":
            if (val && sId) {
              return target.write(self.toSnakeCase(command), val, sId);
            }

            sId = target.structureId || val;
            res = source[sId][self.toSnakeCase(command)];
            break;
          case "Thermostat":
          case "Protect":
            if (val) {
              return target.write(self.toSnakeCase(command), val);
            }
            res = source[self.toSnakeCase(command)];
            break;
        }
        return res;
      };

      target.commands[self.toSnakeCase(command)] = target[command];
    });
  }
};
