
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
      "chunk-TPWJZVMB.js"
    ],
    "redirectTo": "/Dashboard/Home",
    "route": "/Dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-GENCORAB.js",
      "chunk-IBCYM47V.js",
      "chunk-NS3RRJYJ.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-TFJG7D7U.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Formatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-6BKKTH2O.js",
      "chunk-FHQZZSCN.js",
      "chunk-TWFQIZNU.js",
      "chunk-NS3RRJYJ.js",
      "chunk-TU6XLHCU.js",
      "chunk-SWDNTVYT.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Formatos/Lista"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-SRCVFICV.js",
      "chunk-3FJMCMKX.js",
      "chunk-TU6XLHCU.js",
      "chunk-SWDNTVYT.js"
    ],
    "route": "/Dashboard/Formatos/Registro"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-HN7BXGFE.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-BGCCTMKV.js",
      "chunk-IBCYM47V.js",
      "chunk-FHQZZSCN.js",
      "chunk-TWFQIZNU.js",
      "chunk-NS3RRJYJ.js",
      "chunk-3FJMCMKX.js",
      "chunk-TU6XLHCU.js",
      "chunk-SWDNTVYT.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control/Revision"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-YCNBBCQD.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-TWFQIZNU.js",
      "chunk-SWDNTVYT.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control/CompararFormatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-QO744DFC.js"
    ],
    "route": "/Dashboard/Detalle"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-LWKNIBFN.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-TU6XLHCU.js",
      "chunk-SWDNTVYT.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Reportes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TPWJZVMB.js",
      "chunk-LWKNIBFN.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-TU6XLHCU.js",
      "chunk-SWDNTVYT.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Reportes/Areas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27834, hash: '9c55a530d50b42e24e93a974a948f0c217f4369825bb5c24b830ead7b3251abd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1529, hash: '42dcef82e432ba2e1a859f48680f0323a96d182a514280324dee6fcf32d9bbff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Dashboard/Home/index.html': {size: 46644, hash: '49d4811eed03a7c476a4ed9ed584c8cdc79be83310b096259e0564267f112096', text: () => import('./assets-chunks/Dashboard_Home_index_html.mjs').then(m => m.default)},
    'Login/index.html': {size: 105569, hash: 'b934ca97742f57398df78578f46f24bc0946aae8c28d4a22c92e30c66a03d267', text: () => import('./assets-chunks/Login_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Registro/index.html': {size: 46644, hash: '3f9657994e2a5cb18815a86f2f5191a297e2a419d84ce02cb07a1771a39567ff', text: () => import('./assets-chunks/Dashboard_Formatos_Registro_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/index.html': {size: 46540, hash: '4695d46954fb4e512999afae0ac1aa27e8e612bf7032cbe9d65042d44bfb4ebf', text: () => import('./assets-chunks/Dashboard_Control_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/Revision/index.html': {size: 46904, hash: '9cbf66303b1fd784f12cbe4472644a3bc8f3ff92ae87a52fe4748647e8fca772', text: () => import('./assets-chunks/Dashboard_Control_Revision_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Lista/index.html': {size: 46800, hash: '98ea886a1266e9e8a860bbc9eb0ca2c837f84a9e66df1fc2c7fc3ddc35f8f0cd', text: () => import('./assets-chunks/Dashboard_Formatos_Lista_index_html.mjs').then(m => m.default)},
    'Dashboard/Detalle/index.html': {size: 46488, hash: 'ed86d950c0d2852855e16ecb6849a7719a654307a28e0c1f1f63de616b6f54e8', text: () => import('./assets-chunks/Dashboard_Detalle_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/CompararFormatos/index.html': {size: 46748, hash: 'caa227b09d21c380c1e055c3d579e4f52a3106f955a2a5f23fa046e002dc9fb9', text: () => import('./assets-chunks/Dashboard_Control_CompararFormatos_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/index.html': {size: 46540, hash: 'fbcbba32cb8b0da5b6b33063a2334e079e203191ca2b0e3b42de9d8091f80151', text: () => import('./assets-chunks/Dashboard_Formatos_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/Areas/index.html': {size: 46748, hash: '65bbb2f2916edb15ec9c018e620c62b5860145c27cdc1cf587e78c3bcef89f8b', text: () => import('./assets-chunks/Dashboard_Reportes_Areas_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/index.html': {size: 46748, hash: '65bbb2f2916edb15ec9c018e620c62b5860145c27cdc1cf587e78c3bcef89f8b', text: () => import('./assets-chunks/Dashboard_Reportes_index_html.mjs').then(m => m.default)},
    'styles-MYSAVWYM.css': {size: 388013, hash: 'bniZyqGHm74', text: () => import('./assets-chunks/styles-MYSAVWYM_css.mjs').then(m => m.default)}
  },
};
