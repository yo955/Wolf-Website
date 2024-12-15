"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("swiper/react");
var _Card = _interopRequireDefault(require("@mui/joy/Card"));
var _CardContent = _interopRequireDefault(require("@mui/joy/CardContent"));
var _Typography = _interopRequireDefault(require("@mui/joy/Typography"));
var _Rating = _interopRequireDefault(require("@mui/material/Rating"));
var _Star = _interopRequireDefault(require("@mui/icons-material/Star"));
require("swiper/css");
require("swiper/css/pagination");
require("swiper/css/autoplay");
var _modules = require("swiper/modules");
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _image = _interopRequireDefault(require("next/image"));
var _cardData = _interopRequireDefault(require("../../data/cardData"));
var _Text = _interopRequireDefault(require("../Atoms/Text"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import Swiper React components

// Import required components

// Import Swiper styles

// Import required modules

var labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};
function Home() {
  var value = 3.5;
  return /*#__PURE__*/_react.default.createElement(_Container.default, {
    sx: {
      mt: 10,
      mb: 20
    },
    className: "con"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    text: /*#__PURE__*/_react.default.createElement("div", {
      className: "pairenttextclients"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "textListen"
    }, "Don\u2019t Just Listen to\xA0Us"), /*#__PURE__*/_react.default.createElement("span", {
      className: "textclients"
    }, "what our clients are saying")),
    className: "textListen"
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "pagination"
  }), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    slidesPerView: 1,
    spaceBetween: 10
    // pagination={{
    //   el: "#pagination",
    //   clickable: true,
    // }}
    ,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    },
    modules: [_modules.Pagination, _modules.Autoplay],
    autoplay: {
      delay: 100,
      // فترة الانتظار بين الانتقالات
      disableOnInteraction: false // يستمر التشغيل بعد التفاعل
    },
    speed: 2000 // سرعة الانتقال بين الشرائح
    ,
    loop: true // التمرير بشكل دائري
    ,
    className: "mySwiper"
  }, _cardData.default.map(function (e, index) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: index
    }, /*#__PURE__*/_react.default.createElement(_Card.default, {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement(_CardContent.default, {
      sx: {
        alignItems: "center",
        textAlign: "center"
      }
    }, /*#__PURE__*/_react.default.createElement(_image.default, {
      src: e.photo,
      alt: "image",
      width: 40,
      height: 40,
      style: {
        borderRadius: "50%"
      }
    }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      level: "body-sm",
      sx: {
        maxWidth: "24ch"
      }
    }, e.description), /*#__PURE__*/_react.default.createElement(_Rating.default, {
      name: "text-feedback",
      value: value,
      readOnly: true,
      precision: 5,
      emptyIcon: /*#__PURE__*/_react.default.createElement(_Star.default, {
        style: {
          opacity: 0.55
        },
        fontSize: "inherit"
      })
    }))));
  })));
}