"use strict";

var Adaptor = lib("adaptor");

var Cylon = require("cylon");

describe("Cylon.Adaptors.Nest", function() {
  var adaptor;

  beforeEach(function() {
    adaptor = new Adaptor({
      accessToken: "accessToken"
    });
  });

  it("is an instance of Cylon.Adaptor", function() {
    expect(adaptor).to.be.an.instanceOf(Adaptor);
    expect(adaptor).to.be.an.instanceOf(Cylon.Adaptor);
  });

  describe("#connect", function() {
    var fb, callback;

    beforeEach(function() {
      fb = { authWithCustomToken: stub().yields() };
      callback = spy();

      adaptor.firebase = stub().returns(fb);
      adaptor.defineAdaptorEvent = stub();

      adaptor.connect(callback);
    });

    it("creates a new Firebase instance", function() {
      expect(adaptor.firebase).to.be.called;
    });

    it("tells the Firebase instance to auth", function() {
      expect(fb.authWithCustomToken).to.be.calledWith("accessToken");
    });

    it("triggers the callback", function() {
      expect(callback).to.be.called;
    });
  });
});
