webpackJsonp([2],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Categories_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Categories_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Categories_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customs_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__customs_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { adminCategories: __WEBPACK_IMPORTED_MODULE_0__Categories_vue___default.a, adminCustomtexts: __WEBPACK_IMPORTED_MODULE_1__customs_vue___default.a },
    data: function data() {
        return {
            meta: null,
            catalogosubido: false,
            csrf: window.csrf,
            categories: null,
            selectedCategory: null,
            configs: null
        };
    },
    created: function created() {
        var vm = this;
        this.$http.get('/api/metadata/home').then(function (response) {
            vm.meta = response.data;
        });

        vm.$http.get('/api/categories').then(function (res) {
            vm.categories = res.data;
        });
        vm.$http.get('/config').then(function (res) {
            vm.configs = res.data;
        });
    },

    methods: {
        updateconfigs: function updateconfigs(field) {
            var data = {
                field: field,
                value: this.configs[field]
            };
            this.$http.put('/admin/config', data);
        },
        categoryCatalog: function categoryCatalog() {
            this.$http.get('/admin/category-catalogo-job/' + this.selectedCategory.id).then(function (res) {
                swal('Trabajo en cola', 'Revisa el resultado en unos minutos', 'success');
            });
        },
        update: function update(field) {
            var data = {
                field: field,
                value: this.meta[field],
                id: this.meta.id
            };
            this.$http.put('/admin/metadata', data);
        }
    }

});

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
Component.options.__file = "resources/assets/js/components/admin/Categories.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84311dda", Component.options)
  } else {
    hotAPI.reload("data-v-84311dda", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            csrf: window.csrf,
            newcat: null,
            newsup: null,
            categories: []

        };
    },

    methods: {
        setUploaded: function setUploaded(cat) {
            Vue.set(cat, 'uploaded', true);
        },
        destroyCat: function destroyCat(cat) {
            var _this = this;

            this.$http.delete('/admin/category/' + cat.id).then(function (res) {
                _this.refresh();
            });
        },
        newCategory: function newCategory() {
            var vm = this;
            if (this.newcat) {
                var data = {
                    name: this.newcat
                };
                this.$http.post('/admin/category', data).then(function (res) {
                    vm.refresh();
                    vm.newcat = null;
                });
            }
        },
        updateCategoryDescription: function updateCategoryDescription(category) {
            var data = {
                id: category.id,
                field: 'description',
                value: category.description
            };
            this.$http.put('/admin/category', data);
        },
        update: function update(type, obj) {
            var data = {
                id: obj.id,
                field: 'name',
                value: obj.name
            };
            this.$http.put('/admin/' + type, data);
        },
        refresh: function refresh() {
            var _this2 = this;

            this.$http.get('/api/categories').then(function (response) {
                _this2.categories = response.data;
            });
        }
    },
    created: function created() {
        this.refresh();
    }
});

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm.categories
      ? _c(
          "div",
          {
            staticClass:
              "col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center"
          },
          [
            _c("h4", [_vm._v("Categorias")]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "border border-success p-2 m-3 d-flex flex-column"
              },
              [
                _c("h4", { staticClass: "text-success" }, [
                  _vm._v("Nueva categoria")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newcat,
                      expression: "newcat"
                    }
                  ],
                  domProps: { value: _vm.newcat },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newcat = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-lg btn-outline-info",
                    on: {
                      click: function($event) {
                        _vm.newCategory()
                      }
                    }
                  },
                  [_vm._v("Guardar")]
                )
              ]
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _vm._l(_vm.categories, function(category) {
              return _c(
                "div",
                { key: category.id, staticClass: "d-flex flex-column m-2" },
                [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: category.name,
                        expression: "category.name",
                        modifiers: { lazy: true }
                      }
                    ],
                    domProps: { value: category.name },
                    on: {
                      change: [
                        function($event) {
                          _vm.$set(category, "name", $event.target.value)
                        },
                        function($event) {
                          _vm.update("category", category)
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: category.description,
                        expression: "category.description",
                        modifiers: { lazy: true }
                      }
                    ],
                    attrs: { placeholder: "descripcion" },
                    domProps: { value: category.description },
                    on: {
                      change: [
                        function($event) {
                          _vm.$set(category, "description", $event.target.value)
                        },
                        function($event) {
                          _vm.updateCategoryDescription(category)
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("div", [
                    category.image
                      ? _c(
                          "div",
                          [
                            _c("v-lazy-image", {
                              attrs: {
                                width: "150px",
                                src: category.image,
                                alt: category.name
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        attrs: {
                          action: "/admin/categories/image",
                          method: "post",
                          enctype: "multipart/form-data"
                        }
                      },
                      [
                        _c("input", {
                          attrs: { type: "hidden", name: "_token" },
                          domProps: { value: _vm.csrf }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: { type: "hidden", name: "id" },
                          domProps: { value: category.id }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "btn ",
                            class: {
                              "btn-primary": category.uploaded,
                              "btn-outline-primary": !category.uploaded
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Subir imagen\n                        "
                            ),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: { name: "image", type: "file" },
                              on: {
                                change: function($event) {
                                  _vm.setUploaded(category)
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        category.uploaded
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-success",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("GUARDAR")]
                            )
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  !category.products || !category.products.length
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          on: {
                            click: function($event) {
                              _vm.destroyCat(category)
                            }
                          }
                        },
                        [_vm._v("BORRAR")]
                      )
                    : _vm._e()
                ]
              )
            })
          ],
          2
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
    require("vue-hot-reload-api")      .rerender("data-v-84311dda", module.exports)
  }
}

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(158)
/* template */
var __vue_template__ = __webpack_require__(159)
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
Component.options.__file = "resources/assets/js/components/admin/customs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f5d4a4a", Component.options)
  } else {
    hotAPI.reload("data-v-3f5d4a4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 158:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            customs: []
        };
    },
    created: function created() {
        var _this = this;

        this.$http.get('/api/custom-texts').then(function (res) {
            _this.customs = res.data;
        });
    },

    methods: {
        update: function update(custom) {
            var data = {
                id: custom.id,
                value: custom.text,
                field: 'text'
            };
            this.$http.put('/admin/customtext', data);
        }
    }
});

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.customs, function(custom) {
      return _c("div", { key: custom.id, staticClass: "row p-2 m-2" }, [
        _c("label", { staticClass: "col-12 col-lg-4" }, [
          _vm._v(" " + _vm._s(custom.code) + " ")
        ]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model.lazy",
              value: custom.text,
              expression: "custom.text",
              modifiers: { lazy: true }
            }
          ],
          staticClass: "form-control col-12 col-lg-8",
          domProps: { value: custom.text },
          on: {
            change: [
              function($event) {
                _vm.$set(custom, "text", $event.target.value)
              },
              function($event) {
                _vm.update(custom)
              }
            ]
          }
        })
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f5d4a4a", module.exports)
  }
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm.configs
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _vm._v("\n            minimo compra en local\n            "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.lazy",
                  value: _vm.configs.minbuy,
                  expression: "configs.minbuy",
                  modifiers: { lazy: true }
                }
              ],
              attrs: { type: "number" },
              domProps: { value: _vm.configs.minbuy },
              on: {
                change: [
                  function($event) {
                    _vm.$set(_vm.configs, "minbuy", $event.target.value)
                  },
                  function($event) {
                    _vm.updateconfigs("minbuy")
                  }
                ]
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _vm._v("\n            minimo compra envios\n            "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.lazy",
                  value: _vm.configs.minbuy_ship,
                  expression: "configs.minbuy_ship",
                  modifiers: { lazy: true }
                }
              ],
              attrs: { type: "number" },
              domProps: { value: _vm.configs.minbuy_ship },
              on: {
                change: [
                  function($event) {
                    _vm.$set(_vm.configs, "minbuy_ship", $event.target.value)
                  },
                  function($event) {
                    _vm.updateconfigs("minbuy_ship")
                  }
                ]
              }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", [
      _c(
        "form",
        {
          attrs: {
            method: "post",
            action: "/admin/replace-catalogo",
            enctype: "multipart/form-data"
          }
        },
        [
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.csrf }
          }),
          _vm._v(" "),
          _c("label", { staticClass: "btn btn-md btn-outline-info mt-3" }, [
            _vm._v("Subir catalogo comprimido\n                "),
            _c("input", {
              staticStyle: { display: "none" },
              attrs: { type: "file", name: "catalogo" },
              on: {
                change: function($event) {
                  _vm.catalogosubido = true
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm.catalogosubido
            ? _c(
                "button",
                {
                  staticClass: "btn btn-outline-success",
                  attrs: { type: "submit" }
                },
                [_vm._v("Guardar")]
              )
            : _vm._e()
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "d-flex flex-column col-12 col-lg-6 " }, [
        _c("h3", [_vm._v("Generar catalogo de una categoria:")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.selectedCategory,
                expression: "selectedCategory"
              }
            ],
            staticClass: "form-control",
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
                _vm.selectedCategory = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          _vm._l(_vm.categories, function(cat) {
            return _c("option", { key: cat.id, domProps: { value: cat } }, [
              _vm._v(
                "\n                    " +
                  _vm._s(cat.name) +
                  "\n                "
              )
            ])
          })
        ),
        _vm._v(" "),
        _vm.selectedCategory
          ? _c(
              "button",
              {
                staticClass: "btn btn-outline-info",
                on: {
                  click: function($event) {
                    _vm.categoryCatalog()
                  }
                }
              },
              [_vm._v(" Generar PDF ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mt-2 btn btn-outline-success",
            attrs: { target: "_blank", href: "/CATEGORY-catalogo.pdf" }
          },
          [_vm._v("Descargar")]
        ),
        _vm._v(" "),
        _vm.selectedCategory
          ? _c("span", [
              _vm._v(" Link:  "),
              _c("a", { attrs: { href: _vm.selectedCategory.slug } }, [
                _vm._v(
                  " https://mayoristamaju.com" +
                    _vm._s(_vm.selectedCategory.slug) +
                    " "
                )
              ])
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm.meta
      ? _c("div", { staticClass: "container m-auto" }, [
          _c("br"),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "row" }, [
              _c(
                "label",
                { staticClass: "col-12 col-lg-4", attrs: { for: "" } },
                [_vm._v("Meta titulo")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: _vm.meta.metatitle,
                    expression: "meta.metatitle",
                    modifiers: { lazy: true }
                  }
                ],
                staticClass: "form-control col-12 col-lg-6",
                attrs: { rows: "2" },
                domProps: { value: _vm.meta.metatitle },
                on: {
                  change: [
                    function($event) {
                      _vm.$set(_vm.meta, "metatitle", $event.target.value)
                    },
                    function($event) {
                      _vm.update("metatitle")
                    }
                  ]
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { attrs: { rg: "row" } }, [
              _c("label", { staticClass: "col-12 col-lg-4" }, [
                _vm._v(" Meta descripcion ")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.lazy",
                    value: _vm.meta.metadescription,
                    expression: "meta.metadescription",
                    modifiers: { lazy: true }
                  }
                ],
                staticClass: "form-control col-12 col-lg-6",
                attrs: { rows: "5" },
                domProps: { value: _vm.meta.metadescription },
                on: {
                  change: [
                    function($event) {
                      _vm.$set(_vm.meta, "metadescription", $event.target.value)
                    },
                    function($event) {
                      _vm.update("metadescription")
                    }
                  ]
                }
              })
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", [_c("admin-categories")], 1),
    _vm._v(" "),
    _c("div", [_c("admin-customtexts")], 1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        {
          staticClass: "btn btn-md btn-outline-info",
          attrs: { href: "/admin/prices-list-job" }
        },
        [_vm._v(" Refrescar lista de precios ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        {
          staticClass: "btn btn-md btn-outline-info",
          attrs: { href: "/admin/catalogo-job" }
        },
        [_vm._v(" Refrescar catalogo ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        {
          staticClass: "btn btn-md btn-outline-danger",
          attrs: { href: "/admin/failed-jobs" }
        },
        [_vm._v(" failed jobs ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48af17bc", module.exports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(153)
/* template */
var __vue_template__ = __webpack_require__(160)
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
Component.options.__file = "resources/assets/js/components/admin/Meta.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48af17bc", Component.options)
  } else {
    hotAPI.reload("data-v-48af17bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});