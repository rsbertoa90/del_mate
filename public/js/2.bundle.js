webpackJsonp([2],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(144)
/* template */
var __vue_template__ = __webpack_require__(157)
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


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(129)
/* template */
var __vue_template__ = __webpack_require__(135)
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

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
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

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-544a8b9a] {\n  width: 100%;\n}\n.title[data-v-544a8b9a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 90px;\n}\n.product-card[data-v-544a8b9a] {\n  height: 100%;\n}\n.image-container[data-v-544a8b9a] {\n  width: 280px;\n  overflow: hidden;\n  position: relative;\n}\n.image-container img[data-v-544a8b9a] {\n    width: 100%;\n}\n.image-container .price-badge[data-v-544a8b9a] {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.image-container .price-badge .price[data-v-544a8b9a] {\n      position: absolute;\n      top: 30%;\n      left: 25%;\n      color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shop_button_vue__ = __webpack_require__(130);
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
            var category = cats.find(function (c) {
                return c.id == _this.product.category_id;
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(133)
/* template */
var __vue_template__ = __webpack_require__(134)
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

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.cart-icon[data-v-684b91cf] {\n  font-size: 2rem;\n  margin-right: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 133:
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

/***/ 134:
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

/***/ 135:
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
          _vm.config && !_vm.config.hide_prices
            ? _c("shop-button", { attrs: { product: _vm.product } })
            : _vm._e()
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    computed: {
        metadata: function metadata() {
            var _this = this;

            if (this.page) {

                var allMeta = this.$store.getters.getMeta;
                return allMeta.find(function (m) {
                    return m.page == _this.page;
                });
            }
        },
        metatitle: function metatitle() {
            if (this.metadata) {
                return this.metadata.metatitle ? this.metadata.metatitle : 'Mayorista del Mate';
            }
        },
        metadescription: function metadescription() {
            if (this.metadata) {
                return this.metadata.metadescription ? this.metadata.metadescription : "Mayorista del Mate";
            }
        }
    },
    metaInfo: function metaInfo() {
        return {
            title: this.metatitle,
            meta: [{ name: 'description', content: this.metadescription }]
        };
    }
});

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banners_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banners_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__banners_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offers_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__offers_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_metadataMixin__ = __webpack_require__(136);
//
//
//
//
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
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_metadataMixin__["a" /* default */]],
    data: function data() {
        return {
            page: 'home'
        };
    },

    components: { homeOffers: __WEBPACK_IMPORTED_MODULE_2__offers_vue___default.a, homeBanners: __WEBPACK_IMPORTED_MODULE_0__banners_vue___default.a, homeInfo: __WEBPACK_IMPORTED_MODULE_1__info_vue___default.a },

    computed: {
        categories: function categories() {
            return this.$store.getters.getNotPaused;
        }
    }
});

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(148)
/* template */
var __vue_template__ = __webpack_require__(149)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0fb473ae"
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
Component.options.__file = "resources/assets/js/components/home/banners.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fb473ae", Component.options)
  } else {
    hotAPI.reload("data-v-0fb473ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6bf2e26f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0fb473ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./banners.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0fb473ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./banners.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.category-image-container[data-v-0fb473ae] {\n  border: 1px solid #868686;\n  margin-bottom: 22px;\n  position: relative;\n}\n.category-image-container img[data-v-0fb473ae] {\n    width: 100%;\n}\n.category-image-container .name-container[data-v-0fb473ae] {\n    position: absolute;\n    top: 30%;\n    left: 25%;\n    width: 50%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.category-image-container .name-container h2[data-v-0fb473ae] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      text-align: center;\n      padding: 5px;\n      background-color: #09879f99;\n      color: #fff;\n      border-radius: 3%;\n}\n.image-container[data-v-0fb473ae] {\n  position: relative;\n}\n.image-container .overlayed-text[data-v-0fb473ae] {\n    color: #fff;\n    position: absolute;\n    top: 30px;\n    left: 25px;\n    padding: 10px;\n    background-color: #86868677;\n}\n.image-container .overlayed-text h2[data-v-0fb473ae] {\n      font-size: 3rem;\n}\n.image-container img[data-v-0fb473ae] {\n    width: 100%;\n}\n@media (max-width: 600px) {\n.image-container img[data-v-0fb473ae] {\n    width: 100vw;\n    margin-left: -6%;\n}\n.image-container .overlayed-text[data-v-0fb473ae] {\n    max-width: 65%;\n    top: 15px;\n    left: 10px;\n    padding: 5px;\n    background-color: #86868677;\n}\n.image-container .overlayed-text h2[data-v-0fb473ae] {\n      font-size: 2rem;\n}\n.image-container .overlayed-text h4[data-v-0fb473ae] {\n      font-size: 1.2rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 148:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        categories: function categories() {
            return this.$store.getters.getCategories;
        }
    }
});

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.categories
    ? _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-lg-8" }, [
          _c(
            "div",
            { staticClass: "image-container" },
            [
              _c("v-lazy-image", {
                attrs: {
                  src: "/storage/images/app/mensajeria.jpg",
                  alt: "envio gratis"
                }
              }),
              _vm._v(" "),
              _vm._m(0)
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-lg-4 d-flex flex-column" },
          _vm._l(_vm.categories, function(category) {
            return _c(
              "div",
              {
                key: category.name,
                staticClass: "mb-1 category-banner mt-2 mt-lg-0"
              },
              [
                category.slug
                  ? _c("router-link", { attrs: { to: category.slug } }, [
                      _c(
                        "div",
                        { staticClass: "category-image-container" },
                        [
                          category.image
                            ? _c("v-lazy-image", {
                                attrs: {
                                  src: category.image,
                                  alt: category.name
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "name-container" }, [
                            _c("h2", [
                              _vm._v(
                                " " +
                                  _vm._s(_vm._f("ucFirst")(category.name)) +
                                  " "
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !category.image
                        ? _c(
                            "div",
                            {
                              staticStyle: {
                                border: "1px solid #000",
                                display: "flex",
                                "justify-content": "center",
                                "align-items": "center",
                                width: "100%",
                                height: "143px"
                              }
                            },
                            [_c("h2", [_vm._v(_vm._s(category.name))])]
                          )
                        : _vm._e()
                    ])
                  : _vm._e()
              ],
              1
            )
          })
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "overlayed-text" }, [
      _c("h2", [_vm._v("Envio Gratis!")]),
      _vm._v(" "),
      _c("h4", { staticClass: "mt-0" }, [
        _vm._v("Paga tus productos cuando los recibis!")
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: "mt-4" }, [
        _vm._v("Capital Federal y Gran Buenos Aires")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0fb473ae", module.exports)
  }
}

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(153)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e3964d7"
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
Component.options.__file = "resources/assets/js/components/home/info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e3964d7", Component.options)
  } else {
    hotAPI.reload("data-v-5e3964d7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b38645a8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e3964d7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./info.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e3964d7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.info-row[data-v-5e3964d7] {\n  background-color: #09879f;\n  margin: 0 -6%;\n  padding: 20px 6%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.icon[data-v-5e3964d7] {\n  font-size: 2rem;\n}\n.info-item[data-v-5e3964d7] {\n  max-width: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: .9rem;\n  color: #fff;\n}\n@media (max-width: 660px) {\n.info-item[data-v-5e3964d7] {\n    background-color: #09879f;\n    margin-top: 15px;\n    width: 100%;\n    max-width: 100%;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    /*  margin-top:15px; */\n    margin-left: 15px;\n    padding: 10px;\n    border: 1px solid #868686;\n    -webkit-box-shadow: #868686 1px 2px;\n            box-shadow: #868686 1px 2px;\n}\n.info-row[data-v-5e3964d7] {\n    margin: -15px 0 0 0;\n    margin-left: -5%;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    background-color: #00000000;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "info-row" }, [
    _c(
      "div",
      { staticClass: "info-item" },
      [
        _c("fa-icon", { staticClass: "icon", attrs: { icon: "truck" } }),
        _vm._v(" "),
        _vm._m(0)
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "info-item" },
      [
        _c("fa-icon", { staticClass: "icon", attrs: { icon: "dollar-sign" } }),
        _vm._v(" "),
        _vm._m(1)
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "info-item" },
      [
        _c("fa-icon", { staticClass: "icon", attrs: { icon: "user-check" } }),
        _vm._v(" "),
        _vm._m(2)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column ml-2" }, [
      _c("span", [_c("b", [_vm._v("ENVIO GRATIS")])]),
      _vm._v(" "),
      _c("span", [_vm._v("En CABA y Zona Oesta de GBA")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column ml-2" }, [
      _c("span", [_c("b", [_vm._v("PAGO CONTRAREEMBOLSO")])]),
      _vm._v(" "),
      _c("span", [_vm._v("Paga al recibir tus productos")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column ml-2" }, [
      _c("span", [_c("b", [_vm._v("ATENCION PERSONALIZADA")])]),
      _vm._v(" "),
      _c("span", [_vm._v("Por whatsapp, lunes a sabados de 9hs a 18hs ")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e3964d7", module.exports)
  }
}

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(155)
/* template */
var __vue_template__ = __webpack_require__(156)
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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_product_card_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_product_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__category_product_card_vue__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { productCard: __WEBPACK_IMPORTED_MODULE_0__category_product_card_vue___default.a },
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row mt-4 d-flex align-items-stretch" },
    _vm._l(_vm.offers, function(product) {
      return _c(
        "div",
        { key: product.id, staticClass: "col-12 col-lg-3 border-grey mt-2" },
        [_c("productCard", { attrs: { product: product } })],
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("home-banners"),
      _vm._v(" "),
      _c("homeInfo", { staticClass: "mt-lg-4" }),
      _vm._v(" "),
      _c("homeOffers")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-3" }, [
      _c(
        "div",
        { staticClass: "col-12 d-flex justify-content-center text-center" },
        [_c("h1", [_vm._v("Mayorista Del Mate")])]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a7dd8a8", module.exports)
  }
}

/***/ })

});