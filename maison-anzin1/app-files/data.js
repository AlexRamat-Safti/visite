var APP_DATA = {
  "scenes": [
    {
      "id": "0-salle--manger",
      "name": "salle à manger",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.7764343937518081,
        "pitch": 0.21576721694580314,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 1.7220681368889617,
          "pitch": 0.09844347907122497,
          "rotation": 9.42477796076938,
          "target": "1-salle--manger2"
        },
        {
          "yaw": 2.5863138942745003,
          "pitch": 0.11240176201806307,
          "rotation": 0.7853981633974483,
          "target": "2-cuisine"
        },
        {
          "yaw": 0.5169098093835132,
          "pitch": 0.08608041063079241,
          "rotation": 10.995574287564278,
          "target": "7-chambre-rdc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6560520898893074,
          "pitch": -0.18076671335300176,
          "title": "Salle à manger",
          "text": "Direction salle à manger"
        },
        {
          "yaw": 1.1613226462197836,
          "pitch": -0.3671169925727451,
          "title": "Jardin arrière",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-salle--manger2",
      "name": "salle à manger2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6221109163680776,
        "pitch": 0.050216369402086514,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.56689701650612,
          "pitch": 0.27793114472403246,
          "rotation": 9.42477796076938,
          "target": "0-salle--manger"
        },
        {
          "yaw": -0.255241811463387,
          "pitch": -0.027710375073283444,
          "rotation": 5.497787143782138,
          "target": "2-cuisine"
        },
        {
          "yaw": 1.4987879460071136,
          "pitch": 0.04787788215098843,
          "rotation": 6.283185307179586,
          "target": "7-chambre-rdc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cuisine",
      "name": "cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.263954737449037,
        "pitch": 0.19272228806552327,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 2.1554510157435764,
          "pitch": 0.02696397828847097,
          "rotation": 6.283185307179586,
          "target": "0-salle--manger"
        },
        {
          "yaw": -0.7863287714054099,
          "pitch": 0.10994846472932096,
          "rotation": 0.7853981633974483,
          "target": "9-couloir-entre"
        },
        {
          "yaw": -1.041891040693578,
          "pitch": 0.10707790454821442,
          "rotation": 5.497787143782138,
          "target": "4-pallier-tage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-chambre-etage",
      "name": "chambre etage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8305430177567192,
        "pitch": 0.00527962872281762,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -3.0217181955495125,
          "pitch": 0.09675521424028766,
          "rotation": 0.7853981633974483,
          "target": "4-pallier-tage"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9573504247521605,
          "pitch": -0.12923705737840052,
          "title": "Direction le courloir",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-pallier-tage",
      "name": "pallier étage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.7245251718626449,
        "pitch": 0.6361308113866144,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.5324126101592839,
          "pitch": 0.3980234495862547,
          "rotation": 2.356194490192345,
          "target": "9-couloir-entre"
        },
        {
          "yaw": 2.3240343162934147,
          "pitch": 0.15642557886128472,
          "rotation": 19.63495408493622,
          "target": "3-chambre-etage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-salon-2",
      "name": "salon 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.008096888282427273,
        "pitch": 0.2473144701203296,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.231722679964946,
        "pitch": 0.09343238172693802,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "7-chambre-rdc",
      "name": "chambre rdc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.8197086183376072,
        "pitch": -0.035919898180294396,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.8321074017270682,
          "pitch": 0.02472641518492047,
          "rotation": 0.7853981633974483,
          "target": "1-salle--manger2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.043093049250766,
          "pitch": -0.030918884346178288,
          "title": "Salle de bain",
          "text": "Non visible"
        }
      ]
    },
    {
      "id": "8-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-couloir-entre",
      "name": "Couloir entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8670434129599638,
          "pitch": -0.08724439749651935,
          "rotation": 1.5707963267948966,
          "target": "2-cuisine"
        },
        {
          "yaw": 1.01583871190768,
          "pitch": -0.20811259245295766,
          "rotation": 5.497787143782138,
          "target": "4-pallier-tage"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Maison Anzin",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
