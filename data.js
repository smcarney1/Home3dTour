var APP_DATA = {
  "scenes": [
    {
      "id": "0-ourbedroom",
      "name": "OurBedroom",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.205643023648868,
        "pitch": 0.20013288748955205,
        "fov": 1.3613434874289723
      },
      "linkHotspots": [
        {
          "yaw": -0.5876849119887773,
          "pitch": 0.3231389653315002,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 0.9766704573343077,
          "pitch": 1.0227338024570596,
          "rotation": 0,
          "target": "2-mainroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.524924922619439,
          "pitch": 0.4127768977557196,
          "title": "Bed",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.07276599298345054,
        "pitch": 0.14735058749231733,
        "fov": 1.3613434874289723
      },
      "linkHotspots": [
        {
          "yaw": -1.2452921191945414,
          "pitch": 0.45555788101301076,
          "rotation": 0,
          "target": "2-mainroom"
        },
        {
          "yaw": -1.3815247582728283,
          "pitch": -0.7398422774917108,
          "rotation": 0,
          "target": "0-ourbedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.29205695422702505,
          "pitch": 0.058932757051678664,
          "title": "Fridge",
          "text": "Obviously"
        }
      ]
    },
    {
      "id": "2-mainroom",
      "name": "MainRoom",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.3227013601874731,
        "pitch": 0.16494468749139202,
        "fov": 1.3613434874289723
      },
      "linkHotspots": [
        {
          "yaw": -1.1141744100958775,
          "pitch": 0.43886441765127593,
          "rotation": 6.283185307179586,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.152143012864098,
          "pitch": -0.5047105293164051,
          "rotation": 0,
          "target": "0-ourbedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.26953005253581,
          "pitch": 0.08431706260567395,
          "title": "Amanda",
          "text": "Hottest babe ever"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
