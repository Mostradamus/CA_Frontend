
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/Login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js"
    ],
    "redirectTo": "/Dashboard/Home",
    "route": "/Dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-DA7LW6ZL.js",
      "chunk-IBCYM47V.js",
      "chunk-SNGJMCFE.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-TFJG7D7U.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Formatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-XKGDM4UT.js",
      "chunk-OOHYJIGL.js",
      "chunk-TI5KDG2I.js",
      "chunk-SNGJMCFE.js",
      "chunk-PIVHWQS3.js",
      "chunk-36QOPV6A.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Formatos/Lista"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-G4LYSBYP.js",
      "chunk-MIVVXBUJ.js",
      "chunk-PIVHWQS3.js",
      "chunk-36QOPV6A.js"
    ],
    "route": "/Dashboard/Formatos/Registro"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-HN7BXGFE.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-UFDK25LE.js",
      "chunk-IBCYM47V.js",
      "chunk-OOHYJIGL.js",
      "chunk-TI5KDG2I.js",
      "chunk-SNGJMCFE.js",
      "chunk-MIVVXBUJ.js",
      "chunk-PIVHWQS3.js",
      "chunk-36QOPV6A.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control/Revision"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-LLVQE3FR.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-TI5KDG2I.js",
      "chunk-36QOPV6A.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control/CompararFormatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-QO744DFC.js"
    ],
    "route": "/Dashboard/Detalle"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-XJLVEP6Q.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-PIVHWQS3.js",
      "chunk-36QOPV6A.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Reportes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5SVHLS4.js",
      "chunk-XJLVEP6Q.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-PIVHWQS3.js",
      "chunk-36QOPV6A.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Reportes/Areas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27834, hash: '455748ad6bd40db1795e7d6f3996793a3b68d257e2f2811764ca26cda103de1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1529, hash: '0e84b04ebf276fcf5857bfc3e029796a3dea2881df65b68d73ae79fad8916373', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Dashboard/Home/index.html': {size: 46644, hash: '6488d60ec5e58dd2f8f9825acb552e0a6717e533730a6875e38c2d38b09b953e', text: () => import('./assets-chunks/Dashboard_Home_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Registro/index.html': {size: 46644, hash: '9352ca927ac34f09965b029697f408ce677f1d59c73013da4430babc822f4949', text: () => import('./assets-chunks/Dashboard_Formatos_Registro_index_html.mjs').then(m => m.default)},
    'Login/index.html': {size: 105569, hash: 'ab512318c676c0904232a70835d1efdf6f36aa478948b14f6da0d8d1e3b386ab', text: () => import('./assets-chunks/Login_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/index.html': {size: 46540, hash: '7bb382d2c55acb610166ec36d8b6b026403b2f9a1005e202a948a38afa63461e', text: () => import('./assets-chunks/Dashboard_Formatos_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/index.html': {size: 46540, hash: 'ee1d1950864484f9bae9ccf3b0115fce81afe07c78fac9e3f91af85667f6f347', text: () => import('./assets-chunks/Dashboard_Control_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/Revision/index.html': {size: 46904, hash: '1dbadc1b6c6c0dc17bac805f90f85ae2867125e4e60580817a8c18579f1e7def', text: () => import('./assets-chunks/Dashboard_Control_Revision_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Lista/index.html': {size: 46800, hash: 'aa8794a28f7b4b9afa003594bc04f513d5468174a78fd73ba830590db7394b8b', text: () => import('./assets-chunks/Dashboard_Formatos_Lista_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/CompararFormatos/index.html': {size: 46748, hash: '58270b72352b794bc572074e6908065a49d0a8482358e5f4b8f6cfd1938ff6f1', text: () => import('./assets-chunks/Dashboard_Control_CompararFormatos_index_html.mjs').then(m => m.default)},
    'Dashboard/Detalle/index.html': {size: 46488, hash: 'b494805b298ed2ee297f851475f269bed9776ab05834764bbbc3fb3f6d69f03f', text: () => import('./assets-chunks/Dashboard_Detalle_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/index.html': {size: 46748, hash: '3ec3d950f5af1795f075cf0b61b3e0b413ec7fb89aeaa6f448b7450071d2bdb1', text: () => import('./assets-chunks/Dashboard_Reportes_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/Areas/index.html': {size: 46748, hash: '3ec3d950f5af1795f075cf0b61b3e0b413ec7fb89aeaa6f448b7450071d2bdb1', text: () => import('./assets-chunks/Dashboard_Reportes_Areas_index_html.mjs').then(m => m.default)},
    'styles-MYSAVWYM.css': {size: 388013, hash: 'bniZyqGHm74', text: () => import('./assets-chunks/styles-MYSAVWYM_css.mjs').then(m => m.default)}
  },
};
