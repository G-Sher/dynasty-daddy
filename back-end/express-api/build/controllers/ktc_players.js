"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHistoricalPlayerValueById = exports.getCurrentPlayerValues = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../models/model"));

var playersModel = new _model["default"]('ktc_players');

var getCurrentPlayerValues = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return playersModel.selectSubQuery('*', '(\n' + '    select distinct on (name_id) * \n' + '    from ktc_players \n' + '    order by name_id, id desc \n' + ') as T \n' + '  order by sf_trade_value desc  ');

          case 3:
            data = _context.sent;
            // let data = await playersModel.select('*', ' WHERE date::date = now()::date order by sf_trade_value desc ');
            // if (data.rows.length === 0) {
            //   data = await playersModel.select('*', ' WHERE date::date = (NOW() - interval \'1 day\')::date order by sf_trade_value desc ');
            // }
            res.status(200).json(data.rows);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(405).json(_context.t0.stack);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getCurrentPlayerValues(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCurrentPlayerValues = getCurrentPlayerValues;

var getHistoricalPlayerValueById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return playersModel.select('*', " WHERE name_id = '".concat(id, "'"));

          case 4:
            data = _context2.sent;
            res.status(200).json(data.rows);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(405).json(_context2.t0.stack);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getHistoricalPlayerValueById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getHistoricalPlayerValueById = getHistoricalPlayerValueById;