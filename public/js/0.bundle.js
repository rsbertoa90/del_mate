webpackJsonp([0],{"2EyO":function(t,e,s){var a=s("VU/8")(s("Kgwc"),s("NHlf"),!1,null,null,null);t.exports=a.exports},"2NnV":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.total>1?s("nav",{attrs:{"aria-label":"Paginator"}},[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"page-item",class:{disabled:1==t.selectedPage}},[s("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:function(e){t.select(t.selectedPage-1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._v(" "),t._l(t.pages,function(e){return s("li",{key:e,staticClass:"page-item",class:{active:t.selectedPage==e}},[s("div",{staticClass:"page-link",on:{click:function(s){t.select(e)}}},[t._v(t._s(e))])])}),t._v(" "),s("li",{staticClass:"page-item",class:{disabled:t.selectedPage==t.total}},[s("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:function(e){t.select(t.selectedPage+1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)]):t._e()},staticRenderFns:[]}},"7TNp":function(t,e,s){var a=s("zHdi");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("372b5914",a,!0,{})},"8YHa":function(t,e,s){var a=s("M/YB");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("778e9f54",a,!0,{})},EDXu:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row "},[t._m(0),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"col-12 col-lg-4 d-flex flex-column"},t._l(t.metadatas,function(e){return s("button",{key:e.id,staticClass:"btn btn-block bg-first white-bold",class:{"bg-focus":t.selected==e},on:{click:function(s){t.selected=e}}},[t._v("\n                "+t._s(t._f("ucFirst")(e.page))+"\n        ")])})),t._v(" "),s("div",{staticClass:"col-12 col-lg-8"},[t.selected?s("div",[s("h2",[t._v(" "+t._s(t._f("ucFirst")(t.selected.page))+" ")]),t._v(" "),s("div",{staticClass:"p2 row"},[s("label",{staticClass:"col-12 col-lg-4"},[t._v("\n                    Meta Titutlo\n                ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.selected.metatitle,expression:"selected.metatitle",modifiers:{lazy:!0,trim:!0}}],staticClass:"col-12 col-lg-8 form-control",attrs:{rows:"5",type:"text"},domProps:{value:t.selected.metatitle},on:{change:[function(e){t.$set(t.selected,"metatitle",e.target.value.trim())},function(e){t.save(t.selected,"metatitle")}],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"p2 row"},[s("label",{staticClass:"col-12 col-lg-4"},[t._v("\n                    Meta Descripcion\n                ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.selected.metadescription,expression:"selected.metadescription",modifiers:{lazy:!0,trim:!0}}],staticClass:"col-12 col-lg-8 form-control",attrs:{rows:"5",type:"text"},domProps:{value:t.selected.metadescription},on:{change:[function(e){t.$set(t.selected,"metadescription",e.target.value.trim())},function(e){t.save(t.selected,"metadescription")}],blur:function(e){t.$forceUpdate()}}})])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h2",[this._v("Metadata de paginas")]),this._v(" "),e("hr")])}]}},F9CR:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["product"],methods:{saveSlug:function(){this.product.slug=this.product.slug.replace(/\s+/g,"-").toLowerCase().trim(),this.saveChange(this.product,"slug")},refresh:function(){this.$emit("refresh")},saveChange:function(t,e){var s={product:t.id,field:e,value:t[e]};this.$http.put("/admin/product/update",s)}},watch:{"product.slug":function(){this.product.slug&&(this.product.slug=this.product.slug.replace(/\s+/g,"-").toLowerCase().trim())}},mounted:function(){this.product&&!this.product.slug&&(this.product.slug=this.product.name,this.product.slug=this.product.slug.replace(/\s+/g,"-").toLowerCase().trim(),this.saveChange(this.product,"slug"))}}},Hngp:function(t,e,s){var a=s("gBzo");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("d4a582b0",a,!0,{})},JDrb:function(t,e,s){var a=s("Ybfm");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("5a5b2115",a,!0,{})},JNR9:function(t,e,s){var a=s("VU/8")(s("bFTJ"),s("Ru9b"),!1,function(t){s("7TNp")},"data-v-56dcc006",null);t.exports=a.exports},Kgwc:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("o8Sy"),i=s.n(a),c=s("rsNl"),r=s.n(c),o=s("JNR9"),n=s.n(o);e.default={components:{metaCategories:i.a,metaPages:r.a,metaProducts:n.a},data:function(){return{panel:"meta-pages"}},computed:{configs:function(){return this.$store.getters.getConfig}},methods:{toggle_hide_prices:function(){this.configs.hide_prices=!this.configs.hide_prices;var t={field:"hide_prices",value:this.configs.hide_prices?1:0};this.$http.put("/admin/config",t)},updateconfig:function(t){var e={field:t,value:this.configs[t]};this.$http.put("/admin/config",e)}}}},"M/YB":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".pagination[data-v-63445fdb]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}",""])},NHlf:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row mt-4 p-4"},[t._m(0),t._v(" "),t.configs?s("div",{staticClass:"col-12 row"},[s("div",{staticClass:"col-12"},[t._v("\n            compra minima local: \n            "),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.configs.minbuy,expression:"configs.minbuy",modifiers:{lazy:!0}}],attrs:{type:"number"},domProps:{value:t.configs.minbuy},on:{change:[function(e){t.$set(t.configs,"minbuy",e.target.value)},function(e){t.updateconfig("minbuy")}]}})]),t._v(" "),s("div",{staticClass:"col-12"},[t._v("\n            compra minima envios: \n            "),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.configs.minbuy_ship,expression:"configs.minbuy_ship",modifiers:{lazy:!0}}],attrs:{type:"number"},domProps:{value:t.configs.minbuy_ship},on:{change:[function(e){t.$set(t.configs,"minbuy_ship",e.target.value)},function(e){t.updateconfig("minbuy_ship")}]}})]),t._v(" "),t.configs?s("div",{staticClass:"col-12"},[t.configs.hide_prices?s("button",{staticClass:"btn btn-outline-info",on:{click:t.toggle_hide_prices}},[t._v("\n                Mostrar precios\n            ")]):t._e(),t._v(" "),t.configs.hide_prices?t._e():s("button",{staticClass:"btn btn-outline-danger",on:{click:t.toggle_hide_prices}},[t._v("\n                Ocultar precios\n            ")])]):t._e()]):t._e(),t._v(" "),s("div",{staticClass:"col-12 row p-4"},[s("h3",{staticClass:"col-12"},[t._v("Metadatas")]),t._v(" "),s("hr"),t._v(" "),s("button",{staticClass:"col-12 col-lg-4 btn",class:{"btn-info":"meta-pages"==t.panel,"btn-outline-info":"meta-pages"!=t.panel},on:{click:function(e){t.panel="meta-pages"}}},[t._v("\n            Paginas\n        ")]),t._v(" "),s("button",{staticClass:"col-12 col-lg-4 btn",class:{"btn-info":"meta-categories"==t.panel,"btn-outline-info":"meta-categories"!=t.panel},on:{click:function(e){t.panel="meta-categories"}}},[t._v("\n            Categorias\n        ")]),t._v(" "),s("button",{staticClass:"col-12 col-lg-4 btn",class:{"btn-info":"meta-products"==t.panel,"btn-outline-info":"meta-products"!=t.panel},on:{click:function(e){t.panel="meta-products"}}},[t._v("\n            Productos\n        ")])]),t._v(" "),s("div",{staticClass:"col-12 mt-4 p-4"},[s(t.panel,{tag:"component"})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("a",{staticClass:"btn btn-outline-info",attrs:{href:"/admin/lista-de-precios"}},[this._v("  \n            Refrescar Lista de Precios\n        ")])])}]}},"Qi/P":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.product?s("tr",[s("td",[t.product.images&&t.product.images.length>0?s("img",{staticStyle:{width:"150px"},attrs:{src:t.product.images[0].url,alt:t.product.name}}):s("img",{attrs:{src:"/storage/images/app/no-image.png",alt:t.product.name}})]),t._v(" "),s("td",[t._v("\n        "+t._s(t.product.name)+"\n        "),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.product.slug,expression:"product.slug",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{placeholder:"URL",rows:"1",type:"text"},domProps:{value:t.product.slug},on:{change:[function(e){t.$set(t.product,"slug",e.target.value)},function(e){t.saveSlug(t.product,"slug")}]}})]),t._v(" "),s("td",[s("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.product.metatitle,expression:"product.metatitle",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{placeholder:"Meta titulo",rows:"2",type:"text"},domProps:{value:t.product.metatitle},on:{change:[function(e){t.$set(t.product,"metatitle",e.target.value)},function(e){t.saveChange(t.product,"metatitle")}]}})]),t._v(" "),s("td",[t.product.description?s("span",{staticClass:"col-12"},[t._v("\n            "+t._s(t.product.description)+"\n        ")]):t._e(),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.product.metadescription,expression:"product.metadescription",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{placeholder:"meta descripcion",rows:"3",type:"text"},domProps:{value:t.product.metadescription},on:{change:[function(e){t.$set(t.product,"metadescription",e.target.value)},function(e){t.saveChange(t.product,"metadescription")}]}})])]):t._e()},staticRenderFns:[]}},REsy:function(t,e,s){var a=s("VU/8")(s("F9CR"),s("Qi/P"),!1,function(t){s("JDrb")},"data-v-3e312c9a",null);t.exports=a.exports},Ru9b:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.loading?s("div",{staticClass:"loader"},[s("dot-loader",{attrs:{loading:t.loading,size:"200px"}})],1):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 row mt-3 mb-3 ml-2"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.searchTerm,expression:"searchTerm",modifiers:{lazy:!0}}],staticClass:"form-control col-4",attrs:{placeholder:"BUSCAR"},domProps:{value:t.searchTerm},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null},change:function(e){t.searchTerm=e.target.value}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-success ml-2",on:{click:t.search}},[t._v("Buscar")])]),t._v(" "),s("div",{staticClass:"row mt-4 ml-2"},[s("paginator",{attrs:{selectedPage:t.selectedPage,products:t.filterProducts,productsPerPage:t.productsPerPage},on:{selectPage:function(e){t.selectedPage=e}}})],1),t._v(" "),t.filteredProducts?s("table",{staticClass:"table table-striped table-bordered ",attrs:{id:"table"}},[t._m(0),t._v(" "),t._l(t.filteredProducts,function(e){return s("product-row",{key:e.id,tag:"tr",attrs:{product:e},on:{refresh:t.refresh}})})],2):t._e(),t._v(" "),s("paginator",{attrs:{selectedPage:t.selectedPage,products:t.filterProducts,productsPerPage:t.productsPerPage},on:{selectPage:function(e){t.selectedPage=e}}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{},[e("th",[this._v("imagen")]),this._v(" "),e("th",[this._v("URL")]),this._v(" "),e("th",[this._v("Meta titulo")]),this._v(" "),e("th",[this._v("Meta descripcion")])])}]}},"W/AX":function(t,e,s){var a=s("VU/8")(s("m9cQ"),s("2NnV"),!1,function(t){s("8YHa")},"data-v-63445fdb",null);t.exports=a.exports},Ybfm:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"input[type=checkbox][data-v-3e312c9a]{width:25px;margin:10px;height:20px}.smallField[data-v-3e312c9a]{width:80px}td[data-v-3e312c9a]{min-width:120px}.btn-link[data-v-3e312c9a]{color:#000}td img[data-v-3e312c9a]{width:10vw}@media (max-width:600px){.card-body[data-v-3e312c9a],.card[data-v-3e312c9a],.container[data-v-3e312c9a],table[data-v-3e312c9a]{font-size:.66rem;padding:0}input[data-v-3e312c9a],td[data-v-3e312c9a],th[data-v-3e312c9a]{white-space:nowrap;width:13vw;padding:2px}.nametd[data-v-3e312c9a]{width:25vw}}",""])},bFTJ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("REsy"),i=s.n(a),c=s("W/AX"),r=s.n(c);e.default={components:{paginator:r.a,productRow:i.a},data:function(){return{searchMode:!1,searchTerm:"",selectedPage:1,productsPerPage:30,selector:{id:"all",checked:!1},list:[]}},computed:{user:function(){return this.$store.getters.getUser},loading:function(){return!this.products},categories:function(){return this.$store.getters.getCategories},products:function(){if(this.categories){var t=[];return this.categories.forEach(function(e){e.products&&(t=t.concat(e.products))}),t}},filterProducts:function(){var t=this;if(this.searchMode)return this.searchFilter();if(this.products.length>0){var e=null;if("category.name"==this.orderBy&&(e="category"),e&&"all"!=this.selector.id){var s=this.products.filter(function(s){return s[e].id==t.selector.id});return _.orderBy(s,this.orderBy)}return _.orderBy(this.products,this.orderBy)}return[]},filteredProducts:function(){var t=this.filterProducts;return this.paginate(t,this.selectedPage)}},watch:{orderBy:function(){this.products=_.sortBy(this.products,this.orderBy),this.selector.id="all",this.resetFilters()},"selector.id":function(){this.resetFilters()}},methods:{resetFilters:function(){this.resetCheckboxes(),this.selectedPage=1,this.searchMode=!1,this.searchTerm=""},search:function(){var t=this,e=this.searchTerm;this.selector.id="all",this.selectedPage=1,setTimeout(function(){t.searchTerm=e,t.searchMode=!0},100),this.searchMode=!0},searchComparision:function(t,e){var s=e.name.toLowerCase().trim();t=t.toLowerCase().trim();var a=this.categories.find(function(t){return t.id==e.category_id}).name.toLowerCase().trim(),i=e.code.toLowerCase().trim();return s.indexOf(t)>-1||a.indexOf(t)>-1||i.indexOf(t)>-1},searchFilter:function(){var t=this,e=this.searchTerm.split(" "),s=[];return this.products.forEach(function(a){var i=!0;e.forEach(function(e){i&&!t.searchComparision(e,a)&&(i=!1)}),i&&s.push(a)}),s},paginate:function(t,e){if(t&&t.length>0)return e--,t.slice(e*this.productsPerPage,(e+1)*this.productsPerPage)},refresh:function(){this.$store.dispatch("fetchCategories")}},created:function(){this.refresh()}}},gBzo:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"img[data-v-d2e64a92]{width:100%}.overflow-hidden[data-v-d2e64a92]{overflow:hidden}",""])},i3ks:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{selected:null}},computed:{metadatas:function(){return this.$store.getters.getMeta}},methods:{save:function(t,e){var s={id:t.id,field:e,value:t[e]};this.$http.put("/admin/metadata",s)}}}},j1QT:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{categories:function(){return this.$store.getters.getCategories}},data:function(){return{selected:null}},methods:{bindFile:function(t){var e=new FormData,s=t.target.files[0].name.split(".").pop();"png"!=s&&"jpg"!=s&&"jpeg"!=s&&"gif"!=s&&s!=webp||(e.append("image",t.target.files[0]),e.append("id",this.selected.id),this.$http.post("/admin/categories/image",e).then(function(t){window.location.replace("/super")}))},save:function(t,e){var s={id:t.id,field:e,value:t[e]};this.$http.put("/admin/category",s)},saveSlug:function(t){var e=this;this.selected.slug&&(this.selected.slug=this.selected.slug.replace(/\s+/g,"-").toLowerCase().trim(),this.categories.find(function(t){return t.slug===e.selected.slug&&t.id!=e.selected.id})?swal("Cuidado!","Ya existe una categoria con esa URL","warning"):this.save(t,"slug"))}},watch:{"selected.slug":function(){this.selected.slug&&(this.selected.slug=this.selected.slug.replace(/\s+/g,"-").toLowerCase().trim())}}}},jDQb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-12 col-lg-4 d-flex flex-column"},t._l(t.categories,function(e){return s("button",{key:e.id,staticClass:"btn btn-block bg-first white-bold",class:{"bg-focus":t.selected==e},on:{click:function(s){t.selected=e}}},[t._v("\n                "+t._s(e.name)+"\n        ")])})),t._v(" "),s("div",{staticClass:"col-12 col-lg-8"},[t.selected?s("div",[s("h2",[t._v(" "+t._s(t.selected.name)+" ")]),t._v(" "),s("div",{staticClass:"p2 row"},[s("label",{staticClass:"col-12 col-lg-4"},[t._v("\n                    URL\n                ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.selected.slug,expression:"selected.slug",modifiers:{lazy:!0,trim:!0}}],staticClass:"col-12 col-lg-8 form-control",attrs:{rows:"2",type:"text"},domProps:{value:t.selected.slug},on:{change:[function(e){t.$set(t.selected,"slug",e.target.value.trim())},function(e){t.saveSlug(t.selected)}],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"p2 row"},[s("label",{staticClass:"col-12 col-lg-4"},[t._v("\n                    Descripcion\n                ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.selected.description,expression:"selected.description",modifiers:{lazy:!0,trim:!0}}],staticClass:"col-12 col-lg-8 form-control",attrs:{rows:"5",type:"text"},domProps:{value:t.selected.description},on:{change:[function(e){t.$set(t.selected,"description",e.target.value.trim())},function(e){t.save(t.selected,"description")}],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"p2 row"},[s("label",{staticClass:"col-12 col-lg-4"},[t._v("\n                    Meta Titutlo\n                ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.selected.metatitle,expression:"selected.metatitle",modifiers:{lazy:!0,trim:!0}}],staticClass:"col-12 col-lg-8 form-control",attrs:{rows:"5",type:"text"},domProps:{value:t.selected.metatitle},on:{change:[function(e){t.$set(t.selected,"metatitle",e.target.value.trim())},function(e){t.save(t.selected,"metatitle")}],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"p2 row"},[s("label",{staticClass:"col-12 col-lg-4"},[t._v("\n                    Meta Descripcion\n                ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.selected.metadescription,expression:"selected.metadescription",modifiers:{lazy:!0,trim:!0}}],staticClass:"col-12 col-lg-8 form-control",attrs:{rows:"5",type:"text"},domProps:{value:t.selected.metadescription},on:{change:[function(e){t.$set(t.selected,"metadescription",e.target.value.trim())},function(e){t.save(t.selected,"metadescription")}],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-6 overflow-hidden"},[s("img",{attrs:{src:t.selected.image,alt:t.selected.name}})]),t._v(" "),s("div",{staticClass:"col-6 d-flex align-items-end"},[s("label",{staticClass:"btn btn-block btn-outline-info btn-file"},[t._v("\n                        Cargar imagen "),s("input",{staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.bindFile}})])])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h2",[this._v("Descripciones y metadata de Categorias")]),this._v(" "),e("hr")])}]}},m9cQ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["selectedPage","products","productsPerPage"],computed:{total:function(){if(this.products)return this.products.length/this.productsPerPage},pages:function(){var t=this.total;t%1!=0&&t++;for(var e=[],s=1;s<t;s++)e.push(s);return e}},methods:{select:function(t){this.$emit("selectPage",t)}}}},o8Sy:function(t,e,s){var a=s("VU/8")(s("j1QT"),s("jDQb"),!1,function(t){s("Hngp")},"data-v-d2e64a92",null);t.exports=a.exports},rsNl:function(t,e,s){var a=s("VU/8")(s("i3ks"),s("EDXu"),!1,null,null,null);t.exports=a.exports},zHdi:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".loader[data-v-56dcc006]{position:fixed;height:100%;width:100%;z-index:110;background-color:#ddddddaa;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:start;padding-top:5%}input[type=checkbox][data-v-56dcc006]{width:25px;margin:10px;height:20px}.smallField[data-v-56dcc006]{width:80px}td[data-v-56dcc006]{min-width:120px}.btn-link[data-v-56dcc006]{color:#000}td img[data-v-56dcc006]{width:10vw}@media(max-width:600px){.card-body[data-v-56dcc006],.card[data-v-56dcc006],.container[data-v-56dcc006],table[data-v-56dcc006]{font-size:.66rem;padding:0}input[data-v-56dcc006],td[data-v-56dcc006],th[data-v-56dcc006]{white-space:nowrap;width:13vw;padding:2px}.nametd[data-v-56dcc006]{width:25vw}}",""])}});