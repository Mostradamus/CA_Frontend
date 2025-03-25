
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
      "chunk-HKXO3QRD.js"
    ],
    "redirectTo": "/Dashboard/Home",
    "route": "/Dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-NLETIMRQ.js",
      "chunk-ZXQVIJWL.js",
      "chunk-2LAHSN3Q.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-XLAKQMBX.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Formatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-KTG7VEKY.js",
      "chunk-LEHQHKU5.js",
      "chunk-YY2R4NVC.js",
      "chunk-2LAHSN3Q.js",
      "chunk-ZNPE2TNR.js",
      "chunk-OEICDYPO.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Formatos/Lista"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-AXK5ZZFU.js",
      "chunk-67VRUSWX.js",
      "chunk-ZNPE2TNR.js",
      "chunk-OEICDYPO.js"
    ],
    "route": "/Dashboard/Formatos/Registro"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-77X26T7F.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Control"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-Y3OZ5CBA.js",
      "chunk-ZXQVIJWL.js",
      "chunk-LEHQHKU5.js",
      "chunk-YY2R4NVC.js",
      "chunk-2LAHSN3Q.js",
      "chunk-67VRUSWX.js",
      "chunk-ZNPE2TNR.js",
      "chunk-OEICDYPO.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Control/Revision"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-ZYWZHAO2.js",
      "chunk-WNOISBUY.js",
      "chunk-ZXQVIJWL.js",
      "chunk-YY2R4NVC.js",
      "chunk-OEICDYPO.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Control/CompararFormatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-6VNRX6D7.js",
      "chunk-WNOISBUY.js",
      "chunk-ZXQVIJWL.js",
      "chunk-ZNPE2TNR.js",
      "chunk-OEICDYPO.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Reportes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HKXO3QRD.js",
      "chunk-6VNRX6D7.js",
      "chunk-WNOISBUY.js",
      "chunk-ZXQVIJWL.js",
      "chunk-ZNPE2TNR.js",
      "chunk-OEICDYPO.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Reportes/Areas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27834, hash: '0f77bc07549ba0fb42ebe5cc9ecd7afb84adf1d4d28e5522fd4aa23ec018a46b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1529, hash: '73d4f5261140900dec302da4d417dd85aefce284ff77308d922eda76cec5c9b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Dashboard/Home/index.html': {size: 46644, hash: 'cd1a5f2bed91a3b366f8dc3ea2911e128a547d3f8a9daf79d583f93a1dcfd712', text: () => import('./assets-chunks/Dashboard_Home_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/index.html': {size: 46540, hash: 'ce28e56b9e6d1e3249a5a073a773359ef6c5547453ec211e0480737a2c33efc3', text: () => import('./assets-chunks/Dashboard_Formatos_index_html.mjs').then(m => m.default)},
    'Login/index.html': {size: 105569, hash: '3ba36e62130c19676b3e7b036c3c0cd560d2320184a89ae6828dbb64a60128ff', text: () => import('./assets-chunks/Login_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Registro/index.html': {size: 46644, hash: '5687f423781358ebcb5c9a235252f961432839f39e49e817923abc4547cfcb1f', text: () => import('./assets-chunks/Dashboard_Formatos_Registro_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Lista/index.html': {size: 46800, hash: 'ede15c16aa2f1804a40c9d96c3c8eedbba1bf05e500aeadbe61a518ac994ec05', text: () => import('./assets-chunks/Dashboard_Formatos_Lista_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/index.html': {size: 46540, hash: '583bd9e76e81c7c8a02016af38404b7853b2cff8422acf4671156b3098980c59', text: () => import('./assets-chunks/Dashboard_Control_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/CompararFormatos/index.html': {size: 46748, hash: 'c8629f371180a4c749dbc5fff9bd8be43f6a4b8c8328359a26b4cb4a5de5cc0e', text: () => import('./assets-chunks/Dashboard_Control_CompararFormatos_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/index.html': {size: 46748, hash: 'bdf7ec0e3531472696409736c693bfc0b5b6278deef70ed0309d826d9d50cdb3', text: () => import('./assets-chunks/Dashboard_Reportes_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/Revision/index.html': {size: 46904, hash: 'f235f25b51ef92ad775ea00f131908455317a2f3b55a6f7e90bfab2b5f215cbb', text: () => import('./assets-chunks/Dashboard_Control_Revision_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/Areas/index.html': {size: 46748, hash: 'bdf7ec0e3531472696409736c693bfc0b5b6278deef70ed0309d826d9d50cdb3', text: () => import('./assets-chunks/Dashboard_Reportes_Areas_index_html.mjs').then(m => m.default)},
    'styles-MYSAVWYM.css': {size: 388013, hash: 'bniZyqGHm74', text: () => import('./assets-chunks/styles-MYSAVWYM_css.mjs').then(m => m.default)}
  },
};
