"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertIntoTables = exports.createTables = exports.dropTables = exports.executeQueryArray = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pool = require("../models/pool");

var _queries = require("./queries");

var executeQueryArray = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(arr) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve) {
              var stop = arr.length;
              arr.forEach( /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(q, index) {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _pool.pool.query(q);

                        case 2:
                          if (index + 1 === stop) resolve();

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }());
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function executeQueryArray(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.executeQueryArray = executeQueryArray;

var dropTables = function dropTables() {
  return executeQueryArray([_queries.dropMessagesTable]);
};

exports.dropTables = dropTables;

var createTables = function createTables() {
  return executeQueryArray([_queries.createMessageTable]);
};

exports.createTables = createTables;

var insertIntoTables = function insertIntoTables() {
  return executeQueryArray([_queries.insertMessages]);
};

exports.insertIntoTables = insertIntoTables;