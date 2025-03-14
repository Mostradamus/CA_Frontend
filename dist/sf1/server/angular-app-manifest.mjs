
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
      "chunk-ECWKVKTQ.js"
    ],
    "redirectTo": "/Dashboard/Home",
    "route": "/Dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-OZ2KIKXV.js",
      "chunk-IBCYM47V.js",
      "chunk-KZ54M7YS.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-TFJG7D7U.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Formatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-JU44QBJY.js",
      "chunk-FXLSQFUA.js",
      "chunk-XUMLRPPR.js",
      "chunk-KZ54M7YS.js",
      "chunk-KISEIIKX.js",
      "chunk-3R3MCFW5.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Formatos/Lista"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-FGPXBD5Q.js",
      "chunk-OY4YKE4Y.js",
      "chunk-KISEIIKX.js",
      "chunk-3R3MCFW5.js"
    ],
    "route": "/Dashboard/Formatos/Registro"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-HN7BXGFE.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-MJXDHNLH.js",
      "chunk-IBCYM47V.js",
      "chunk-FXLSQFUA.js",
      "chunk-XUMLRPPR.js",
      "chunk-KZ54M7YS.js",
      "chunk-OY4YKE4Y.js",
      "chunk-KISEIIKX.js",
      "chunk-3R3MCFW5.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control/Revision"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-GWJ76R57.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-XUMLRPPR.js",
      "chunk-3R3MCFW5.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Control/CompararFormatos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-QO744DFC.js"
    ],
    "route": "/Dashboard/Detalle"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-PLX2QCAB.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-KISEIIKX.js",
      "chunk-3R3MCFW5.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Reportes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ECWKVKTQ.js",
      "chunk-PLX2QCAB.js",
      "chunk-WNOISBUY.js",
      "chunk-IBCYM47V.js",
      "chunk-KISEIIKX.js",
      "chunk-3R3MCFW5.js",
      "chunk-IHG4VJW6.js"
    ],
    "route": "/Dashboard/Reportes/Areas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27834, hash: '757807c9c1f7669e5d98d785e6e92633dc50b89c619f41609574c37ba1464e87', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1529, hash: '07e9ce642370b52cbd135df82552a715fcfe2a359de54e0414895b67cdbe4621', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/index.html': {size: 46540, hash: '572c9acbea60723de8c52a317e53af66f1679abbdb4f3f2b56c353bab1d56460', text: () => import('./assets-chunks/Dashboard_Formatos_index_html.mjs').then(m => m.default)},
    'Dashboard/Home/index.html': {size: 46644, hash: '80310edfd39cd862bd489783641b0814b5a78b56b8753b2b0c89219e49480183', text: () => import('./assets-chunks/Dashboard_Home_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Lista/index.html': {size: 46800, hash: 'ce2dd88b118c14f2fe43eafb0b1f712480832b9814d6c473e9b417b366052955', text: () => import('./assets-chunks/Dashboard_Formatos_Lista_index_html.mjs').then(m => m.default)},
    'Login/index.html': {size: 105569, hash: 'f6357e92812820e9c106a17e1095742c3eab7f1a4da6d152eff0750a157839c7', text: () => import('./assets-chunks/Login_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/Revision/index.html': {size: 46904, hash: 'cab59d341a61c77f1af0cc4b5e1a37e024ea78ef59eb4234fa73741eaf4b50ed', text: () => import('./assets-chunks/Dashboard_Control_Revision_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/index.html': {size: 46540, hash: '3b27b17f6a6a43ee5ddcadb929ff2b94ef4b4b06f4619080bdcedd13d27b16f4', text: () => import('./assets-chunks/Dashboard_Control_index_html.mjs').then(m => m.default)},
    'Dashboard/Formatos/Registro/index.html': {size: 46644, hash: '0b2c40cc2cc088e4064291b09ab802b7be5025012207d0abd8d8f00bfb0fb643', text: () => import('./assets-chunks/Dashboard_Formatos_Registro_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/Areas/index.html': {size: 46748, hash: '1eb978469a1bbe19e86fe6362fe35609ae2e58df508786334d4155b6a68c719b', text: () => import('./assets-chunks/Dashboard_Reportes_Areas_index_html.mjs').then(m => m.default)},
    'Dashboard/Reportes/index.html': {size: 46748, hash: '1eb978469a1bbe19e86fe6362fe35609ae2e58df508786334d4155b6a68c719b', text: () => import('./assets-chunks/Dashboard_Reportes_index_html.mjs').then(m => m.default)},
    'Dashboard/Detalle/index.html': {size: 46488, hash: '43d7f2c2577aa36703a8bb406d7ba7df6722ee43e7f8a70e6631b1d3f7a75919', text: () => import('./assets-chunks/Dashboard_Detalle_index_html.mjs').then(m => m.default)},
    'Dashboard/Control/CompararFormatos/index.html': {size: 46748, hash: '0638f00d9c07dae1d512b83f18d0daf3ee784a4caa5b346b8cdacbba51907a8e', text: () => import('./assets-chunks/Dashboard_Control_CompararFormatos_index_html.mjs').then(m => m.default)},
    'styles-MYSAVWYM.css': {size: 388013, hash: 'bniZyqGHm74', text: () => import('./assets-chunks/styles-MYSAVWYM_css.mjs').then(m => m.default)}
  },
};
