exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 60547:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 11436:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 94513))

/***/ }),

/***/ 64604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZR: () => (/* binding */ CreateApi),
  Sp: () => (/* binding */ DeleteApi),
  VF: () => (/* binding */ ListApi),
  zw: () => (/* binding */ RetrieveApi),
  vh: () => (/* binding */ UpdateApi)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
;// CONCATENATED MODULE: ./src/api/urls.ts
/**
 * API Base URL 
 */ const baseUrl = "https://backend.dafkur.com/api/";
/**
 * List of Short Link API endpoint
 */ const listUrl = `/short-link/`;
/**
 * Detail of Short Link API endpoint
 * @param custom Parsing the unique data
 */ const detailUrl = (custom)=>`/short-link/${custom}/`;

;// CONCATENATED MODULE: ./src/api/apis.ts


axios/* default */.Z.defaults.baseURL = baseUrl;
/**
 * Short Link List API Function
 * @returns API Response Object
 */ async function ListApi() {
    return await axios/* default */.Z.get(listUrl).then((response)=>{
        return response;
    }).catch((error)=>{
        return error.response;
    });
}
/**
 * Short Link Retrieve API Function
 * @returns API Response Object
 */ async function RetrieveApi(custom) {
    return await axios/* default */.Z.get(detailUrl(custom)).then((response)=>{
        return response;
    }).catch((error)=>{
        return error.response;
    });
}
/**
 * Short Link Create API Function
 * @param data Parsing request body from create form
 * @returns API Response Object
 */ async function CreateApi(data) {
    return await axios/* default */.Z.post(listUrl, data).then((response)=>{
        return response;
    }).catch((error)=>{
        return error.response;
    });
}
/**
 * Short Link Update API Function
 * @returns API Response Object
 */ async function UpdateApi(custom, data) {
    return await axios/* default */.Z.patch(detailUrl(custom), data).then((response)=>{
        return response;
    }).catch((error)=>{
        return error.response;
    });
}
/**
 * Short Link Delete API Function
 * @param data Parsing foreign key data
 * @returns API Response Object
 */ async function DeleteApi(custom) {
    return await axios/* default */.Z.delete(detailUrl(custom)).then((response)=>{
        return response;
    }).catch((error)=>{
        return error.response;
    });
}


/***/ }),

/***/ 94513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(99973);
// EXTERNAL MODULE: ./src/styles/app.scss
var app = __webpack_require__(18502);
// EXTERNAL MODULE: ./node_modules/antd/lib/layout/index.js
var layout = __webpack_require__(7501);
// EXTERNAL MODULE: ./node_modules/antd/lib/space/index.js
var space = __webpack_require__(72442);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Container.js
var Container = __webpack_require__(46887);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Nav.js
var Nav = __webpack_require__(72581);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Navbar.js
var Navbar = __webpack_require__(51293);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/component/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





/**
 * Navigation bar layout for homepage layout
 * @returns Navbar Component
 */ function Navbar_Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        className: "bg-body-tertiary",
        fixed: "top",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Short Link App"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                    className: "ms-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                            className: "mx-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Short Link List"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                            className: "mx-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/create",
                                children: "Create Link"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/utils/atom.ts
var atom = __webpack_require__(49538);
// EXTERNAL MODULE: ./node_modules/antd/lib/notification/index.js
var notification = __webpack_require__(23577);
// EXTERNAL MODULE: ./node_modules/jotai/esm/react.mjs
var react = __webpack_require__(65750);
;// CONCATENATED MODULE: ./src/component/Notification.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Notification() {
    const notifData = (0,react/* useAtomValue */.Dv)(atom/* globalNotif */.v);
    const [notif, contextNotif] = notification/* default */.ZP.useNotification();
    const openNotif = (type, title, message)=>{
        if (type === "success") {
            notif.success({
                message: title,
                description: message,
                placement: "topRight"
            });
        } else if (type === "error") notif.error({
            message: title,
            description: message,
            placement: "topRight"
        });
    };
    (0,react_.useEffect)(()=>{
        if (notifData.type && notifData.title && notifData.message) {
            openNotif(notifData.type, notifData.title, notifData.message);
        }
    }, [
        notifData
    ]);
    return contextNotif;
}

;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







/**
 * Homepage Layout Component
 * @param children Layout content as a children of layout component
 * @returns Layout Component
 */ function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(space["default"], {
                direction: "vertical",
                style: {
                    width: "100%"
                },
                size: [
                    0,
                    48
                ],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Notification, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z.Content, {
                                style: {
                                    minHeight: "99vh"
                                },
                                className: "d-flex flex-column justify-content-center align-items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                                    children: children
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 49538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ globalNotif)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1111);

/**
 * Define a global notification state
 */ const globalNotif = (0,jotai__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    type: "",
    title: "",
    message: ""
});


/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Project\short-link\src\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 18502:
/***/ (() => {



/***/ })

};
;