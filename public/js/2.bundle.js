webpackJsonp([2],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(154)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(156)
/* template */
var __vue_template__ = __webpack_require__(167)
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(128)
/* template */
var __vue_template__ = __webpack_require__(134)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-544a8b9a"
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
Component.options.__file = "resources/assets/js/components/category/product/card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-544a8b9a", Component.options)
  } else {
    hotAPI.reload("data-v-544a8b9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b361917c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544a8b9a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544a8b9a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.title[data-v-544a8b9a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 90px;\n}\n.product-card[data-v-544a8b9a] {\n  height: 100%;\n}\n.image-container[data-v-544a8b9a] {\n  width: 280px;\n  overflow: hidden;\n  position: relative;\n}\n.image-container img[data-v-544a8b9a] {\n    width: 100%;\n}\n.image-container .price-badge[data-v-544a8b9a] {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.image-container .price-badge .price[data-v-544a8b9a] {\n      position: absolute;\n      top: 30%;\n      left: 25%;\n      color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shop_button_vue__);
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
    components: {
        shopButton: __WEBPACK_IMPORTED_MODULE_0__shop_button_vue___default.a
    },
    data: function data() {
        return {
            index: 0
        };
    },

    computed: {
        productUrl: function productUrl() {
            var _this = this;

            var cats = this.$store.getters.getCategories;
            var category = cats.filter(function (c) {
                return c.id = _this.product.category_id;
            });
            var url = category.slug + '/' + this.product.slug;
            url = url.replace('//', '/');
            return url;
        },
        config: function config() {
            return this.$store.getters.getConfig;
        },
        image: function image() {

            if (this.product.images && this.product.images[this.index]) {
                return this.product.images[this.index];
            } else {
                return { url: '/storage/images/app/no-image.png' };
            }
        }
    }
});

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(132)
/* template */
var __vue_template__ = __webpack_require__(133)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-684b91cf"
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
Component.options.__file = "resources/assets/js/components/category/product/shop-button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-684b91cf", Component.options)
  } else {
    hotAPI.reload("data-v-684b91cf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("74e11d8a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684b91cf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shop-button.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684b91cf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shop-button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.cart-icon[data-v-684b91cf] {\n  font-size: 2rem;\n  margin-right: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 132:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['product'],
    methods: {
        addToCart: function addToCart() {
            Vue.set(this.product, 'units', 1);
        }
    }
});

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-100" }, [
    !_vm.product.units
      ? _c(
          "button",
          {
            staticClass: "btn btn-info btn-block",
            on: { click: _vm.addToCart }
          },
          [
            _c("fa-icon", { attrs: { icon: "shopping-cart" } }),
            _vm._v(" "),
            _c("span", [_vm._v(" Agregar al carrito ")])
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.product.units
      ? _c(
          "div",
          { staticClass: "d-flex mt-2 justify-content-center" },
          [
            _c("fa-icon", {
              staticClass: "cart-icon",
              attrs: { icon: "shopping-cart" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex justify-content-center" }, [
              _c(
                "span",
                {
                  staticClass: "btn btn-outline-info",
                  on: {
                    click: function($event) {
                      _vm.product.units--
                    }
                  }
                },
                [_c("fa-icon", { attrs: { icon: "minus" } })],
                1
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: _vm.product.units,
                    expression: "product.units",
                    modifiers: { lazy: true }
                  }
                ],
                staticClass: "form-control w-50",
                attrs: { type: "number", min: "1" },
                domProps: { value: _vm.product.units },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.product, "units", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "btn btn-outline-info",
                  on: {
                    click: function($event) {
                      _vm.product.units++
                    }
                  }
                },
                [_c("fa-icon", { attrs: { icon: "plus" } })],
                1
              )
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-684b91cf", module.exports)
  }
}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.product
    ? _c(
        "div",
        {
          staticClass:
            "d-flex flex-column align-items-center product-card  justify-content-between h-100"
        },
        [
          _c("h2", { staticClass: "text-center title" }, [
            _vm._v(_vm._s(_vm._f("uc")(_vm.product.name)))
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: _vm.productUrl } }, [
            _c(
              "div",
              { staticClass: "image-container" },
              [
                _c("v-lazy-image", { attrs: { src: _vm.image.url } }),
                _vm._v(" "),
                _vm.config && !_vm.config.hide_prices
                  ? _c(
                      "div",
                      { staticClass: "price-badge" },
                      [
                        _c("v-lazy-image", {
                          attrs: { src: "/storage/images/app/price-badge.png" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "price" }, [
                          _vm._v(
                            "$" + _vm._s(_vm._f("price")(_vm.product.price))
                          )
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("shop-button", { attrs: { product: _vm.product } })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-544a8b9a", module.exports)
  }
}

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8a658236", content, false, {});
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

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.table[data-v-731ed9d6], .accordion[data-v-731ed9d6], .tr[data-v-731ed9d6], .td[data-v-731ed9d6], .kalam[data-v-731ed9d6], .card[data-v-731ed9d6] {\n  font-family: 'Kalam', cursive;\n}\n.white-space-normal[data-v-731ed9d6] {\n  white-space: normal;\n}\n.text-big[data-v-731ed9d6] {\n  font-size: 1.5rem;\n}\n.product-miniature[data-v-731ed9d6] {\n  min-width: 200px;\n  width: 200px;\n  margin-right: 15px;\n}\n.container[data-v-731ed9d6] {\n  margin-bottom: 100px;\n}\ntd[data-v-731ed9d6] {\n  white-space: normal;\n}\ninput[type=\"number\"][data-v-731ed9d6] {\n  width: 70px;\n}\n.btn-link[data-v-731ed9d6] {\n  color: black;\n}\nimg[data-v-731ed9d6] {\n  width: 100%;\n}\n@media (max-width: 600px) {\n.product-miniature[data-v-731ed9d6] {\n    min-width: 100px;\n}\n.card-header[data-v-731ed9d6] {\n    padding: 0;\n}\n.container[data-v-731ed9d6] {\n    margin-left: -7%;\n    width: 100vw;\n    padding: 15px;\n}\n.sampleImage[data-v-731ed9d6] {\n    width: 80px;\n}\ntd[data-v-731ed9d6] {\n    white-space: normal;\n}\ntable[data-v-731ed9d6] {\n    font-size: 0.66rem;\n    font-weight: bold;\n}\n.card-body[data-v-731ed9d6], table th[data-v-731ed9d6], table td[data-v-731ed9d6] {\n    padding: 5px;\n}\n}\n@media (min-width: 600px) {\n.sampleImage[data-v-731ed9d6] {\n    width: 150px;\n}\ntable[data-v-731ed9d6] {\n    font-size: 1rem;\n    font-weight: normal;\n}\ntd[data-v-731ed9d6] {\n    white-space: normal;\n}\n.card-body[data-v-731ed9d6], .container[data-v-731ed9d6] {\n    padding: 1.25rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_product_card_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_product_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__category_product_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_selector_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_selector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__code_selector_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__tutorial_vue__);
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







/* harmony default export */ __webpack_exports__["default"] = ({
    components: { tutorial: __WEBPACK_IMPORTED_MODULE_3__tutorial_vue___default.a, cotizerProductcard: __WEBPACK_IMPORTED_MODULE_1__category_product_card_vue___default.a, codeSelector: __WEBPACK_IMPORTED_MODULE_2__code_selector_vue___default.a },
    metaInfo: function metaInfo() {
        return {
            title: this.meta ? this.meta.metatitle : 'Mayorista del Mate',
            meta: [{ name: 'description', content: this.meta ? this.meta.metadescription : '' }]

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
                return m.page == 'cotizador';
            });
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(158)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(160)
/* template */
var __vue_template__ = __webpack_require__(161)
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("509ba448", content, false, {});
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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.square[data-v-74ba080f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n.variants-clicker[data-v-74ba080f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.selected[data-v-74ba080f] {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  border: 2px solid blue;\n}\n", ""]);

// exports


/***/ }),

/***/ 160:
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

/***/ 161:
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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(163)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(165)
/* template */
var __vue_template__ = __webpack_require__(166)
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0299ef40", content, false, {});
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.redcircle[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100px;\n  height: 100px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: rgba(170, 16, 16, 0.479);\n}\n.animation[data-v-48ec1a84] {\n  position: absolute;\n  top: 40px;\n  left: 20px;\n  color: #131212;\n  font-size: 3rem;\n}\n.image-container[data-v-48ec1a84] {\n  width: 90%;\n  position: relative;\n}\n.overlay[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #cccc;\n}\n.speech-bubble[data-v-48ec1a84] {\n  position: fixed;\n  top: 50px;\n  right: 50px;\n  background: #EB1889;\n  border-radius: .4em;\n  width: 50%;\n  padding: 20px;\n  text-align: center;\n  color: #fff;\n}\n.speech-bubble[data-v-48ec1a84]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 37px solid transparent;\n  border-right-color: #EB1889;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -18.5px;\n  margin-left: -37px;\n}\n@media (min-width: 900px) {\n.image-container[data-v-48ec1a84] {\n    width: 20%;\n    margin-left: 0;\n}\n.overlay[data-v-48ec1a84] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.speech-bubble[data-v-48ec1a84] {\n    top: 150px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 165:
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

/***/ 166:
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

/***/ 167:
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
          { key: category.name, staticClass: "row" },
          [
            _c(
              "div",
              {
                staticClass: "d-flex justify-content-center text-center col-12"
              },
              [
                category.image
                  ? _c("v-lazy-image", { attrs: { src: category.image } })
                  : _vm._e(),
                _vm._v(" "),
                !category.image
                  ? _c("h2", { staticClass: " text-center" }, [
                      _vm._v(_vm._s(_vm._f("uc")(category.name)))
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _vm._l(category.products, function(product, i) {
              return _c(
                "div",
                {
                  key: "product-" + product.id,
                  staticClass: " flex-wrap col-12 col-lg-3 p-lg-4"
                },
                [
                  _c("cotizer-productcard", {
                    attrs: { product: product, first: i == 0 }
                  })
                ],
                1
              )
            })
          ],
          2
        )
      }),
      _vm._v(" "),
      _c("hr")
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

});