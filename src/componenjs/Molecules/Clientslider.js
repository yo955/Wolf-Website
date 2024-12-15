"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("swiper/react");
var _modules = require("swiper/modules");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
var _Clientslid = _interopRequireDefault(require("../atoms/Clientslid"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/organisms/CardsSlider.js

var Clientslider = function Clientslider(_ref) {
  var cardsData = _ref.cardsData;
  return /*#__PURE__*/React.createElement("div", {
    className: "swiper-container-wrapper"
  }, /*#__PURE__*/React.createElement(_react.Swiper, {
    modules: [_modules.Navigation, _modules.Pagination],
    navigation: true,
    pagination: {
      clickable: true
    },
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    },
    className: "swiper-container"
  }, cardsData.map(function (product, index) {
    return /*#__PURE__*/React.createElement(_react.SwiperSlide, {
      key: index
    }, /*#__PURE__*/React.createElement(_Clientslid.default, {
      product: product
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "custom-pagination"
  }));
};
var _default = exports.default = Clientslider;