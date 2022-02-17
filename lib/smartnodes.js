'use strict';

var Common = require('./common');
var dashcore = require('@dashevo/dashcore-lib');
var _ = dashcore.deps._;
var deprecatedMessage = 'This endpoint has been deprecated and will be replaced with a new endpoint compatible with the deterministic smartnode list introduced in v0.13';

function SmartnodeController(node) {
	this.node = node;
	this.common = new Common({log: this.node.log});
}

SmartnodeController.prototype.list = function(req, res) {
	res.jsonp(deprecatedMessage);
};

SmartnodeController.prototype.validate = function (req, res, next) {
	res.jsonp(deprecatedMessage);
};

SmartnodeController.prototype.getMNList = function(callback) {
	this.node.services.butd.getMNList(function(err, result){
		var MNList = result || [];
		if (err) {
			return callback(err);
		}
		callback(null,MNList);
	});
};

module.exports = SmartnodeController;
