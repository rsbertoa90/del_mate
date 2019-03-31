webpackJsonp([0],Array(84).concat([
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(94)
/* template */
var __vue_template__ = __webpack_require__(120)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-731ed9d6"
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
Component.options.__file = "resources/assets/js/components/cotizer/Cotizer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-731ed9d6", Component.options)
  } else {
    hotAPI.reload("data-v-731ed9d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8a658236", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.table[data-v-731ed9d6], .accordion[data-v-731ed9d6], .tr[data-v-731ed9d6], .td[data-v-731ed9d6], .kalam[data-v-731ed9d6], .card[data-v-731ed9d6] {\n  font-family: 'Kalam', cursive;\n}\n.white-space-normal[data-v-731ed9d6] {\n  white-space: normal;\n}\n.text-big[data-v-731ed9d6] {\n  font-size: 1.5rem;\n}\n.product-miniature[data-v-731ed9d6] {\n  min-width: 200px;\n  width: 200px;\n  margin-right: 15px;\n}\n.container[data-v-731ed9d6] {\n  margin-bottom: 100px;\n}\ntd[data-v-731ed9d6] {\n  white-space: normal;\n}\ninput[type=\"number\"][data-v-731ed9d6] {\n  width: 70px;\n}\n.btn-link[data-v-731ed9d6] {\n  color: black;\n}\n#total[data-v-731ed9d6] {\n  position: fixed;\n  /* margin-left:50vw; */\n  bottom: 20px;\n  z-index: 200;\n}\nimg[data-v-731ed9d6] {\n  width: 100%;\n}\n.total-bg[data-v-731ed9d6] {\n  background-color: #0FE0E8;\n}\n@media (max-width: 600px) {\n.product-miniature[data-v-731ed9d6] {\n    min-width: 100px;\n}\n.card-header[data-v-731ed9d6] {\n    padding: 0;\n}\n.container[data-v-731ed9d6] {\n    margin-left: -7%;\n    width: 100vw;\n    padding: 15px;\n}\n.sampleImage[data-v-731ed9d6] {\n    width: 80px;\n}\ntd[data-v-731ed9d6] {\n    white-space: normal;\n}\ntable[data-v-731ed9d6] {\n    font-size: 0.66rem;\n    font-weight: bold;\n}\n.card-body[data-v-731ed9d6], table th[data-v-731ed9d6], table td[data-v-731ed9d6] {\n    padding: 5px;\n}\n}\n@media (min-width: 600px) {\n.sampleImage[data-v-731ed9d6] {\n    width: 150px;\n}\ntable[data-v-731ed9d6] {\n    font-size: 1rem;\n    font-weight: normal;\n}\ntd[data-v-731ed9d6] {\n    white-space: normal;\n}\n.card-body[data-v-731ed9d6], .container[data-v-731ed9d6] {\n    padding: 1.25rem;\n}\n.total-bg[data-v-731ed9d6] {\n    font-size: 1.3rem;\n}\n}\n", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CotizerProductCard_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CotizerProductCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CotizerProductCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_selector_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_selector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__code_selector_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cotizer_form_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cotizer_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Cotizer_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedido_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedido_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pedido_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorial_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tutorial_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    components: { cotizerForm: __WEBPACK_IMPORTED_MODULE_3__Cotizer_form_vue___default.a, pedido: __WEBPACK_IMPORTED_MODULE_4__pedido_vue___default.a, tutorial: __WEBPACK_IMPORTED_MODULE_5__tutorial_vue___default.a, cotizerProductcard: __WEBPACK_IMPORTED_MODULE_1__CotizerProductCard_vue___default.a, codeSelector: __WEBPACK_IMPORTED_MODULE_2__code_selector_vue___default.a },
    metaInfo: function metaInfo() {
        return {
            title: this.meta ? this.meta.title : 'Mayorista del Mate'

        };
    },
    data: function data() {
        return {
            selector: {
                code: '',
                name: '',
                variant: null,
                units: 0
            },

            list: []

        };
    },


    watch: {
        'selector.code': function selectorCode() {
            var vm = this;
            var res = false;
            this.categories.forEach(function (cat) {
                cat.products.forEach(function (product) {
                    if (vm.selector.code == product.code) {
                        vm.selector.product = product;
                        vm.selector.name = product.name;
                        res = true;
                    }
                });
            });
            if (!res) {
                vm.selector.product = null;
                vm.selector.name = '';
            }
        },
        total: function total() {
            var result = [];
            var vm = this;

            vm.categories.forEach(function (cat) {
                var prods = cat.products.filter(function (p) {
                    return p.units != null & p.units > 0;
                });
                if (prods.length > 0) {
                    result.push(prods);
                }
            });

            vm.list = [].concat.apply([], result);
        }
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        categories: 'getCategories',
        user: 'getUser',
        configs: 'getConfig',
        allmeta: 'getMeta'
    }), {
        meta: function meta() {
            if (this.allmeta) return this.allmeta.find(function (m) {
                return m.page == 'cotizer';
            });
        },
        total: function total() {
            if (this.categories) {

                var vm = this;
                var tot = 0;
                vm.categories.forEach(function (cat) {

                    cat.products.forEach(function (product) {

                        if (product.units > 0) {

                            tot += product.price * product.units;
                        }
                    });
                });
                return tot;
            }
        }
    }),

    methods: {
        listChange: function listChange(event) {

            var variant = this.list.find(function (vari) {
                return vari.id == event.id;
            });
            if (variant) {
                variant.units = event.units;
            }
        },
        addSelectorvariant: function addSelectorvariant() {
            var vm = this;
            if (vm.selector.units > 0 && vm.selector.variant != null) {
                var prod = this.selector.variant;
                if (prod.units == undefined) {
                    Vue.set(prod, 'units', 0);
                }
                prod.units = this.selector.units;
                vm.selector.variant = null;
                vm.selector.code = '';
                vm.selector.units = 0;
                vm.selector.name = '';
            }
        }
    }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(98)
/* template */
var __vue_template__ = __webpack_require__(99)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dc1994ce"
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
Component.options.__file = "resources/assets/js/components/cotizer/CotizerProductCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc1994ce", Component.options)
  } else {
    hotAPI.reload("data-v-dc1994ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5e14484c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc1994ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CotizerProductCard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc1994ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CotizerProductCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.product-card[data-v-dc1994ce] {\n  border: 1px solid #ccc;\n  padding: 15px;\n}\n.image-container[data-v-dc1994ce] {\n  overflow: hidden;\n  position: relative;\n  /*   border:1px solid #ccc; */\n  padding: 15px;\n  cursor: pointer;\n}\n.image-container .image[data-v-dc1994ce] {\n    width: 100%;\n}\n.quiero[data-v-dc1994ce] {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n.quiero-input[data-v-dc1994ce] {\n  border: 1px solid #000;\n}\n.price-overlay[data-v-dc1994ce] {\n  position: absolute;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  background-color: #111;\n  color: #fff;\n  font-size: 2rem;\n}\n.title[data-v-dc1994ce] {\n  font-size: 2rem;\n}\n.position-absolute[data-v-dc1994ce] {\n  position: absolute;\n}\n.overlay[data-v-dc1994ce] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 15px;\n  z-index: 50;\n}\n.square[data-v-dc1994ce] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n.selected-square[data-v-dc1994ce] {\n  border: 2px solid blue;\n}\n\n/* .image:hover{\n            transform: scale(1.2);\n            transition: all 1s;\n    } */\n.price-badge[data-v-dc1994ce] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  background-color: #aaaa;\n  color: #fff;\n  font-weight: bold;\n  padding: 10px;\n  font-size: 1.5rem;\n  border-radius: 10%;\n}\n.name-banner[data-v-dc1994ce] {\n  position: absolute;\n  bottom: 25%;\n  left: 0px;\n  display: block;\n  width: 100%;\n  background-color: #ccc8;\n  color: #fff;\n  font-weight: bold;\n  padding: 10px;\n  font-size: 2rem;\n  text-align: center;\n  white-space: normal;\n}\n", ""]);

// exports


/***/ }),
/* 98 */
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['product'],
    data: function data() {
        return {

            image: null,
            hovered: false,
            transition: true
        };
    },

    computed: {
        config: function config() {
            return this.$store.getters.getConfig;
        }
    }

});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.product
    ? _c("div", [
        _vm.product
          ? _c("div", { staticClass: "product-card" }, [
              _c(
                "div",
                { staticClass: "d-flex justify-content-center text-center" },
                [
                  _c("span", { staticClass: "text-center title" }, [
                    _vm._v(
                      " " + _vm._s(_vm._f("ucFirst")(_vm.product.name)) + " "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "image-container" },
                [
                  _vm.product.images[0]
                    ? _c("v-lazy-image", {
                        staticClass: "image",
                        attrs: {
                          src: _vm.product.images[0].url,
                          alt: _vm.product.name
                        }
                      })
                    : _c("v-lazy-image", {
                        staticClass: "image",
                        attrs: {
                          src: "/storage/images/app/no-image.png",
                          alt: _vm.product.name
                        }
                      }),
                  _vm._v(" "),
                  _vm.config && !_vm.config.hide_prices
                    ? _c("div", { staticClass: "price-overlay" }, [
                        _c("span", [
                          _vm._v(
                            " $" +
                              _vm._s(_vm._f("price")(_vm.product.price)) +
                              " "
                          )
                        ])
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("label", { staticClass: "col-4 quiero" }, [
                  _vm._v("Quiero")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.product.units,
                      expression: "product.units"
                    }
                  ],
                  staticClass: "form-control col-7 quiero-input ",
                  attrs: { type: "number", min: "0" },
                  domProps: { value: _vm.product.units },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.product, "units", $event.target.value)
                    }
                  }
                })
              ])
            ])
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dc1994ce", module.exports)
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(103)
/* template */
var __vue_template__ = __webpack_require__(104)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74ba080f"
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
Component.options.__file = "resources/assets/js/components/cotizer/code-selector.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74ba080f", Component.options)
  } else {
    hotAPI.reload("data-v-74ba080f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("509ba448", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74ba080f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./code-selector.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74ba080f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./code-selector.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.square[data-v-74ba080f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n.variants-clicker[data-v-74ba080f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.selected[data-v-74ba080f] {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  border: 2px solid blue;\n}\n", ""]);

// exports


/***/ }),
/* 103 */
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
    props: ['list', 'products'],
    data: function data() {
        return {
            newitemcode: '',
            selectedvariant: null,
            qty: 1
        };
    },

    computed: {
        selected: function selected() {
            var _this = this;

            var res = this.products.find(function (prod) {
                return prod.code.trim() == _this.newitemcode.trim();
            });

            if (res) {
                this.selectedvariant = res.variants[0];
                return res;
            }
        }
    },
    methods: {
        add: function add() {
            this.selectedvariant.units = this.qty;
            this.list.push(this.selectedvariant);

            this.qty = 1;

            this.newitemcode = '';
        }
    }

});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row w-100 mt-3" }, [
    _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.newitemcode,
            expression: "newitemcode"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Codigo" },
        domProps: { value: _vm.newitemcode },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.newitemcode = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm.selected
      ? _c("div", { staticClass: "col-12 col-lg-3 d-flex" }, [
          _c("span", [
            _vm._v(" " + _vm._s(_vm.selected.name) + " "),
            _vm.selectedvariant
              ? _c("span", [
                  _vm._v(" " + _vm._s(_vm.selectedvariant.name) + " ")
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "variants-clicker d-flex ml-2" },
            _vm._l(_vm.selected.variants, function(variant) {
              return _c("span", {
                key: variant.id,
                staticClass: "square",
                class: { selected: variant.id == _vm.selectedvariant.id },
                style: { backgroundColor: variant.color_code },
                on: {
                  click: function($event) {
                    _vm.selectedvariant = variant
                  }
                }
              })
            })
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.selected
      ? _c("div", { staticClass: "col-12 col-lg-4 d-flex" }, [
          _c(
            "button",
            {
              staticClass: "btn bnt-sm btn-info",
              on: {
                click: function($event) {
                  _vm.qty--
                }
              }
            },
            [_vm._v(" - ")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.qty,
                expression: "qty"
              }
            ],
            staticClass: "form-control",
            staticStyle: { width: "90px" },
            attrs: { type: "number", min: "0" },
            domProps: { value: _vm.qty },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.qty = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn bnt-sm btn-info",
              on: {
                click: function($event) {
                  _vm.qty++
                }
              }
            },
            [_vm._v(" + ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm ml-3 btn-success",
              on: { click: _vm.add }
            },
            [_vm._v("Agregar")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74ba080f", module.exports)
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(109)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54f6f00b"
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
Component.options.__file = "resources/assets/js/components/cotizer/Cotizer-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54f6f00b", Component.options)
  } else {
    hotAPI.reload("data-v-54f6f00b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("132e5b92", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer-form.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.kalam[data-v-54f6f00b] {\n  font-family: 'Kalam', cursive;\n}\n.loader[data-v-54f6f00b] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 110;\n  background-color: #ddddddaa;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  padding-top: 5%;\n}\n.warn[data-v-54f6f00b] {\n  font-size: 0.9rem;\n  color: red;\n  font-style: italic;\n}\n", ""]);

// exports


/***/ }),
/* 108 */
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
    props: {
        list: { default: [] },
        total: { default: 0 }
    },

    data: function data() {
        return {
            state: null,
            loading: false,
            formData: {
                shipping: true,
                cp: '',
                address: '',
                transport: '',
                city_id: null,
                message: '',
                phone: '',
                email: '',
                client: '',
                seller: ''
            }

        };
    },

    computed: {
        config: function config() {
            return this.$store.getters.getConfig;
        },
        minBuy: function minBuy() {
            if (this.config) {
                if (this.formData.shipping) {
                    return this.config.minbuy_ship;
                } else {
                    return this.config.minbuy;
                }
            }
        },
        user: function user() {
            return this.$store.getters.getUser;
        },
        states: function states() {
            return this.$store.getters.getStates;
        }
    },

    methods: {
        formValid: function formValid() {
            if (!this.formData.client || this.formData.client.trim() == '') {
                swal('El campo "Nombre y Apellido" es obligatorio ', '', 'error');
                return false;
            } else if (this.formData.email.length < 4 && this.user.role_id > 2) {
                swal('Hay algo mal con el mail', '', 'error');
                return false;
            } else if (this.list.length <= 0) {
                swal('No hay productos seleccionados', '', 'error');
                return false;
            } else if (this.total < this.minBuy) {
                swal('El minimo de compra es de $' + this.minBuy, '', 'error');
                return false;
            } else {
                return true;
            }
        },
        send: function send() {
            if (this.formValid()) {

                var data = this.formData;
                data.list = JSON.stringify(this.list);
                data.total = this.total;
                if (data.shipping) {
                    data.shipping = 1;
                } else {
                    data.shipping = 0;
                }

                var vm = this;
                vm.loading = true;
                $.ajax({
                    method: 'post',
                    data: data,
                    url: '/cotizer/send',
                    success: function success(r) {
                        /*   console.log(r); */
                        if (vm.user.role_id > 2) {
                            swal('Enviamos tu presupuesto', 'Te estaremos contactando a la brevedad', 'success').then(function (confirm) {
                                window.location.replace('/');
                            });
                        } else {
                            swal('Orden guardada', 'Revisa el panel de administracion de ordenes', 'success').then(function (confirm) {
                                window.location.replace('/admin/cotizador');
                            });
                        }
                    }
                });
            }
        }
    }
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.user
    ? _c("div", { staticClass: "kalam" }, [
        _vm.loading
          ? _c(
              "div",
              { staticClass: "loader" },
              [
                _c("fade-loader", {
                  attrs: { loading: _vm.loading, size: "200px" }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("h5", [_vm._v("Envianos tu pedido")]),
        _vm._v(" "),
        _c("p", [_vm._v("Recibiras confirmacion de tu presupuesto por email")]),
        _vm._v(" "),
        _c("form", { staticClass: "col-12", attrs: { id: "form" } }, [
          _c("div", { staticClass: "col-12 row form-group-row mb-3" }, [
            _c("div", { staticClass: "col-12 col-lg-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.shipping,
                    expression: "formData.shipping"
                  }
                ],
                attrs: { type: "radio" },
                domProps: {
                  value: false,
                  checked: _vm._q(_vm.formData.shipping, false)
                },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.formData, "shipping", false)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "text-secondary radioText",
                  class: { "text-success": !_vm.formData.shipping },
                  on: {
                    click: function($event) {
                      _vm.formData.shipping = false
                    }
                  }
                },
                [
                  _c("span", { staticClass: "fa fa-building" }),
                  _vm._v(" Retiro en el local\n                 ")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row mb-3" }, [
            _c("div", { staticClass: "col-12 col-lg-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.shipping,
                    expression: "formData.shipping"
                  }
                ],
                attrs: { type: "radio" },
                domProps: {
                  value: true,
                  checked: _vm._q(_vm.formData.shipping, true)
                },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.formData, "shipping", true)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "text-secondary radioText",
                  class: { "text-success": _vm.formData.shipping },
                  on: {
                    click: function($event) {
                      _vm.formData.shipping = true
                    }
                  }
                },
                [
                  _c("span", { staticClass: "fa fa-truck" }),
                  _vm._v(" Envio por transporte\n                ")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          !_vm.formData.shipping
            ? _c("span", { staticClass: "warn" }, [
                _vm._v("*Los retiros presenciales son en Pasteur 410 - CABA ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("span", { staticClass: "warn" }, [
            _vm._v("*Los precios no incluyen IVA")
          ]),
          _vm._v(" "),
          _vm.user.role_id > 2
            ? _c("div", { staticClass: "col-12 row form-group-row mb-3" }, [
                !_vm.formData.shipping
                  ? _c("span", { staticClass: " warn" }, [
                      _vm._v(
                        "*El minimo de compra es de $" +
                          _vm._s(_vm.minBuy) +
                          " "
                      )
                    ])
                  : _c("span", { staticClass: " warn" }, [
                      _vm._v(
                        "*El minimo de compra para envíos es de $" +
                          _vm._s(_vm.minBuy) +
                          " "
                      )
                    ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row" }, [
            _c("label", { staticClass: "col-4 col-lg-4", attrs: { for: "" } }, [
              _vm._v("Nombre y Apellido "),
              _vm.user.role_id < 3
                ? _c("span", [_vm._v(" (cliente) ")])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.client,
                  expression: "formData.client"
                }
              ],
              staticClass: "form-control col-8 col-lg-4",
              attrs: { required: "", type: "text" },
              domProps: { value: _vm.formData.client },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "client", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm.user.role_id < 3
            ? _c("div", { staticClass: "col-12 row form-group-row" }, [
                _c(
                  "label",
                  { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                  [_vm._v("Nombre del vendedor")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formData.seller,
                      expression: "formData.seller"
                    }
                  ],
                  staticClass: "form-control col-8 col-lg-4",
                  attrs: { required: "", type: "text" },
                  domProps: { value: _vm.formData.seller },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.formData, "seller", $event.target.value)
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.formData.shipping
            ? _c("div", [
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Provincia ")]
                  ),
                  _vm._v(" "),
                  _vm.states.length > 0
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.state,
                              expression: "state"
                            }
                          ],
                          staticClass: "form-control col-8 col-lg-4",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.state = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        _vm._l(_vm.states, function(opt) {
                          return _c(
                            "option",
                            { key: opt.id, domProps: { value: opt } },
                            [
                              _vm._v(
                                " \n                            " +
                                  _vm._s(opt.name) +
                                  "\n                        "
                              )
                            ]
                          )
                        })
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Ciudad ")]
                  ),
                  _vm._v(" "),
                  _vm.state
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.city_id,
                              expression: "formData.city_id"
                            }
                          ],
                          staticClass: "form-control col-8 col-lg-4",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.formData,
                                "city_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.state.cities, function(opt) {
                          return _c(
                            "option",
                            { key: opt.id, domProps: { value: opt.id } },
                            [
                              _vm._v(
                                " \n                            " +
                                  _vm._s(opt.name) +
                                  "\n                        "
                              )
                            ]
                          )
                        })
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Direccion ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.address,
                        expression: "formData.address"
                      }
                    ],
                    staticClass: "form-control col-8 col-lg-4",
                    attrs: { type: "text" },
                    domProps: { value: _vm.formData.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "address", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Transporte ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.transport,
                        expression: "formData.transport"
                      }
                    ],
                    staticClass: "form-control col-8 col-lg-4",
                    attrs: { type: "text" },
                    domProps: { value: _vm.formData.transport },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "transport", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Codigo Postal ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.cp,
                        expression: "formData.cp"
                      }
                    ],
                    staticClass: "form-control col-8 col-lg-4",
                    attrs: { type: "text" },
                    domProps: { value: _vm.formData.cp },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "cp", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row" }, [
            _c("label", { staticClass: "col-4 col-lg-4", attrs: { for: "" } }, [
              _vm._v("Email")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.email,
                  expression: "formData.email"
                }
              ],
              staticClass: "form-control col-8 col-lg-4",
              attrs: { required: _vm.user.role_id > 2, type: "email" },
              domProps: { value: _vm.formData.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "email", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row" }, [
            _c("label", { staticClass: "col-4 col-lg-4", attrs: { for: "" } }, [
              _vm._v("Telefono")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.phone,
                  expression: "formData.phone"
                }
              ],
              staticClass: "form-control col-8 col-lg-4",
              attrs: { type: "text" },
              domProps: { value: _vm.formData.phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "phone", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row" }, [
            _c("label", { staticClass: "col-4 col-lg-4", attrs: { for: "" } }, [
              _vm._v("Mensaje")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.message,
                  expression: "formData.message"
                }
              ],
              staticClass: "form-control col-8 col-lg-4",
              attrs: { name: "message" },
              domProps: { value: _vm.formData.message },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "message", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button btn-lg btn-outline-success offset-2 mt-2",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  $event.stopPropagation()
                  return _vm.send($event)
                }
              }
            },
            [_vm._v("\n                    Enviar\n            ")]
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54f6f00b", module.exports)
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(113)
/* template */
var __vue_template__ = __webpack_require__(114)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ae5e525"
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
Component.options.__file = "resources/assets/js/components/cotizer/pedido.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ae5e525", Component.options)
  } else {
    hotAPI.reload("data-v-0ae5e525", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("98448f24", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pedido.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pedido.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.table[data-v-0ae5e525],.accordion[data-v-0ae5e525],.tr[data-v-0ae5e525],.td[data-v-0ae5e525],.kalam[data-v-0ae5e525],.card[data-v-0ae5e525]{\n    font-family:  'Kalam', cursive;\n}\n.table[data-v-0ae5e525]{\n        font-size:0.8rem;\n}\n@media(min-width:600px)\n    {\n.table[data-v-0ae5e525]{font-size:2rem;\n}\n}\n", ""]);

// exports


/***/ }),
/* 113 */
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['list'],
    methods: {
        del: function del(variant) {
            variant.units = 0;
        }
    }
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.list && _vm.list.length > 0
    ? _c("div", { staticClass: "mt-5 kalam" }, [
        _c("h5", [_vm._v("Pedido actual:")]),
        _vm._v(" "),
        _c("table", { staticClass: "table table-striped" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.list, function(variant) {
              return _c("tr", { key: variant.id }, [
                _c("td", [_vm._v(" " + _vm._s(variant.code) + " ")]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    " " +
                      _vm._s(variant.product.name) +
                      " - " +
                      _vm._s(variant.name) +
                      " "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: variant.units,
                        expression: "variant.units",
                        modifiers: { lazy: true }
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { width: "100px" },
                    attrs: { type: "number" },
                    domProps: { value: variant.units },
                    on: {
                      change: function($event) {
                        _vm.$set(variant, "units", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    " $" +
                      _vm._s(
                        _vm._f("price")(variant.product.price * variant.units)
                      ) +
                      " "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-outline-danger",
                      on: {
                        click: function($event) {
                          _vm.del(variant)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-times" })]
                  )
                ])
              ])
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Codigo")]),
      _vm._v(" "),
      _c("th", [_vm._v("Producto")]),
      _vm._v(" "),
      _c("th", [_vm._v("Unidades")]),
      _vm._v(" "),
      _c("th", [_vm._v("Subtotal")]),
      _vm._v(" "),
      _c("th", [_vm._v("-")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ae5e525", module.exports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(118)
/* template */
var __vue_template__ = __webpack_require__(119)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-48ec1a84"
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
Component.options.__file = "resources/assets/js/components/cotizer/tutorial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48ec1a84", Component.options)
  } else {
    hotAPI.reload("data-v-48ec1a84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0299ef40", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tutorial.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tutorial.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.redcircle[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100px;\n  height: 100px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: rgba(170, 16, 16, 0.479);\n}\n.animation[data-v-48ec1a84] {\n  position: absolute;\n  top: 40px;\n  left: 20px;\n  color: #131212;\n  font-size: 3rem;\n}\n.image-container[data-v-48ec1a84] {\n  width: 90%;\n  position: relative;\n}\n.overlay[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #cccc;\n}\n.speech-bubble[data-v-48ec1a84] {\n  position: fixed;\n  top: 50px;\n  right: 50px;\n  background: #EB1889;\n  border-radius: .4em;\n  width: 50%;\n  padding: 20px;\n  text-align: center;\n  color: #fff;\n}\n.speech-bubble[data-v-48ec1a84]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 37px solid transparent;\n  border-right-color: #EB1889;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -18.5px;\n  margin-left: -37px;\n}\n@media (min-width: 900px) {\n.image-container[data-v-48ec1a84] {\n    width: 20%;\n    margin-left: 0;\n}\n.overlay[data-v-48ec1a84] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.speech-bubble[data-v-48ec1a84] {\n    top: 150px;\n}\n}\n", ""]);

// exports


/***/ }),
/* 118 */
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            viewed: false,
            scrolled: false,
            enterhand: false,
            clicknow: false,
            imagesrc: "/storage/images/app/tuto.png"

        };
    },

    watch: {
        scrolled: function scrolled() {}
    },
    methods: {
        handleScroll: function handleScroll() {
            var _this = this;

            if (!this.scrolled) {
                this.scrolled = window.scrollY > 150;

                setTimeout(function () {
                    _this.enterhand = true;
                }, 1000);

                setTimeout(function () {
                    _this.clicknow = true;
                    _this.imagesrc = "/storage/images/app/tuto2.png";
                }, 2100);
            }
        }
    },
    created: function created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { "enter-active-class": "animate animated bounceIn" } },
    [
      _vm.scrolled && !_vm.viewed
        ? _c(
            "div",
            { staticClass: "overlay " },
            [
              _c(
                "div",
                { staticClass: "image-container " },
                [
                  _c("v-lazy-image", { attrs: { src: _vm.imagesrc } }),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animate animated slideInUp"
                      }
                    },
                    [
                      _vm.enterhand
                        ? _c(
                            "div",
                            {
                              staticClass: "animation ",
                              class: { redcircle: _vm.clicknow }
                            },
                            [_c("i", { staticClass: "fa fa-mouse-pointer" })]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                {
                  attrs: { "enter-active-class": "animate animated bounceIn" }
                },
                [
                  _vm.clicknow
                    ? _c("div", { staticClass: "speech-bubble" }, [
                        _c("span", [
                          _vm._v(
                            "Click en una categoria para ver detalles de productos"
                          )
                        ])
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-block btn-danger",
                  staticStyle: { "max-width": "400px" },
                  on: {
                    click: function($event) {
                      _vm.viewed = true
                    }
                  }
                },
                [_vm._v(" Cerrar ")]
              )
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48ec1a84", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm._l(_vm.categories, function(category) {
        return _c(
          "div",
          { key: category.id, staticClass: "row" },
          _vm._l(category.products, function(product, i) {
            return _c(
              "div",
              {
                key: "product-" + product.id,
                staticClass: " flex-wrap col-12 col-lg-4 p-lg-4"
              },
              [
                _c("cotizer-productcard", {
                  attrs: { product: product, first: i == 0 }
                })
              ],
              1
            )
          })
        )
      }),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "animated bounceIn",
            "leave-active-class": "animated fadeOutDown"
          }
        },
        [
          _vm.total > 0
            ? _c(
                "div",
                {
                  staticClass:
                    "col-12 row d-flex flex-column justify-content-center align-items-center w-100",
                  attrs: { id: "total" }
                },
                [
                  _c("div", { staticClass: "total-bg p-1 col-6 col-lg-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 bg-white d-flex justify-content-center"
                      },
                      [
                        _vm._v(
                          "\n                TOTAL : $" +
                            _vm._s(_vm._f("price")(_vm.total)) +
                            "\n                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "total-bg p-1 col-6 col-lg-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 bg-white d-flex justify-content-center"
                      },
                      [
                        _c("a", { attrs: { href: "#form" } }, [
                          _vm._v("Terminar pedido")
                        ])
                      ]
                    )
                  ])
                ]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        [_c("cotizer-form", { attrs: { list: _vm.list, total: _vm.total } })],
        1
      ),
      _vm._v(" "),
      _vm.list.length > 0
        ? _c("div", [_c("pedido", { attrs: { list: _vm.list } })], 1)
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row d-flex justify-content-center text-center" },
      [_c("h1", [_vm._v("MAYORISTA DEL MATE")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-731ed9d6", module.exports)
  }
}

/***/ })
]));