webpackJsonp([5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__offers_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__offers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__offers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { offers: __WEBPACK_IMPORTED_MODULE_0__offers_vue___default.a },
    computed: {
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        }
    }
});

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(107)
/* template */
var __vue_template__ = __webpack_require__(108)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/home/offers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fc9b500", Component.options)
  } else {
    hotAPI.reload("data-v-2fc9b500", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        offers: function offers() {
            return this.$store.getters.getOffers;
        },
        categories: function categories() {
            return this.$store.getters.getCategories;
        }
    },
    methods: {
        getUrl: function getUrl(product) {
            var category = this.categories.find(function (c) {
                return c.id === product.category_id;
            });

            var res = category.slug + '/' + product.slug;
            res = res.replace('//', '/');

            return res;
        }
    }
});

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-12" },
    _vm._l(_vm.offers, function(product) {
      return _c(
        "div",
        { key: product.id },
        [
          _c("router-link", { attrs: { to: _vm.getUrl(product) } }, [
            _vm._v("\n            " + _vm._s(product.name) + "\n        ")
          ])
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2fc9b500", module.exports)
  }
}

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v("HOME")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [_c("offers")], 1),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "d-flex flex-column" },
      _vm._l(_vm.categories, function(category) {
        return _c(
          "router-link",
          { key: category.id, attrs: { to: category.slug } },
          [_vm._v("\n           " + _vm._s(category.name) + "\n       ")]
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a7dd8a8", module.exports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(105)
/* template */
var __vue_template__ = __webpack_require__(109)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/home/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a7dd8a8", Component.options)
  } else {
    hotAPI.reload("data-v-3a7dd8a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});