TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": {
   "opacity": 0.4,
   "class": "Menu",
   "fontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "backgroundColor": "#404040",
   "label": "Media",
   "rollOverFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
   "children": [
    {
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem",
     "label": "vista princial (exterior)"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem",
     "label": "vista princiipal (Interior)"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem",
     "label": "Entrada principal"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem",
     "label": "Recepção "
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem",
     "label": "Sala da história da terra "
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem",
     "label": "salas das rochas de Moçambique "
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem",
     "label": "Recursos Petrolíferos de Moçambique da Pesquisa a Produção "
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem",
     "label": "Sala de Cristalografia "
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem",
     "label": "Sala de Propriedade Física dos Minerais "
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem",
     "label": "Sala de Mineralogia e Coleção do Mineral"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem",
     "label": "Sala de Mineralogia e Coleção do Mineral"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem",
     "label": "Sala da Aplicação dos Minerais "
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem",
     "label": "Sala da Aplicação dos Minerais "
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem",
     "label": "Recepção"
    }
   ],
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8
  },
  "label": "vista princial (exterior)",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "loop": true,
    "id": "audio_8AEB381E_8206_99B8_41D8_CE3E21E9A398",
    "audio": {
     "oggUrl": "media/audio_8AEB381E_8206_99B8_41D8_CE3E21E9A398.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8AEB381E_8206_99B8_41D8_CE3E21E9A398.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_79F750E9_7E71_F5D1_41CB_024F877F5709",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_77E84E42_7E87_2E32_41A9_7173F111E4B4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_0_HS_1_0.png",
           "height": 250,
           "class": "ImageResourceLevel",
           "width": 188
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.25,
        "roll": 0,
        "pitch": -3.38,
        "yaw": 26.49
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_0_HS_1_1_0_map.gif",
           "height": 125,
           "class": "ImageResourceLevel",
           "width": 94
          }
         ]
        },
        "pitch": -3.38,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 26.49,
        "hfov": 11.25
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "inertia": false,
      "id": "panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_tcap0",
      "hfov": 45.6,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "angle": 5
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_7CF79E25_76FA_AAE8_41D9_F54CB4A22DD1",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_0_HS_4_0.png",
           "height": 88,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.85,
        "pitch": -3.31,
        "yaw": 26.57
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_0_HS_4_0_0_map.gif",
           "height": 44,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ]
        },
        "pitch": -3.31,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 26.57,
        "hfov": 4.85
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_t.jpg"
   }
  ]
 },
 {
  "gyroscopeEnabled": true,
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_acceleration",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "buttonCardboardView": "this.IconButton_6532DAD6_763C_C652_41D0_872D455656AA",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "id": "sequence_7D55BDBB_7603_42D2_41C6_5CC80CF68A9E",
   "movements": [
    {
     "yawSpeed": 10.61,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.61,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.61,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_7D55BDBB_7603_42D2_41C6_5CC80CF68A9E",
  "automaticRotationSpeed": 15,
  "automaticZoomSpeed": 10,
  "manualZoomSpeed": 2,
  "initialPosition": {
   "pitch": 2.06,
   "class": "PanoramaCameraPosition",
   "hfov": 94,
   "yaw": -74.15
  },
  "id": "panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_camera",
  "timeToIdle": 5000
 },
 {
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "vista princiipal (Interior)",
  "hfovMax": 142,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "loop": true,
    "id": "audio_8BC2AEFB_8145_CA1B_41DD_6F7E2343A025",
    "audio": {
     "oggUrl": "media/audio_8BC2AEFB_8145_CA1B_41DD_6F7E2343A025.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8BC2AEFB_8145_CA1B_41DD_6F7E2343A025.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B892D6_7E71_95F3_41D6_CFB560503714",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_77C92F3F_7E85_6E52_41D4_5A9A50BC7DB5",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_0_HS_0_0.png",
           "height": 222,
           "class": "ImageResourceLevel",
           "width": 354
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.46,
        "pitch": -16.15,
        "yaw": 14.12
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_0_HS_0_0_0_map.gif",
           "height": 111,
           "class": "ImageResourceLevel",
           "width": 177
          }
         ]
        },
        "pitch": -16.15,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 14.12,
        "hfov": 20.46
       }
      ]
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.8,
      "pitch": 66.88,
      "id": "overlay_758167F5_7FD7_5F26_41DB_035756488EA3",
      "bleaching": 1,
      "yaw": -165.96
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B892D6_7E71_95F3_41D6_CFB560503714_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -9.84,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -141.56
  },
  "id": "panorama_78B892D6_7E71_95F3_41D6_CFB560503714_camera"
 },
 {
  "mapLocations": [
   {
    "y": 3001.2,
    "class": "PanoramaMapLocation",
    "map": {
     "scaleMode": "fit_to_height",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879.jpeg",
        "height": 994,
        "class": "ImageResourceLevel",
        "width": 1600
       },
       {
        "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_lq.jpeg",
        "height": 497,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 800
       }
      ]
     },
     "class": "Map",
     "initialZoomFactor": 1,
     "label": "planta02",
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideOpacity": 0.64,
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_0.png",
           "height": 76,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 181.56,
        "x": 341.36,
        "height": 463.37,
        "y": 2769.51
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 463.37,
        "y": 2769.51,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_0_map.gif",
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ]
        },
        "width": 181.56,
        "x": 341.36
       },
       "id": "overlay_66196B39_7605_47DE_41A0_2D6CDC15CC15",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_1.png",
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 20
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 122.11,
        "x": 970.11,
        "height": 138.16,
        "y": 2177.79
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 138.16,
        "y": 2177.79,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_1_map.gif",
           "height": 11,
           "class": "ImageResourceLevel",
           "width": 10
          }
         ]
        },
        "width": 122.11,
        "x": 970.11
       },
       "id": "overlay_66292201_760C_C1AE_41D3_EBDA1108B442",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_2.png",
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 21
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 127.44,
        "x": 980.33,
        "height": 127.64,
        "y": 3630.97
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 127.64,
        "y": 3630.97,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_2_map.gif",
           "height": 10,
           "class": "ImageResourceLevel",
           "width": 10
          }
         ]
        },
        "width": 127.44,
        "x": 980.33
       },
       "id": "overlay_6724579A_7605_4ED2_41CA_856C56A50874",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 13)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_3.png",
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 32
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 198.66,
        "x": 625.91,
        "height": 224.51,
        "y": 1382.2
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 224.51,
        "y": 1382.2,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_3_map.gif",
           "height": 18,
           "class": "ImageResourceLevel",
           "width": 16
          }
         ]
        },
        "width": 198.66,
        "x": 625.91
       },
       "id": "overlay_665ECEAF_7604_FEF2_41B9_0F99E48396CE",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_4.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 26
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 161.34,
        "x": 2116.86,
        "height": 186.04,
        "y": 1354.94
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 186.04,
        "y": 1354.94,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_4_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 13
          }
         ]
        },
        "width": 161.34,
        "x": 2116.86
       },
       "id": "overlay_666445D3_761C_C252_41BC_21C14E1AA835",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_5.png",
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 154.65,
        "x": 2554.2,
        "height": 133.33,
        "y": 467.93
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 133.33,
        "y": 467.93,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_5_map.gif",
           "height": 11,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 154.65,
        "x": 2554.2
       },
       "id": "overlay_64BD1EBF_761C_FED2_41D9_E8F8CFD6710D",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_6.png",
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 34
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 209.99,
        "x": 4299.03,
        "height": 161.12,
        "y": 593.99
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 161.12,
        "y": 593.99,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_6_map.gif",
           "height": 13,
           "class": "ImageResourceLevel",
           "width": 17
          }
         ]
        },
        "width": 209.99,
        "x": 4299.03
       },
       "id": "overlay_67D7552E_7604_C3F2_41C9_4F3BF90645AD",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_7.png",
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 31
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 191.88,
        "x": 3509.54,
        "height": 172.21,
        "y": 2725.79
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 172.21,
        "y": 2725.79,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_7_map.gif",
           "height": 14,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ]
        },
        "width": 191.88,
        "x": 3509.54
       },
       "id": "overlay_67C192B7_7607_C6D2_41D5_9D2C1D565616",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_8.png",
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 165.57,
        "x": 3440.82,
        "height": 136.51,
        "y": 4019.97
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 136.51,
        "y": 4019.97,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_8_map.gif",
           "height": 11,
           "class": "ImageResourceLevel",
           "width": 13
          }
         ]
        },
        "width": 165.57,
        "x": 3440.82
       },
       "id": "overlay_67244730_7605_4FEE_41C7_711A6FB578E4",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_9.png",
           "height": 111,
           "class": "ImageResourceLevel",
           "width": 43
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 265.61,
        "x": 1850.48,
        "height": 675.62,
        "y": 4681.54
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 675.62,
        "y": 4681.54,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_9_map.gif",
           "height": 55,
           "class": "ImageResourceLevel",
           "width": 21
          }
         ]
        },
        "width": 265.61,
        "x": 1850.48
       },
       "id": "overlay_67DE2E9E_763D_5ED2_41D9_9F2ADE28F775",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 10)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_10.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 31
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 192.03,
        "x": 2442.31,
        "height": 152.18,
        "y": 5021.13
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 152.18,
        "y": 5021.13,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_HS_10_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ]
        },
        "width": 192.03,
        "x": 2442.31
       },
       "id": "overlay_6C19A935_7DC2_C3A5_419E_8A6762D31CF9",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ]
      }
     ],
     "fieldOfViewOverlayRadiusScale": 0.03,
     "height": 6010,
     "width": 9667,
     "thumbnailUrl": "media/map_67E77627_7607_41F1_41D8_26AE7593A879_t.jpg",
     "id": "map_67E77627_7607_41F1_41D8_26AE7593A879",
     "fieldOfViewOverlayInsideColor": "#FFFFFF"
    },
    "angle": -6.4,
    "x": 432.14
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Entrada principal",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "loop": true,
    "id": "audio_8BD87EBE_8144_CA1D_41C3_7671F783A9F9",
    "audio": {
     "oggUrl": "media/audio_8BD87EBE_8144_CA1D_41C3_7671F783A9F9.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8BD87EBE_8144_CA1D_41C3_7671F783A9F9.mp3"
    }
   }
  ],
  "hfovMin": 66,
  "id": "panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_7611E5E8_7F88_79EB_41C4_78768065B065",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_0_HS_0_0.png",
           "height": 338,
           "class": "ImageResourceLevel",
           "width": 470
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 27.09,
        "pitch": -16.4,
        "yaw": 89.78
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_0_HS_0_0_0_map.gif",
           "height": 143,
           "class": "ImageResourceLevel",
           "width": 200
          }
         ]
        },
        "pitch": -16.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 89.78,
        "hfov": 27.09
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_t.jpg"
   }
  ]
 },
 {
  "viewerArea": "this.MapViewer",
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained"
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 2.06,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -84.68
  },
  "id": "panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_camera"
 },
 {
  "mapLocations": [
   {
    "y": 2246.87,
    "class": "PanoramaMapLocation",
    "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "angle": 21.93,
    "x": 1031.16
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Recep\u00e7\u00e3o ",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "loop": true,
    "id": "audio_8B892CD8_820B_9AB8_41A9_F3BF02BA8B77",
    "audio": {
     "oggUrl": "media/audio_8B892CD8_820B_9AB8_41A9_F3BF02BA8B77.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8B892CD8_820B_9AB8_41A9_F3BF02BA8B77.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "backwardYaw": -97.43,
    "panorama": {
     "mapLocations": [
      {
       "y": 3694.79,
       "class": "PanoramaMapLocation",
       "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
       "angle": 203.6,
       "x": 1044.05
      }
     ],
     "class": "Panorama",
     "partial": false,
     "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
     "label": "Recep\u00e7\u00e3o",
     "hfovMax": 120,
     "audios": [
      {
       "class": "PanoramaAudio",
       "autoplay": true,
       "id": "audio_68B22A14_7BF2_1A64_41D4_59A7596D1D71",
       "audio": {
        "oggUrl": "media/audio_74BB1FB2_7BF2_19BC_41D5_329AEA54FA9E.ogg",
        "class": "AudioResource",
        "mp3Url": "media/audio_74BB1FB2_7BF2_19BC_41D5_329AEA54FA9E.mp3",
        "id": "audioresource_68B21A14_7BF2_1A64_41DB_37CD85E6C9A7"
       }
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": 160,
       "panorama": "this.panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9",
       "class": "AdjacentPanorama",
       "yaw": -97.43,
       "distance": 1
      }
     ],
     "id": "panorama_78B46400_7E70_9C4F_41D7_408158C189CE",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8C8EE9AA_846C_0A62_41D1_3FB9A3AC6456",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_0_HS_0_0.png",
              "height": 206,
              "class": "ImageResourceLevel",
              "width": 206
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 12.28,
           "pitch": -7.43,
           "yaw": -97.43
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9, this.camera_8BB6B903_86A0_3B6E_41B8_C0F3867811C7); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_0_HS_0_0_0_map.gif",
              "height": 103,
              "class": "ImageResourceLevel",
              "width": 103
             }
            ]
           },
           "pitch": -7.43,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -97.43,
           "hfov": 12.28
          }
         ]
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_78B46400_7E70_9C4F_41D7_408158C189CE_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "yaw": 160,
    "distance": 1
   }
  ],
  "id": "panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_7665E90B_7F88_962D_41D9_C05BA77175D5",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_0_HS_0_0.png",
           "height": 107,
           "class": "ImageResourceLevel",
           "width": 94
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.36,
        "pitch": -18.89,
        "yaw": 29.78
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_0_HS_0_0_0_map.gif",
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 47
          }
         ]
        },
        "pitch": -18.89,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 29.78,
        "hfov": 5.36
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_7419CAC0_7FD9_0C14_41D9_A456575FB797",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_0_HS_1_0.png",
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 65
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.66,
        "pitch": -20.88,
        "yaw": 160
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_78B46400_7E70_9C4F_41D7_408158C189CE, this.camera_8BBAC916_86A0_3B96_41E0_10430FCAD477); this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_0_HS_1_0_0_map.gif",
           "height": 44,
           "class": "ImageResourceLevel",
           "width": 32
          }
         ]
        },
        "pitch": -20.88,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 160,
        "hfov": 3.66
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_9466B67D_86AA_AF78_41B8_29026576E290",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_0_HS_2_0.png",
           "height": 265,
           "class": "ImageResourceLevel",
           "width": 414
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 24.49,
        "roll": 0,
        "pitch": 10.22,
        "yaw": 63.9
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_905486F0_86BF_AF88_41CD_EFB4093DE1B5, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, null, null, null, 4000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_0_HS_2_1_0_map.gif",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 200
          }
         ]
        },
        "pitch": 10.22,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 63.9,
        "hfov": 24.49
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_94068E94_86A6_BF8F_41D1_AE710B9CB189",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_0_HS_3_0.png",
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 108
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.45,
        "pitch": 9.16,
        "yaw": 56.17
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_0_HS_3_0_0_map.gif",
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "pitch": 9.16,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 56.17,
        "hfov": 6.45
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/popup_905486F0_86BF_AF88_41CD_EFB4093DE1B5_0_0.png"
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "70%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_905486F0_86BF_AF88_41CD_EFB4093DE1B5",
      "hideEasing": "cubic_out",
      "hfov": 24.01,
      "pitch": 10.22,
      "showEasing": "cubic_in",
      "yaw": 63.9
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 1.51,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 67.55
  },
  "id": "panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_camera"
 },
 {
  "mapLocations": [
   {
    "y": 1494.46,
    "class": "PanoramaMapLocation",
    "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "angle": 52.72,
    "x": 725.24
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Sala da hist\u00f3ria da terra ",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_8A3E18A6_815B_562A_41DC_FBC4AE920505",
    "audio": {
     "oggUrl": "media/audio_8A3E18A6_815B_562A_41DC_FBC4AE920505.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8A3E18A6_815B_562A_41DC_FBC4AE920505.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_75985743_7FDB_5F63_41D7_1FECC4F28589",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_0_0.png",
           "height": 115,
           "class": "ImageResourceLevel",
           "width": 108
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.17,
        "pitch": -19.14,
        "yaw": 54.56
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_0_0_0_map.gif",
           "height": 57,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "pitch": -19.14,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 54.56,
        "hfov": 6.17
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_771E302B_7D60_2977_41B4_BE7C3F78E968",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_1_0.png",
           "height": 457,
           "class": "ImageResourceLevel",
           "width": 614
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 35.68,
        "roll": 0,
        "pitch": -40.71,
        "yaw": 120.53
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8BF0DD6D_85AA_6298_41DD_48A894541536, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_88278BD6_85A9_E588_41D3_1C9ED57DA0F6, null, null, 5000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_1_1_0_map.gif",
           "height": 148,
           "class": "ImageResourceLevel",
           "width": 200
          }
         ]
        },
        "pitch": -40.71,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 120.53,
        "hfov": 35.68
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_767B22A2_7DA0_2971_41BD_327DA432DF8A",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_2_0.png",
           "height": 469,
           "class": "ImageResourceLevel",
           "width": 386
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.87,
        "roll": 0,
        "pitch": -31.55,
        "yaw": 69.44
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_96D33360_86DA_E688_41D6_82E1B1501073, null, null, 3000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_2_1_0_map.gif",
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 164
          }
         ]
        },
        "pitch": -31.55,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 69.44,
        "hfov": 22.87
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_76034EE7_7DA0_16FF_41C3_CF9523C93605",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_3_0.png",
           "height": 138,
           "class": "ImageResourceLevel",
           "width": 221
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.23,
        "roll": 0,
        "pitch": -15.71,
        "yaw": 23.85
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':10,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':10,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':10,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':10,'rollOverIconColor':'#666666','iconHeight':10,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':10,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_71B225EA_7DA0_6AF1_41D3_63FF0F2CBC16, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_3_1_0_map.gif",
           "height": 69,
           "class": "ImageResourceLevel",
           "width": 110
          }
         ]
        },
        "pitch": -15.71,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 23.85,
        "hfov": 13.23
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB_0_4.jpg",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB_0_3.jpg",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 300,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 300,
      "id": "popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB",
      "hideEasing": "cubic_out",
      "hfov": 13.29,
      "pitch": -15.71,
      "showEasing": "cubic_in",
      "yaw": 23.85
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8BEDC9EC_80DD_2F8A_41D5_6DE455FE0497",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_6_0.png",
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 163
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.54,
        "pitch": -14.23,
        "yaw": 22.69
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_6_0_0_map.gif",
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 81
          }
         ]
        },
        "pitch": -14.23,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 22.69,
        "hfov": 9.54
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B093D0F_80DD_6486_41DA_CD4A9493B922",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_5_0.png",
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 102
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.31,
        "pitch": -29.84,
        "yaw": 65.36
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_5_0_0_map.gif",
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 51
          }
         ]
        },
        "pitch": -29.84,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 65.36,
        "hfov": 5.31
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8CA00FD2_80DF_239E_41DD_FFBB0CFFFE6E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_4_0.png",
           "height": 100,
           "class": "ImageResourceLevel",
           "width": 126
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.96,
        "pitch": -38.39,
        "yaw": 118.66
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_4_0_0_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ]
        },
        "pitch": -38.39,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 118.66,
        "hfov": 5.96
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_89925AE8_8205_FE98_41DF_6AA8708C041C",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_8_0.png",
           "height": 96,
           "class": "ImageResourceLevel",
           "width": 102
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.12,
        "roll": 0,
        "pitch": 1.35,
        "yaw": 77.63
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8E61D956_820A_BB88_4163_E3C7F07D90EE, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8EB433C3_820E_EE89_41C3_5EBA19C2A10D, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_8_1_0_map.gif",
           "height": 48,
           "class": "ImageResourceLevel",
           "width": 51
          }
         ]
        },
        "pitch": 1.35,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 77.63,
        "hfov": 6.12
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8E61D956_820A_BB88_4163_E3C7F07D90EE_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8E61D956_820A_BB88_4163_E3C7F07D90EE_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8E61D956_820A_BB88_4163_E3C7F07D90EE",
      "hideEasing": "cubic_out",
      "hfov": 6.11,
      "pitch": 1.35,
      "showEasing": "cubic_in",
      "yaw": 77.63
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8ED4AB5B_8205_9FB8_41D7_9CADAE2D93F7",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_13_0.png",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 100
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.04,
        "pitch": 1.4,
        "yaw": 77.7
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_13_0_0_map.gif",
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 50
          }
         ]
        },
        "pitch": 1.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 77.7,
        "hfov": 6.04
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8F01E98F_821A_9A99_41D1_DBB1B4381E63",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_12_0.png",
           "height": 131,
           "class": "ImageResourceLevel",
           "width": 171
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.28,
        "roll": 0,
        "pitch": 0.77,
        "yaw": 87.9
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8D31729D_86E0_2E9A_41CB_8EAD954CECF3, null, null, 4000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_12_1_0_map.gif",
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 85
          }
         ]
        },
        "pitch": 0.77,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 87.9,
        "hfov": 10.28
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C327AD9_821A_9EB8_41DB_359FDECA099D",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_11_0.png",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 75
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.55,
        "pitch": 0.94,
        "yaw": 88.03
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8C887408_823E_6998_41D6_134AC2C98186, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_11_0_0_map.gif",
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 37
          }
         ]
        },
        "pitch": 0.94,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 88.03,
        "hfov": 4.55
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8DA65A62_8207_998B_414F_1DE356628E0C",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_10_0.png",
           "height": 212,
           "class": "ImageResourceLevel",
           "width": 131
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.88,
        "roll": 0,
        "pitch": -0.1,
        "yaw": 142.16
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8C8F3409_823E_6998_41C2_A796C5063CE3, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_10_1_0_map.gif",
           "height": 106,
           "class": "ImageResourceLevel",
           "width": 65
          }
         ]
        },
        "pitch": -0.1,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 142.16,
        "hfov": 7.88
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94",
      "hideEasing": "cubic_out",
      "hfov": 7.87,
      "pitch": -0.1,
      "showEasing": "cubic_in",
      "yaw": 142.16
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 300,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 300,
      "id": "popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84",
      "hideEasing": "cubic_out",
      "hfov": 4.55,
      "pitch": 0.94,
      "showEasing": "cubic_in",
      "yaw": 88.03
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8F328AB3_823E_9E88_41D4_3E2451447FD8",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_9_0.png",
           "height": 82,
           "class": "ImageResourceLevel",
           "width": 90
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.44,
        "pitch": -0.31,
        "yaw": 142.18
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_9_0_0_map.gif",
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 45
          }
         ]
        },
        "pitch": -0.31,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 142.18,
        "hfov": 5.44
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8FF08CE3_821E_9A8F_41D0_44E6FF7BC1C6",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_21_0.png",
           "height": 440,
           "class": "ImageResourceLevel",
           "width": 369
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 21.9,
        "roll": 0,
        "pitch": 9.59,
        "yaw": -97.72
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8BD39FBA_86E0_169E_41E0_0CC238FD5BD0, null, null, 8000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_21_1_0_map.gif",
           "height": 200,
           "class": "ImageResourceLevel",
           "width": 167
          }
         ]
        },
        "pitch": 9.59,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -97.72,
        "hfov": 21.9
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8CC621F9_821A_AA78_41DF_40DBC5467CB4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_20_0.png",
           "height": 254,
           "class": "ImageResourceLevel",
           "width": 204
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.04,
        "pitch": 10.6,
        "yaw": -98.56
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_20_0_0_map.gif",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 102
          }
         ]
        },
        "pitch": 10.6,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -98.56,
        "hfov": 12.04
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C152E8F_8207_9698_41D9_DAB968CDF639",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_19_0.png",
           "height": 343,
           "class": "ImageResourceLevel",
           "width": 194
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.61,
        "roll": 0,
        "pitch": 12.56,
        "yaw": -30.5
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8D731622_8206_E988_418F_24C6190850D0, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_92AD6248_8205_A987_41C3_F40A9ED0465F, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_19_1_0_map.gif",
           "height": 171,
           "class": "ImageResourceLevel",
           "width": 97
          }
         ]
        },
        "pitch": 12.56,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -30.5,
        "hfov": 11.61
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8D731622_8206_E988_418F_24C6190850D0_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8D731622_8206_E988_418F_24C6190850D0_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8D731622_8206_E988_418F_24C6190850D0",
      "hideEasing": "cubic_out",
      "hfov": 11.18,
      "pitch": 12.56,
      "showEasing": "cubic_in",
      "yaw": -30.5
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8FB9F6DF_820A_B6B8_41DF_4FF384F713D4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_18_0.png",
           "height": 182,
           "class": "ImageResourceLevel",
           "width": 172
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.1,
        "pitch": 12.34,
        "yaw": -30.46
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_18_0_0_map.gif",
           "height": 91,
           "class": "ImageResourceLevel",
           "width": 86
          }
         ]
        },
        "pitch": 12.34,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -30.46,
        "hfov": 10.1
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C755204_820A_6988_41DC_4B221546BA49",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_17_0.png",
           "height": 332,
           "class": "ImageResourceLevel",
           "width": 303
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.03,
        "roll": 0,
        "pitch": -4.75,
        "yaw": 36.37
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8D33A2A2_86E0_2EAE_419E_85FED80D2CA4, null, null, 4000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_17_1_0_map.gif",
           "height": 166,
           "class": "ImageResourceLevel",
           "width": 151
          }
         ]
        },
        "pitch": -4.75,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 36.37,
        "hfov": 18.03
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C502471_8206_A989_41DB_2E628F044DD1",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_16_0.png",
           "height": 91,
           "class": "ImageResourceLevel",
           "width": 81
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.87,
        "pitch": 1.79,
        "yaw": 37.45
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_16_0_0_map.gif",
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ]
        },
        "pitch": 1.79,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 37.45,
        "hfov": 4.87
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C4E0984_8206_9A88_41CC_3CF76EC724F4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_15_0.png",
           "height": 644,
           "class": "ImageResourceLevel",
           "width": 1214
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 64.93,
        "roll": 0,
        "pitch": 20.95,
        "yaw": 27.01
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8FFF4C31_820B_F988_41C2_726B1E8774DC, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_92AD324B_8205_A999_41D3_E512F684B103, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_15_1_0_map.gif",
           "height": 106,
           "class": "ImageResourceLevel",
           "width": 199
          }
         ]
        },
        "pitch": 20.95,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 27.01,
        "hfov": 64.93
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8FFF4C31_820B_F988_41C2_726B1E8774DC_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8FFF4C31_820B_F988_41C2_726B1E8774DC_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8FFF4C31_820B_F988_41C2_726B1E8774DC",
      "hideEasing": "cubic_out",
      "hfov": 59.97,
      "pitch": 20.95,
      "showEasing": "cubic_in",
      "yaw": 27.01
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8CE6DCD5_820A_9A89_41D0_92DF68F998BE",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_14_0.png",
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 103
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.81,
        "pitch": 20.86,
        "yaw": 40.65
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_14_0_0_map.gif",
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 51
          }
         ]
        },
        "pitch": 20.86,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 40.65,
        "hfov": 5.81
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8F2F640E_820A_E99B_41D1_B7C151DB9BF5",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_23_0.png",
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 109
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.57,
        "roll": 0,
        "pitch": -10.5,
        "yaw": 7.2
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8D8DBD1C_823E_9BB8_41C0_FBA179AF0A5C, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_23_1_0_map.gif",
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "pitch": -10.5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 7.2,
        "hfov": 6.57
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7",
      "hideEasing": "cubic_out",
      "hfov": 6.56,
      "pitch": -10.5,
      "showEasing": "cubic_in",
      "yaw": 7.2
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8CF66F30_8207_B788_41BE_8F83E71D3AA4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_22_0.png",
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 51
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.07,
        "pitch": -9.98,
        "yaw": 7.18
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_0_HS_22_0_0_map.gif",
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "pitch": -9.98,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 7.18,
        "hfov": 3.07
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8BF0DD6D_85AA_6298_41DD_48A894541536_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8BF0DD6D_85AA_6298_41DD_48A894541536_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8BF0DD6D_85AA_6298_41DD_48A894541536",
      "hideEasing": "cubic_out",
      "hfov": 39.75,
      "pitch": -40.71,
      "showEasing": "cubic_in",
      "yaw": 120.53
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9",
      "hideEasing": "cubic_out",
      "hfov": 21.46,
      "pitch": -31.55,
      "showEasing": "cubic_in",
      "yaw": 69.44
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914",
      "hideEasing": "cubic_out",
      "hfov": 10.27,
      "pitch": 0.77,
      "showEasing": "cubic_in",
      "yaw": 87.9
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A",
      "hideEasing": "cubic_out",
      "hfov": 17.81,
      "pitch": -4.75,
      "showEasing": "cubic_in",
      "yaw": 36.37
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182",
      "hideEasing": "cubic_out",
      "hfov": 21.13,
      "pitch": 9.59,
      "showEasing": "cubic_in",
      "yaw": -97.72
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.55,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 29.45
  },
  "id": "panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_camera"
 },
 {
  "mapLocations": [
   {
    "y": 534.59,
    "class": "PanoramaMapLocation",
    "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "angle": -41.08,
    "x": 2631.53
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "salas das rochas de Mo\u00e7ambique ",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "loop": true,
    "id": "audio_8BE26DB0_820A_9A88_41A5_5B18053E37E4",
    "audio": {
     "oggUrl": "media/audio_8BE26DB0_820A_9A88_41A5_5B18053E37E4.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8BE26DB0_820A_9A88_41A5_5B18053E37E4.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_772DA704_7FD9_041C_41DA_26F4311CBC05",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_0_HS_0_0.png",
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 58
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.45,
        "pitch": -12.88,
        "yaw": 132.15
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_0_HS_0_0_0_map.gif",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "pitch": -12.88,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 132.15,
        "hfov": 3.45
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8F5B4816_823B_9988_41D4_32FFDB1117B4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_0_HS_1_0.png",
           "height": 83,
           "class": "ImageResourceLevel",
           "width": 220
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.19,
        "roll": 0,
        "pitch": -24.43,
        "yaw": -127.72
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8CCA9AD1_8206_7E88_41A1_21FD73976C59, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_0_HS_1_1_0_map.gif",
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 110
          }
         ]
        },
        "pitch": -24.43,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -127.72,
        "hfov": 13.19
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 300,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 300,
      "id": "popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8",
      "hideEasing": "cubic_out",
      "hfov": 13.05,
      "pitch": -24.43,
      "showEasing": "cubic_in",
      "yaw": -127.72
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8D4E7949_8205_BB98_41B1_FE338F9DC7AA",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_0_HS_2_0.png",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 131
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.35,
        "pitch": -21.5,
        "yaw": -129.6
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_0_HS_2_0_0_map.gif",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 65
          }
         ]
        },
        "pitch": -21.5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -129.6,
        "hfov": 7.35
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 1.16,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -142.55
  },
  "id": "panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_camera"
 },
 {
  "mapLocations": [
   {
    "y": 674.55,
    "class": "PanoramaMapLocation",
    "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "angle": 51.83,
    "x": 4404.03
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Recursos Petrol\u00edferos de Mo\u00e7ambique da Pesquisa a Produ\u00e7\u00e3o ",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "loop": true,
    "id": "audio_8BF14E4D_8206_9998_41D8_939F759D6C55",
    "audio": {
     "oggUrl": "media/audio_8BF14E4D_8206_9998_41D8_939F759D6C55.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8BF14E4D_8206_9998_41D8_939F759D6C55.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_76752502_7FD9_0414_41D4_8603DB9BC17F",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_0_0.png",
           "height": 64,
           "class": "ImageResourceLevel",
           "width": 71
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.88,
        "pitch": -25.98,
        "yaw": 157.3
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_0_0_0_map.gif",
           "height": 32,
           "class": "ImageResourceLevel",
           "width": 35
          }
         ]
        },
        "pitch": -25.98,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 157.3,
        "hfov": 3.88
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_682B13C6_7DC5_C6E4_41BD_C418712CF68E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_3_0.png",
           "height": 218,
           "class": "ImageResourceLevel",
           "width": 259
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.46,
        "roll": 0,
        "pitch": -19.72,
        "yaw": -43.66
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8DC5DE2D_823A_9998_41D3_66F59C469655, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8C13BB96_823A_9E88_41DA_30E2872595C3, null, null, 4000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_3_1_0_map.gif",
           "height": 109,
           "class": "ImageResourceLevel",
           "width": 129
          }
         ]
        },
        "pitch": -19.72,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -43.66,
        "hfov": 15.46
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_683266B4_7DCE_4EA4_41CA_0782D6955872",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_2_0.png",
           "height": 330,
           "class": "ImageResourceLevel",
           "width": 822
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 46.61,
        "roll": 0,
        "pitch": -21.9,
        "yaw": 79
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_68B4E85B_7DC2_41EC_41D3_DEB9BF3BBC46, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_2_1_0_map.gif",
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 200
          }
         ]
        },
        "pitch": -21.9,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 79,
        "hfov": 46.61
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653_0_4.jpg",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653_0_3.jpg",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 300,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 300,
      "id": "popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653",
      "hideEasing": "cubic_out",
      "hfov": 46.21,
      "pitch": -21.9,
      "showEasing": "cubic_in",
      "yaw": 79
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_68932AD8_7DC6_46EC_41C4_F1CB7D967DD2",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_1_0.png",
           "height": 333,
           "class": "ImageResourceLevel",
           "width": 252
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.04,
        "roll": 0,
        "pitch": 0.57,
        "yaw": -39.62
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_68A257D5_7E42_CEE4_41D7_406276264FD3, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_684D5D99_7E42_C36D_41CA_95C9EEBDA262, null, null, 1700, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_1_1_0_map.gif",
           "height": 166,
           "class": "ImageResourceLevel",
           "width": 126
          }
         ]
        },
        "pitch": 0.57,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -39.62,
        "hfov": 15.04
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_68A257D5_7E42_CEE4_41D7_406276264FD3_0_4.jpg",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_68A257D5_7E42_CEE4_41D7_406276264FD3_0_3.jpg",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 300,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 300,
      "id": "popup_68A257D5_7E42_CEE4_41D7_406276264FD3",
      "hideEasing": "cubic_out",
      "hfov": 15.02,
      "pitch": 0.57,
      "showEasing": "cubic_in",
      "yaw": -39.62
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8CF8585A_8206_F9B8_41CD_44BDF2287131",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_5_0.png",
           "height": 788,
           "class": "ImageResourceLevel",
           "width": 1393
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 72.22,
        "roll": 0,
        "pitch": 8.88,
        "yaw": 16.76
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8C751365_820A_AF89_41E0_1451DF7B8EF3, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8DC678ED_820B_FA99_41D9_FF6D84445E94, null, null, 4000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_5_1_0_map.gif",
           "height": 113,
           "class": "ImageResourceLevel",
           "width": 200
          }
         ]
        },
        "pitch": 8.88,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 16.76,
        "hfov": 72.22
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C171FE2_821B_968B_41DA_B2EF4C2B2F03",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_4_0.png",
           "height": 164,
           "class": "ImageResourceLevel",
           "width": 124
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.24,
        "pitch": 13.95,
        "yaw": 9.85
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_4_0_0_map.gif",
           "height": 82,
           "class": "ImageResourceLevel",
           "width": 62
          }
         ]
        },
        "pitch": 13.95,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 9.85,
        "hfov": 7.24
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C0DB946_8205_BB88_4196_6E69B58D409F",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_6_0.png",
           "height": 86,
           "class": "ImageResourceLevel",
           "width": 72
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.15,
        "pitch": -17.59,
        "yaw": -44.05
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_6_0_0_map.gif",
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 36
          }
         ]
        },
        "pitch": -17.59,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -44.05,
        "hfov": 4.15
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8DC5DE2D_823A_9998_41D3_66F59C469655_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8DC5DE2D_823A_9998_41D3_66F59C469655_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8DC5DE2D_823A_9998_41D3_66F59C469655",
      "hideEasing": "cubic_out",
      "hfov": 15.65,
      "pitch": -19.72,
      "showEasing": "cubic_in",
      "yaw": -43.66
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8C751365_820A_AF89_41E0_1451DF7B8EF3_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8C751365_820A_AF89_41E0_1451DF7B8EF3_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "80%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8C751365_820A_AF89_41E0_1451DF7B8EF3",
      "hideEasing": "cubic_out",
      "hfov": 69.57,
      "pitch": 8.88,
      "showEasing": "cubic_in",
      "yaw": 16.76
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C2F61AD_820B_AA98_4182_61C743E3DB93",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_7_0.png",
           "height": 333,
           "class": "ImageResourceLevel",
           "width": 283
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.89,
        "roll": 0,
        "pitch": -3.45,
        "yaw": -171.56
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8DA34A22_8207_9988_41DB_8CAD315452A4, null, null, 3100, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_0_HS_7_1_0_map.gif",
           "height": 166,
           "class": "ImageResourceLevel",
           "width": 141
          }
         ]
        },
        "pitch": -3.45,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -171.56,
        "hfov": 16.89
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "55%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2100,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2100,
      "id": "popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388",
      "hideEasing": "cubic_out",
      "hfov": 16.85,
      "pitch": -3.45,
      "showEasing": "cubic_in",
      "yaw": -171.56
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -2.44,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 20.33
  },
  "id": "panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_camera"
 },
 {
  "mapLocations": [
   {
    "y": 2811.89,
    "class": "PanoramaMapLocation",
    "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "angle": -5.23,
    "x": 3605.48
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Sala de Cristalografia ",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "loop": true,
    "id": "audio_882E1208_8206_E987_41DA_F099F7E9B053",
    "audio": {
     "oggUrl": "media/audio_882E1208_8206_E987_41DA_F099F7E9B053.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_882E1208_8206_E987_41DA_F099F7E9B053.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_760DF7E8_7FD9_0414_41D2_2F3C29305FD6",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_0_HS_0_0.png",
           "height": 75,
           "class": "ImageResourceLevel",
           "width": 79
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.58,
        "pitch": -15.81,
        "yaw": 141.55
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_0_HS_0_0_0_map.gif",
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 39
          }
         ]
        },
        "pitch": -15.81,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 141.55,
        "hfov": 4.58
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8A8706E0_85AE_AF88_417A_06D95521F3A0",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_0_HS_1_0.png",
           "height": 258,
           "class": "ImageResourceLevel",
           "width": 326
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.41,
        "roll": 0,
        "pitch": -9.17,
        "yaw": 112.17
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_94B97CC7_86EA_E388_41D4_152A1A2CAEA0, null, null, 3000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_0_HS_1_1_0_map.gif",
           "height": 129,
           "class": "ImageResourceLevel",
           "width": 163
          }
         ]
        },
        "pitch": -9.17,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 112.17,
        "hfov": 19.41
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3",
      "hideEasing": "cubic_out",
      "hfov": 19.69,
      "pitch": -9.17,
      "showEasing": "cubic_in",
      "yaw": 112.17
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_94AD8C6F_86E6_E298_41C5_81485AF2330E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_0_HS_2_0.png",
           "height": 216,
           "class": "ImageResourceLevel",
           "width": 223
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.18,
        "pitch": -10.21,
        "yaw": 115.69
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_0_HS_2_0_0_map.gif",
           "height": 108,
           "class": "ImageResourceLevel",
           "width": 111
          }
         ]
        },
        "pitch": -10.21,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 115.69,
        "hfov": 13.18
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -2.5,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 1.12
  },
  "id": "panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_camera"
 },
 {
  "mapLocations": [
   {
    "y": 4088.22,
    "class": "PanoramaMapLocation",
    "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "angle": 132.22,
    "x": 3523.6
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Sala de Propriedade F\u00edsica dos Minerais ",
  "hfovMax": 120,
  "audios": [
   {
    "class": "DirectionalPanoramaAudio",
    "autoplay": true,
    "loop": true,
    "pitch": -2.06,
    "id": "audio_758F95E6_7BCE_69A4_41C8_63F68D1A82B7",
    "maximumAngle": 189.08,
    "yaw": -12.39,
    "audio": {
     "oggUrl": "media/audio_758F95E6_7BCE_69A4_41C8_63F68D1A82B7.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_758F95E6_7BCE_69A4_41C8_63F68D1A82B7.mp3"
    }
   },
   {
    "class": "DirectionalPanoramaAudio",
    "autoplay": true,
    "loop": true,
    "pitch": -0.83,
    "id": "audio_897093BD_821E_AEF9_41B9_ABB07135D25F",
    "maximumAngle": 57.8,
    "yaw": -133.76,
    "audio": {
     "oggUrl": "media/audio_897093BD_821E_AEF9_41B9_ABB07135D25F.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_897093BD_821E_AEF9_41B9_ABB07135D25F.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B56901_7E70_F451_41CF_79508A856682",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_75EADBCF_7FE9_0C2D_41D7_FC2D9599FB04",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_0_HS_0_0.png",
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 102
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.99,
        "pitch": -13.06,
        "yaw": 144.93
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_0_HS_0_0_0_map.gif",
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 51
          }
         ]
        },
        "pitch": -13.06,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 144.93,
        "hfov": 5.99
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B56901_7E70_F451_41CF_79508A856682_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -2.1,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -38.08
  },
  "id": "panorama_78B56901_7E70_F451_41CF_79508A856682_camera"
 },
 {
  "mapLocations": [
   {
    "y": 5097.21,
    "class": "PanoramaMapLocation",
    "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "angle": 164.88,
    "x": 2538.32
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Sala de Mineralogia e Cole\u00e7\u00e3o do Mineral",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_8A87E958_815F_5666_4191_663514F11DB3",
    "audio": {
     "oggUrl": "media/audio_8A87E958_815F_5666_4191_663514F11DB3.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8A87E958_815F_5666_4191_663514F11DB3.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B59774_7E71_9CB6_41D0_D4BC64419650",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_74FF43B8_7FEB_3C74_41D5_6DBC85050F40",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_0_HS_0_0.png",
           "height": 95,
           "class": "ImageResourceLevel",
           "width": 91
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.97,
        "pitch": -24.59,
        "yaw": 100.12
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_0_HS_0_0_0_map.gif",
           "height": 47,
           "class": "ImageResourceLevel",
           "width": 45
          }
         ]
        },
        "pitch": -24.59,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 100.12,
        "hfov": 4.97
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8D271803_8660_196E_41C1_5F7D16183355",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_0_HS_1_0.png",
           "height": 131,
           "class": "ImageResourceLevel",
           "width": 186
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.15,
        "roll": 0,
        "pitch": -14.4,
        "yaw": 31.85
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8A2FEEE5_86A0_16AA_418F_0370DBCB352A, null, null, 2000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_0_HS_1_1_0_map.gif",
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 93
          }
         ]
        },
        "pitch": -14.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 31.85,
        "hfov": 11.15
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314",
      "hideEasing": "cubic_out",
      "hfov": 11.23,
      "pitch": -14.4,
      "showEasing": "cubic_in",
      "yaw": 31.85
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 4.56,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 2.96
  },
  "id": "panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_camera"
 },
 {
  "mapLocations": [
   {
    "y": 5019.35,
    "class": "PanoramaMapLocation",
    "map": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "angle": 312.24,
    "x": 1983.28
   }
  ],
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Sala de Mineralogia e Cole\u00e7\u00e3o do Mineral",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_74BB1FB2_7BF2_19BC_41D5_329AEA54FA9E",
    "audio": "this.audioresource_68B21A14_7BF2_1A64_41DB_37CD85E6C9A7"
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B59F67_7E71_8CD2_41B4_997237A49589",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_757599E8_7FF7_0C14_41DC_387793086459",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_0_HS_0_0.png",
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 93
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.99,
        "pitch": -27.19,
        "yaw": -44.03
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_0_HS_0_0_0_map.gif",
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 46
          }
         ]
        },
        "pitch": -27.19,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -44.03,
        "hfov": 4.99
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B4678EB_8660_1ABE_41DE_99CE02032419",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_0_HS_2_0.png",
           "height": 145,
           "class": "ImageResourceLevel",
           "width": 95
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.7,
        "roll": 0,
        "pitch": -9.02,
        "yaw": 64.33
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_886B0553_8660_2BEE_41C8_695DF5551C7F, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_8C193797_8660_1696_41DE_CEAA1A0FA857, null, null, 3000, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_0_HS_2_1_0_map.gif",
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 47
          }
         ]
        },
        "pitch": -9.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 64.33,
        "hfov": 5.7
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_886B0553_8660_2BEE_41C8_695DF5551C7F_0_4.png",
         "height": 341,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_886B0553_8660_2BEE_41C8_695DF5551C7F_0_3.png",
         "height": 682,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "rotationY": 0,
      "hideDuration": 2000,
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "showDuration": 2000,
      "id": "popup_886B0553_8660_2BEE_41C8_695DF5551C7F",
      "hideEasing": "cubic_out",
      "hfov": 5.74,
      "pitch": -9.02,
      "showEasing": "cubic_in",
      "yaw": 64.33
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8C4EF82A_8660_19BE_41D4_D393DDF57001",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.34,
        "pitch": -9.97,
        "yaw": 64.58
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 36
          }
         ]
        },
        "pitch": -9.97,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 64.58,
        "hfov": 4.34
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B59F67_7E71_8CD2_41B4_997237A49589_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -0.67,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -43.21
  },
  "id": "panorama_78B59F67_7E71_8CD2_41B4_997237A49589_camera"
 },
 {
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Sala da Aplica\u00e7\u00e3o dos Minerais ",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_8ABACE49_815C_CA66_41B7_D5E4B1EC5231",
    "audio": {
     "oggUrl": "media/audio_8ABACE49_815C_CA66_41B7_D5E4B1EC5231.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8ABACE49_815C_CA66_41B7_D5E4B1EC5231.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_69203929_7BF2_66AD_41D2_86CB9EE89DAF",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_0_HS_1_0.png",
           "height": 144,
           "class": "ImageResourceLevel",
           "width": 165
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.9,
        "pitch": 2.68,
        "yaw": 53.26
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_0_HS_1_0_0_map.gif",
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 82
          }
         ]
        },
        "pitch": 2.68,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 53.26,
        "hfov": 9.9
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -9.48,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -139.32
  },
  "id": "panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_camera"
 },
 {
  "class": "Panorama",
  "partial": false,
  "cardboardMenu": "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
  "label": "Sala da Aplica\u00e7\u00e3o dos Minerais ",
  "hfovMax": 120,
  "audios": [
   {
    "class": "PanoramaAudio",
    "autoplay": true,
    "id": "audio_8AA55783_815D_5AEA_41B1_9A5551C2558F",
    "audio": {
     "oggUrl": "media/audio_8AA55783_815D_5AEA_41B1_9A5551C2558F.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_8AA55783_815D_5AEA_41B1_9A5551C2558F.mp3"
    }
   }
  ],
  "hfovMin": 60,
  "id": "panorama_78B42B78_7E70_74BF_41B2_0CE51209F218",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_74EB97AA_7FFB_0414_41B0_0E85916EF328",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_0_HS_0_0.png",
           "height": 76,
           "class": "ImageResourceLevel",
           "width": 145
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.6,
        "pitch": -40.71,
        "yaw": -17.53
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_0_HS_0_0_0_map.gif",
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 72
          }
         ]
        },
        "pitch": -40.71,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -17.53,
        "hfov": 6.6
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_t.jpg"
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -3.95,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -25.26
  },
  "id": "panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_camera"
 },
 "this.panorama_78B46400_7E70_9C4F_41D7_408158C189CE",
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.67,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -24.05
  },
  "id": "panorama_78B46400_7E70_9C4F_41D7_408158C189CE_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_79F750E9_7E71_F5D1_41CB_024F877F5709",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_79F750E9_7E71_F5D1_41CB_024F877F5709_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_78B892D6_7E71_95F3_41D6_CFB560503714",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_78B892D6_7E71_95F3_41D6_CFB560503714_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8B5D88C5_86A0_3AEA_41BD_65024DCF430E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B7CC9F_7E70_8C72_41D2_E2DAEE009AA0_camera",
    "end": "this.setComponentVisibility(this.MapViewer, true, 0, this.effect_42E0C230_48B2_B15D_41C7_899EB7DD7242, 'showEffect', false); this.setComponentVisibility(this.MapViewer, true, 0, this.effect_42E0C230_48B2_B15D_41C7_899EB7DD7242, 'showEffect', false)",
    "id": "PanoramaPlayListItem_8B5D88C5_86A0_3AEA_41BD_65024DCF430E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.MapViewer, true, 0, this.effect_42E33230_48B2_B15D_419C_5C803943731C, 'showEffect', false)"
   },
   {
    "media": "this.panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8B5C28C5_86A0_3AEA_41D2_A51D9CD4B057, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B785F5_7E70_FFB1_41B3_00D1ABB7BAB9_camera",
    "id": "PanoramaPlayListItem_8B5C28C5_86A0_3AEA_41D2_A51D9CD4B057",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8B9CB8C7_86A0_3AF6_41D5_995993D8FC9C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B6B1A4_7E73_9457_41CF_4423EE487FDC_camera",
    "id": "PanoramaPlayListItem_8B9CB8C7_86A0_3AF6_41D5_995993D8FC9C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8BA308C8_86A0_3AFA_41D6_44A19929AE75, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B72776_7E73_9CB3_41C7_8495CDBD481D_camera",
    "id": "PanoramaPlayListItem_8BA308C8_86A0_3AFA_41D6_44A19929AE75",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8BA388C9_86A0_3AFA_41D7_D83657FB4CEB, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B6DBD2_7E73_8BF2_41BE_8D8D95D11B0D_camera",
    "id": "PanoramaPlayListItem_8BA388C9_86A0_3AFA_41D7_D83657FB4CEB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8BA238C9_86A0_3AFA_41D9_63DBBB4A8B85, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B52223_7E70_B451_41C8_3AF0B9FAE1C8_camera",
    "id": "PanoramaPlayListItem_8BA238C9_86A0_3AFA_41D9_63DBBB4A8B85",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_78B56901_7E70_F451_41CF_79508A856682",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8BA2A8CA_86A0_3AFE_41CD_1E0EE807D103, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B56901_7E70_F451_41CF_79508A856682_camera",
    "id": "PanoramaPlayListItem_8BA2A8CA_86A0_3AFE_41CD_1E0EE807D103",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_78B59774_7E71_9CB6_41D0_D4BC64419650",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8BA2C8CA_86A0_3AFE_41DA_E17443C875DB, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B59774_7E71_9CB6_41D0_D4BC64419650_camera",
    "id": "PanoramaPlayListItem_8BA2C8CA_86A0_3AFE_41DA_E17443C875DB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_78B59F67_7E71_8CD2_41B4_997237A49589",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8BA148CB_86A0_3AFE_41D9_5712740F8366, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B59F67_7E71_8CD2_41B4_997237A49589_camera",
    "id": "PanoramaPlayListItem_8BA148CB_86A0_3AFE_41D9_5712740F8366",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_78B44C45_7E70_8CD1_41D4_8FAA7B36BB25_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_78B42B78_7E70_74BF_41B2_0CE51209F218",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_78B42B78_7E70_74BF_41B2_0CE51209F218_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_78B46400_7E70_9C4F_41D7_408158C189CE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_8BA058CC_86A0_3AFA_41D6_107817ACA1BA, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_78B46400_7E70_9C4F_41D7_408158C189CE_camera",
    "id": "PanoramaPlayListItem_8BA058CC_86A0_3AFA_41D6_107817ACA1BA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
 {
  "items": [
   {
    "media": "this.map_67E77627_7607_41F1_41D8_26AE7593A879",
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "class": "PlayList",
  "id": "playList_8B5E08C3_86A0_3AEE_41D6_21A3509FC4AF"
 },
 "this.Menu_8BA0D8CD_86A0_3AFA_41CF_94FE813694B5",
 "this.popup_905486F0_86BF_AF88_41CD_EFB4093DE1B5",
 "this.popup_8BF0DD6D_85AA_6298_41DD_48A894541536",
 {
  "class": "ImageResource",
  "id": "ImageResource_88278BD6_85A9_E588_41D3_1C9ED57DA0F6",
  "levels": [
   {
    "url": "media/popup_8BF0DD6D_85AA_6298_41DD_48A894541536_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8BF0DD6D_85AA_6298_41DD_48A894541536_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8BF0DD6D_85AA_6298_41DD_48A894541536_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8BF0DD6D_85AA_6298_41DD_48A894541536_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8BF0DD6D_85AA_6298_41DD_48A894541536_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9",
 {
  "class": "ImageResource",
  "id": "ImageResource_96D33360_86DA_E688_41D6_82E1B1501073",
  "levels": [
   {
    "url": "media/popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_95DEEAFE_86E6_E77B_41C6_066D3EDC86E9_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB",
 {
  "class": "ImageResource",
  "id": "ImageResource_71B225EA_7DA0_6AF1_41D3_63FF0F2CBC16",
  "levels": [
   {
    "url": "media/popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB_0_0.jpg",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB_0_1.jpg",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB_0_2.jpg",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB_0_3.jpg",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_76E0DD43_7DA0_FB37_41C3_B9A2A8C7EDBB_0_4.jpg",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8E61D956_820A_BB88_4163_E3C7F07D90EE",
 {
  "class": "ImageResource",
  "id": "ImageResource_8EB433C3_820E_EE89_41C3_5EBA19C2A10D",
  "levels": [
   {
    "url": "media/popup_8E61D956_820A_BB88_4163_E3C7F07D90EE_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8E61D956_820A_BB88_4163_E3C7F07D90EE_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8E61D956_820A_BB88_4163_E3C7F07D90EE_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8E61D956_820A_BB88_4163_E3C7F07D90EE_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8E61D956_820A_BB88_4163_E3C7F07D90EE_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914",
 {
  "class": "ImageResource",
  "id": "ImageResource_8D31729D_86E0_2E9A_41CB_8EAD954CECF3",
  "levels": [
   {
    "url": "media/popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8D745B4C_86E0_3FFA_41D5_B44CD268E914_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84",
 {
  "class": "ImageResource",
  "id": "ImageResource_8C887408_823E_6998_41D6_134AC2C98186",
  "levels": [
   {
    "url": "media/popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8E9DC559_823E_EBB8_41C6_0892DEC43C84_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94",
 {
  "class": "ImageResource",
  "id": "ImageResource_8C8F3409_823E_6998_41C2_A796C5063CE3",
  "levels": [
   {
    "url": "media/popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8C6F9708_820D_9798_41CB_2E6F3D1FED94_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182",
 {
  "class": "ImageResource",
  "id": "ImageResource_8BD39FBA_86E0_169E_41E0_0CC238FD5BD0",
  "levels": [
   {
    "url": "media/popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8D46DB46_86E0_1FE9_41C4_9BA3E7547182_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8D731622_8206_E988_418F_24C6190850D0",
 {
  "class": "ImageResource",
  "id": "ImageResource_92AD6248_8205_A987_41C3_F40A9ED0465F",
  "levels": [
   {
    "url": "media/popup_8D731622_8206_E988_418F_24C6190850D0_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8D731622_8206_E988_418F_24C6190850D0_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8D731622_8206_E988_418F_24C6190850D0_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8D731622_8206_E988_418F_24C6190850D0_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8D731622_8206_E988_418F_24C6190850D0_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A",
 {
  "class": "ImageResource",
  "id": "ImageResource_8D33A2A2_86E0_2EAE_419E_85FED80D2CA4",
  "levels": [
   {
    "url": "media/popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8D4899DF_86E0_3A96_41C2_14F63063AD7A_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8FFF4C31_820B_F988_41C2_726B1E8774DC",
 {
  "class": "ImageResource",
  "id": "ImageResource_92AD324B_8205_A999_41D3_E512F684B103",
  "levels": [
   {
    "url": "media/popup_8FFF4C31_820B_F988_41C2_726B1E8774DC_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8FFF4C31_820B_F988_41C2_726B1E8774DC_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8FFF4C31_820B_F988_41C2_726B1E8774DC_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8FFF4C31_820B_F988_41C2_726B1E8774DC_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8FFF4C31_820B_F988_41C2_726B1E8774DC_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7",
 {
  "class": "ImageResource",
  "id": "ImageResource_8D8DBD1C_823E_9BB8_41C0_FBA179AF0A5C",
  "levels": [
   {
    "url": "media/popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8CDF0890_8205_9A88_41D5_020CC92A4DF7_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8",
 {
  "class": "ImageResource",
  "id": "ImageResource_8CCA9AD1_8206_7E88_41A1_21FD73976C59",
  "levels": [
   {
    "url": "media/popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8CC6A8F4_823A_7A8F_41DD_7C4FD78D6CE8_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8DC5DE2D_823A_9998_41D3_66F59C469655",
 {
  "class": "ImageResource",
  "id": "ImageResource_8C13BB96_823A_9E88_41DA_30E2872595C3",
  "levels": [
   {
    "url": "media/popup_8DC5DE2D_823A_9998_41D3_66F59C469655_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8DC5DE2D_823A_9998_41D3_66F59C469655_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8DC5DE2D_823A_9998_41D3_66F59C469655_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8DC5DE2D_823A_9998_41D3_66F59C469655_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8DC5DE2D_823A_9998_41D3_66F59C469655_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653",
 {
  "class": "ImageResource",
  "id": "ImageResource_68B4E85B_7DC2_41EC_41D3_DEB9BF3BBC46",
  "levels": [
   {
    "url": "media/popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653_0_0.jpg",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653_0_1.jpg",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653_0_2.jpg",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653_0_3.jpg",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_68B9EE50_7DC6_41FC_41D2_953EDFE05653_0_4.jpg",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_68A257D5_7E42_CEE4_41D7_406276264FD3",
 {
  "class": "ImageResource",
  "id": "ImageResource_684D5D99_7E42_C36D_41CA_95C9EEBDA262",
  "levels": [
   {
    "url": "media/popup_68A257D5_7E42_CEE4_41D7_406276264FD3_0_0.jpg",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_68A257D5_7E42_CEE4_41D7_406276264FD3_0_1.jpg",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_68A257D5_7E42_CEE4_41D7_406276264FD3_0_2.jpg",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_68A257D5_7E42_CEE4_41D7_406276264FD3_0_3.jpg",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_68A257D5_7E42_CEE4_41D7_406276264FD3_0_4.jpg",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8C751365_820A_AF89_41E0_1451DF7B8EF3",
 {
  "class": "ImageResource",
  "id": "ImageResource_8DC678ED_820B_FA99_41D9_FF6D84445E94",
  "levels": [
   {
    "url": "media/popup_8C751365_820A_AF89_41E0_1451DF7B8EF3_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8C751365_820A_AF89_41E0_1451DF7B8EF3_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8C751365_820A_AF89_41E0_1451DF7B8EF3_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8C751365_820A_AF89_41E0_1451DF7B8EF3_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8C751365_820A_AF89_41E0_1451DF7B8EF3_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388",
 {
  "class": "ImageResource",
  "id": "ImageResource_8DA34A22_8207_9988_41DB_8CAD315452A4",
  "levels": [
   {
    "url": "media/popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_92D3AD9D_8205_9AB9_41BE_BA7F6C017388_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3",
 {
  "class": "ImageResource",
  "id": "ImageResource_94B97CC7_86EA_E388_41D4_152A1A2CAEA0",
  "levels": [
   {
    "url": "media/popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_9620344B_86E6_6298_41D3_3E01C0D2B3D3_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314",
 {
  "class": "ImageResource",
  "id": "ImageResource_8A2FEEE5_86A0_16AA_418F_0370DBCB352A",
  "levels": [
   {
    "url": "media/popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_8AF0B0F6_86A0_EA96_41B1_FC34A83B8314_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_886B0553_8660_2BEE_41C8_695DF5551C7F",
 {
  "class": "ImageResource",
  "id": "ImageResource_8C193797_8660_1696_41DE_CEAA1A0FA857",
  "levels": [
   {
    "url": "media/popup_886B0553_8660_2BEE_41C8_695DF5551C7F_0_0.png",
    "height": 3648,
    "class": "ImageResourceLevel",
    "width": 5472
   },
   {
    "url": "media/popup_886B0553_8660_2BEE_41C8_695DF5551C7F_0_1.png",
    "height": 2730,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_886B0553_8660_2BEE_41C8_695DF5551C7F_0_2.png",
    "height": 1365,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_886B0553_8660_2BEE_41C8_695DF5551C7F_0_3.png",
    "height": 682,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_886B0553_8660_2BEE_41C8_695DF5551C7F_0_4.png",
    "height": 341,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -20
  },
  "id": "camera_8BB6B903_86A0_3B6E_41B8_C0F3867811C7"
 },
 {
  "manualRotationSpeed": 1000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.08,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 82.57
  },
  "id": "camera_8BBAC916_86A0_3B96_41E0_10430FCAD477"
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_42E33230_48B2_B15D_419C_5C803943731C",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_42E0C230_48B2_B15D_41C7_899EB7DD7242",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaAudio",
  "autoplay": true,
  "id": "audio_79C9A3B5_7605_46D6_41D7_D88C18C72704",
  "audio": {
   "oggUrl": "media/audio_79C9A3B5_7605_46D6_41D7_D88C18C72704.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_79C9A3B5_7605_46D6_41D7_D88C18C72704.mp3",
   "id": "audioresource_6600D2F6_7604_C653_41C3_7C75CBD9FF84"
  }
 },
 {
  "class": "PanoramaAudio",
  "autoplay": true,
  "loop": true,
  "id": "audio_6600C2F6_7604_C653_41C3_514275AF91FD",
  "audio": "this.audioresource_6600D2F6_7604_C653_41C3_7C75CBD9FF84"
 },
 {
  "class": "PanoramaAudio",
  "autoplay": true,
  "loop": true,
  "id": "audio_78A6349C_7603_42D6_41D8_218DECEB96BD",
  "audio": "this.audioresource_6600D2F6_7604_C653_41C3_7C75CBD9FF84"
 },
 {
  "class": "PanoramaAudio",
  "autoplay": true,
  "loop": true,
  "id": "audio_78ADB803_761C_C1B1_41D6_B38F7033ACC5",
  "audio": "this.audioresource_6600D2F6_7604_C653_41C3_7C75CBD9FF84"
 },
 {
  "class": "PanoramaAudio",
  "autoplay": true,
  "loop": true,
  "id": "audio_77CC8B2B_7B4E_7AAC_41D9_0E4AE370A0AC",
  "audio": "this.audioresource_6600D2F6_7604_C653_41C3_7C75CBD9FF84"
 },
 "this.audio_74BB1FB2_7BF2_19BC_41D5_329AEA54FA9E",
 "this.audio_68B22A14_7BF2_1A64_41D4_59A7596D1D71",
 "this.audio_8BC2AEFB_8145_CA1B_41DD_6F7E2343A025",
 "this.audio_8BD87EBE_8144_CA1D_41C3_7671F783A9F9",
 "this.audio_8A3E18A6_815B_562A_41DC_FBC4AE920505",
 "this.audio_8A87E958_815F_5666_4191_663514F11DB3",
 "this.audio_8ABACE49_815C_CA66_41B7_D5E4B1EC5231",
 "this.audio_8AA55783_815D_5AEA_41B1_9A5551C2558F",
 "this.audio_8AEB381E_8206_99B8_41D8_CE3E21E9A398",
 "this.audio_8B892CD8_820B_9AB8_41A9_F3BF02BA8B77",
 "this.audio_8BE26DB0_820A_9A88_41A5_5B18053E37E4",
 "this.audio_8BF14E4D_8206_9998_41D8_939F759D6C55",
 "this.audio_882E1208_8206_E987_41DA_F099F7E9B053",
 "this.audio_897093BD_821E_AEF9_41B9_ABB07135D25F",
 "this.audio_758F95E6_7BCE_69A4_41C8_63F68D1A82B7"
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "shadow": false,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "top": 0,
  "toolTipOpacity": 0.73,
  "minWidth": 100,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 50,
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "progressRight": 0,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "right": "0%",
  "playbackBarBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "shadow": false,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "toolTipOpacity": 0.73,
  "bottom": "0.16%",
  "minWidth": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 1,
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "progressRight": 0,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 2,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "height": "37.377%",
  "progressBorderSize": 0,
  "playbackBarBottom": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowVerticalLength": 0,
  "visible": false,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "id": "MapViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "37.5%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "right": "0%",
  "playbackBarBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "backgroundOpacity": 0,
  "top": "2.13%",
  "minWidth": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "scaleMode": "fit_inside",
  "class": "Image",
  "verticalAlign": "middle",
  "paddingTop": 0,
  "maxWidth": 975,
  "left": "0.35%",
  "maxHeight": 974,
  "paddingBottom": 0,
  "width": "9.215%",
  "height": "11.639%",
  "horizontalAlign": "center",
  "id": "Image_36F8C233_3D9F_812D_41CA_5B39317268AA",
  "borderRadius": 0,
  "url": "skin/Image_36F8C233_3D9F_812D_41CA_5B39317268AA.png",
  "shadow": false,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "center",
  "iconURL": "skin/IconButton_6532DAD6_763C_C652_41D0_872D455656AA.png",
  "bottom": "44.59%",
  "minWidth": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "mode": "push",
  "class": "IconButton",
  "paddingTop": 0,
  "maxWidth": 42,
  "transparencyActive": false,
  "cursor": "hand",
  "maxHeight": 42,
  "paddingBottom": 0,
  "right": "1.19%",
  "width": 42,
  "height": 42,
  "backgroundOpacity": 0,
  "id": "IconButton_6532DAD6_763C_C652_41D0_872D455656AA",
  "borderRadius": 0,
  "shadow": false,
  "paddingRight": 0
 },
 {
  "toolTipTextShadowColor": "#000000",
  "horizontalAlign": "center",
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "iconURL": "skin/IconButton_74FE5F36_7DCE_5FA4_41C3_1A00DEA2377E.png",
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "minWidth": 1,
  "top": "2.3%",
  "borderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingLeft": 6,
  "minHeight": 1,
  "toolTipBorderColor": "#767676",
  "toolTip": "Fullscreen",
  "toolTipShadowSpread": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontWeight": "normal",
  "mode": "toggle",
  "class": "IconButton",
  "verticalAlign": "middle",
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipBorderRadius": 3,
  "toolTipFontFamily": "Arial",
  "maxWidth": 128,
  "transparencyActive": true,
  "cursor": "hand",
  "toolTipShadowColor": "#333333",
  "maxHeight": 128,
  "paddingBottom": 0,
  "right": "0.82%",
  "toolTipTextShadowOpacity": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipPaddingTop": 4,
  "toolTipShadowHorizontalLength": 0,
  "width": 56,
  "height": 34,
  "backgroundOpacity": 0,
  "id": "IconButton_74FE5F36_7DCE_5FA4_41C3_1A00DEA2377E",
  "borderRadius": 0,
  "shadow": false,
  "paddingRight": 0
 },
 {
  "backgroundOpacity": 0,
  "bottom": "9.18%",
  "minWidth": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "verticalAlign": "middle",
  "scaleMode": "fit_inside",
  "class": "Image",
  "paddingTop": 0,
  "maxWidth": 1024,
  "left": "0.46%",
  "maxHeight": 1024,
  "paddingBottom": 0,
  "width": "9.672%",
  "height": "15.574%",
  "horizontalAlign": "center",
  "id": "Image_675CB0B6_7603_42D2_41BC_4388146B081C",
  "borderRadius": 0,
  "url": "skin/Image_675CB0B6_7603_42D2_41BC_4388146B081C.png",
  "shadow": false,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "center",
  "iconURL": "skin/IconButton_77207635_7DC6_41A4_41DA_0D1F5F6C264B.png",
  "bottom": "3.61%",
  "minWidth": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "class": "IconButton",
  "paddingTop": 0,
  "transparencyActive": false,
  "rollOverIconURL": "skin/IconButton_77207635_7DC6_41A4_41DA_0D1F5F6C264B_rollover.png",
  "click": "this.setComponentVisibility(this.MapViewer, false, 0, null, null, false)",
  "left": "1.73%",
  "paddingBottom": 0,
  "pressedIconURL": "skin/IconButton_77207635_7DC6_41A4_41DA_0D1F5F6C264B_pressed.png",
  "cursor": "hand",
  "height": 32,
  "backgroundOpacity": 0,
  "id": "IconButton_77207635_7DC6_41A4_41DA_0D1F5F6C264B",
  "width": 32,
  "borderRadius": 0,
  "shadow": false,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "center",
  "iconURL": "skin/IconButton_77236EBC_7DC7_DEAB_4193_7C169B3066B3.png",
  "bottom": "3.93%",
  "minWidth": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "class": "IconButton",
  "paddingTop": 0,
  "transparencyActive": false,
  "rollOverIconURL": "skin/IconButton_77236EBC_7DC7_DEAB_4193_7C169B3066B3_rollover.png",
  "click": "this.setComponentVisibility(this.MapViewer, true, 0, null, null, false)",
  "left": "6.02%",
  "paddingBottom": 0,
  "pressedIconURL": "skin/IconButton_77236EBC_7DC7_DEAB_4193_7C169B3066B3_pressed.png",
  "cursor": "hand",
  "height": 32,
  "backgroundOpacity": 0,
  "id": "IconButton_77236EBC_7DC7_DEAB_4193_7C169B3066B3",
  "width": 32,
  "borderRadius": 0,
  "shadow": false,
  "paddingRight": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "top": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "class": "UIComponent",
  "paddingTop": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "paddingRight": 0
 },
 {
  "backgroundColorRatios": [],
  "top": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "paddingTop": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontSize": 12,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "label": "",
  "layout": "horizontal",
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "top": 10,
  "iconBeforeLabel": true,
  "minWidth": 0,
  "iconHeight": 20,
  "paddingLeft": 5,
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "borderSize": 0,
  "iconWidth": 20,
  "minHeight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "borderColor": "#000000",
  "class": "CloseButton",
  "fontWeight": "normal",
  "paddingTop": 5,
  "fontColor": "#FFFFFF",
  "shadowSpread": 1,
  "iconLineWidth": 5,
  "cursor": "hand",
  "pressedIconColor": "#888888",
  "paddingBottom": 5,
  "right": 10,
  "gap": 5,
  "textDecoration": "none",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "iconColor": "#000000",
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "shadow": false,
  "paddingRight": 5
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "layout": "absolute",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6532DAD6_763C_C652_41D0_872D455656AA], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_8B5E08C3_86A0_3AEE_41D6_21A3509FC4AF.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_74FE5F36_7DCE_5FA4_41C3_1A00DEA2377E].forEach(function(component) { component.set('visible', false); }) }",
 "minWidth": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "buttonToggleFullscreen": "this.IconButton_74FE5F36_7DCE_5FA4_41C3_1A00DEA2377E",
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "existsKey": function(key){    return key in window; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "getKey": function(key){    return window[key]; },
  "unregisterKey": function(key){    delete window[key]; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); }
 },
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "shadow": false,
 "paddingRight": 0
})