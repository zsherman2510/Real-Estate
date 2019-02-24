(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        RealEstate: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/components/RealEstate.js", "vendors~RealEstate" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/Filter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Filter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "filter"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "inside"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "buying-option",\n      className: "filters buying-option"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "For Rent"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "For Sale"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Foreclosures"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "New Construction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "By Agent"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "By Owner")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "neighborhood",\n      className: "filters neighborhood"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Choose Neighborhood"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Oro Valley"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Vail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "South Tucson"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Casa Grande")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "housetype",\n      className: "filters housetype"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Choose House type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Ranch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Condo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Townhouse")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "bedrooms",\n      className: "filters bedrooms"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Choose bedrooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "2+ BR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "3+ BR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "4+ BR")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "bathrooms",\n      className: "filters bathrooms"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "Choose bathrooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "2+ BA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "3+ BA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: ""\n    }, "4+ BA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min-price",\n      className: "min-price",\n      placeholder: "min"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max-price",\n      className: "max-price",\n      placeholder: "max"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters floor-space"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Floor Space"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min-floor-space",\n      className: "min-floor-space",\n      placeholder: "min"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max-floor-space",\n      className: "max-floor-space",\n      placeholder: "max"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters radius"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Radius"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min-radius",\n      className: "min-radius",\n      placeholder: "min"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max-radius",\n      className: "max-radius",\n      placeholder: "max"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Extras"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Elevators"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "extras",\n      value: "elevator",\n      type: "checkbox"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Swimming Pool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "extras",\n      value: "swimming-pool",\n      type: "checkbox"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Finished Basement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "extras",\n      value: "finished-basement",\n      type: "checkbox"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "extras"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Gym"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      name: "extras",\n      value: "gym",\n      type: "checkbox"\n    })))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Filter.js?');
    },
    "./assets/js/components/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "logo"\n    }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Create ads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "About us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Log In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "register-btn"\n    }, "Register")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Header.js?');
    },
    "./assets/js/components/Listings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listings; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");\n\n\nclass Listings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "listings"\n    }, "Listings", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "search-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "search"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "sort-by-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "results"\n    }, "390 results found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "sort-options"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "sort-by",\n      className: "sort-by",\n      id: ""\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-asc"\n    }, "Highest Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-asc"\n    }, "Lowest Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "view"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"], {\n      icon: "th-list"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"], {\n      icon: "th"\n    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "listings-results"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "listing"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "listing-img"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "address"\n    }, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "details"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "user-img"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "user-details"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "user-name"\n    }, "Cheryl Spoon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "date"\n    }, "02/15/2018")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "listing-details"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "floor-space"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"], {\n      icon: "square"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "1500 ft\\xB2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "bedrooms"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"], {\n      icon: "bed"\n    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "4 bedrooms")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "furnished"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"], {\n      icon: "couch"\n    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "unfurnished"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "bottom-info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$2000 / month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[/* FontAwesomeIcon */ "a"], {\n      icon: "map-marker"\n    }), " Oro Valley, AZ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "pagination"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "pagination-nums"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Next"))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Listings.js?');
    },
    "./assets/js/components/RealEstate.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./assets/js/components/Header.js");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter */ "./assets/js/components/Filter.js");\n/* harmony import */ var _Listings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listings */ "./assets/js/components/Listings.js");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__[/* library */ "b"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[/* faTh */ "e"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[/* faSquare */ "d"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[/* faBed */ "a"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[/* faCouch */ "b"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[/* faThList */ "f"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[/* faMapMarker */ "c"]);\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "content-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Listings__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)));\n  }\n\n}\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), app);\n\n//# sourceURL=webpack:///./assets/js/components/RealEstate.js?');
    }
});