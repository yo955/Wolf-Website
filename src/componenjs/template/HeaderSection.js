"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Navbar = _interopRequireDefault(require("../Organisms/Navbar"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import Avatar from "../Atoms/Avatar";
function HeaderSection() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "headerSection"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "headerText"
  }, "Helping Brands to Stand", /*#__PURE__*/_react.default.createElement("br", null), "Out in The Digital Era"), /*#__PURE__*/_react.default.createElement("p", {
    className: "headerTextSmall"
  }, "We are here to create the best software product for", /*#__PURE__*/_react.default.createElement("br", null), "your business."), /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/Nav/islamAvatar.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, "Free 15-min call"))));
}
var _default = exports.default = HeaderSection;