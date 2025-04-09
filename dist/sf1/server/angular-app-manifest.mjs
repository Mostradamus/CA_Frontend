
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
      "chunk-32VHTVP7.js"
    ],
    "redirectTo": "/Dashboard/Home",
    "route": "/Dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-AWHDGLEF.js",
      "chunk-ZXQVIJWL.js",
      "chunk-CUL3TJ66.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-XLAKQMBX.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Formatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-OURGFRLK.js",
      "chunk-REZSSU6F.js",
      "chunk-637D3NZ2.js",
      "chunk-CUL3TJ66.js",
      "chunk-23LUYKWL.js",
      "chunk-34QUJOS2.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Formatos/Lista"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-MHSQZ7OI.js",
      "chunk-KGKOZXMN.js",
      "chunk-23LUYKWL.js",
      "chunk-34QUJOS2.js"
    ],
    "route": "/Dashboard/Formatos/Registro"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-77X26T7F.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Control"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-3BUSXYNN.js",
      "chunk-ZXQVIJWL.js",
      "chunk-REZSSU6F.js",
      "chunk-637D3NZ2.js",
      "chunk-CUL3TJ66.js",
      "chunk-KGKOZXMN.js",
      "chunk-23LUYKWL.js",
      "chunk-34QUJOS2.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Control/Revision"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-LNLRN3XI.js",
      "chunk-WNOISBUY.js",
      "chunk-ZXQVIJWL.js",
      "chunk-637D3NZ2.js",
      "chunk-34QUJOS2.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Control/CompararFormatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-QBMYG2MB.js",
      "chunk-WNOISBUY.js",
      "chunk-ZXQVIJWL.js",
      "chunk-23LUYKWL.js",
      "chunk-34QUJOS2.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Reportes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-32VHTVP7.js",
      "chunk-QBMYG2MB.js",
      "chunk-WNOISBUY.js",
      "chunk-ZXQVIJWL.js",
      "chunk-23LUYKWL.js",
      "chunk-34QUJOS2.js",
      "chunk-64M3X7FN.js"
    ],
    "route": "/Dashboard/Reportes/Areas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27834, hash: '094636f5f58fa63700e9e5d18dbc7d2bb8b1007a9d1feb95ee18c7c37c459137', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1529, hash: '3537a59c090a96506e5d171332f8760622477353b252e14d090e1e5c926b8876', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Dashboard/Home/index.html': {size: 46644, hash: '23781f67882bfe99026f5ab57ee4412ee200d59d56f6290ad14d4fa443dd4f89', text: () => import('./assets-chunks/Dashboard_Home_index_html.mjs').then(m => m.default)},
    'Login/index.html': {size: 105569, hash: '38358b61381fb8f7c9bc767fc4195de70b38ff7b4e084b95098f96a0f4b3a537', text: () => import('./assets-chunks/Login_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/index.html': {size: 46540, hash: '1a350c198275371f0f07859c4f96500f9b2ab8a8f1ddcb7d4d4de474a9b19e79', text: () => import('./assets-chunks/Dashboard_Formatos_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Lista/index.html': {size: 46800, hash: 'b625dc9281877920d5a077e3bb48cce18b18799f554be1e6ad9759c71fd0f367', text: () => import('./assets-chunks/Dashboard_Formatos_Lista_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/index.html': {size: 46540, hash: '93e64aff749325176986c3b56f4bb2c1d80b101aa7c1dc5665bb519df55ffbfb', text: () => import('./assets-chunks/Dashboard_Control_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/Revision/index.html': {size: 46904, hash: 'a9dbd460ceb98d06ccf4e853e988a98681219997c22a0851432d09e1795f0151', text: () => import('./assets-chunks/Dashboard_Control_Revision_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/CompararFormatos/index.html': {size: 46748, hash: 'e22f8eb8a98b0198c4d2c72e6ea76d014b276fb88885ef77138fc09804ff7552', text: () => import('./assets-chunks/Dashboard_Control_CompararFormatos_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/index.html': {size: 46748, hash: '7e57c5733341c39e190ec9b30efee0a1f5949e883594d59427640f9f8281606f', text: () => import('./assets-chunks/Dashboard_Reportes_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/Areas/index.html': {size: 46748, hash: '7e57c5733341c39e190ec9b30efee0a1f5949e883594d59427640f9f8281606f', text: () => import('./assets-chunks/Dashboard_Reportes_Areas_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Registro/index.html': {size: 46644, hash: '0fb47a862f45640180f2fe2ecb87c11d6e2107fd6495f028da8eb247ca73cbc9', text: () => import('./assets-chunks/Dashboard_Formatos_Registro_index_html.mjs').then(m => m.default)},
    'styles-MYSAVWYM.css': {size: 388013, hash: 'bniZyqGHm74', text: () => import('./assets-chunks/styles-MYSAVWYM_css.mjs').then(m => m.default)}
  },
};
