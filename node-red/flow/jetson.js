[
    {
        "id": "d9643b74e9fbc055",
        "type": "tab",
        "label": "플로우 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "dcf90395.4f0ed",
        "type": "inject",
        "z": "d9643b74e9fbc055",
        "name": "",
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 40,
        "wires": [
            [
                "7e2f89a3.d276e8",
                "4748fc0c.c13c44",
                "6247d35d.4f468c",
                "736a7d5a.3e64c4",
                "13a4195.c2ea1e7",
                "ead11754.fcad38"
            ]
        ]
    },
    {
        "id": "7e2f89a3.d276e8",
        "type": "exec",
        "z": "d9643b74e9fbc055",
        "command": "cat /sys/devices/virtual/thermal/thermal_zone0/temp",
        "addpay": true,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": false,
        "name": "AO-therm",
        "x": 342,
        "y": 40,
        "wires": [
            [
                "794992f9.d527bc"
            ],
            [],
            []
        ]
    },
    {
        "id": "28bb7be9.22b0d4",
        "type": "debug",
        "z": "d9643b74e9fbc055",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 746,
        "y": 120,
        "wires": []
    },
    {
        "id": "794992f9.d527bc",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse AO-therm",
        "func": "var buffer = parseFloat(msg.payload);\nvar A0 = buffer/1000;      \nmsg.payload = {'A0':A0};   // JSON Format\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 538,
        "y": 40,
        "wires": [
            [
                "97efa4fa.f82938",
                "297dd83c.d88d58",
                "28bb7be9.22b0d4"
            ]
        ]
    },
    {
        "id": "4748fc0c.c13c44",
        "type": "exec",
        "z": "d9643b74e9fbc055",
        "command": "cat /sys/devices/virtual/thermal/thermal_zone1/temp",
        "addpay": true,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": false,
        "name": "CPU-therm",
        "x": 352,
        "y": 180,
        "wires": [
            [
                "448a9602.6a2bf8"
            ],
            [],
            []
        ]
    },
    {
        "id": "315136f.60bc0ca",
        "type": "debug",
        "z": "d9643b74e9fbc055",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 766,
        "y": 260,
        "wires": []
    },
    {
        "id": "448a9602.6a2bf8",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse CPU-therm",
        "func": "var buffer = parseFloat(msg.payload);\nvar CPU = buffer/1000;      \nmsg.payload = {'CPU':CPU};   // JSON Format\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 180,
        "wires": [
            [
                "315136f.60bc0ca",
                "d715a000.75ccc",
                "495a8766.a440a8"
            ]
        ]
    },
    {
        "id": "6247d35d.4f468c",
        "type": "exec",
        "z": "d9643b74e9fbc055",
        "command": "cat /sys/devices/virtual/thermal/thermal_zone2/temp",
        "addpay": true,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": false,
        "name": "GPU-therm",
        "x": 352,
        "y": 340,
        "wires": [
            [
                "f60b116c.0102b"
            ],
            [],
            []
        ]
    },
    {
        "id": "21b76528.24e79a",
        "type": "debug",
        "z": "d9643b74e9fbc055",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 766,
        "y": 440,
        "wires": []
    },
    {
        "id": "f60b116c.0102b",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse GPU-therm",
        "func": "var buffer = parseFloat(msg.payload);\nvar GPU = buffer/1000;      \nmsg.payload = {'GPU':GPU};   // JSON Format\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 340,
        "wires": [
            [
                "21b76528.24e79a",
                "692c3353.cd1ebc",
                "d99a7ff6.6f225"
            ]
        ]
    },
    {
        "id": "736a7d5a.3e64c4",
        "type": "exec",
        "z": "d9643b74e9fbc055",
        "command": "cat /sys/devices/virtual/thermal/thermal_zone3/temp",
        "addpay": true,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": false,
        "name": "PLL-therm",
        "x": 352,
        "y": 500,
        "wires": [
            [
                "27173b5c.523744"
            ],
            [],
            []
        ]
    },
    {
        "id": "f9c1a428.56a438",
        "type": "debug",
        "z": "d9643b74e9fbc055",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 766,
        "y": 620,
        "wires": []
    },
    {
        "id": "27173b5c.523744",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse PLL-therm",
        "func": "var buffer = parseFloat(msg.payload);\nvar PLL = buffer/1000;      \nmsg.payload = {'PLL':PLL};   // JSON Format\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 500,
        "wires": [
            [
                "f9c1a428.56a438",
                "bc419e87.be15c",
                "c3cb09e6.b45cc8"
            ]
        ]
    },
    {
        "id": "13a4195.c2ea1e7",
        "type": "exec",
        "z": "d9643b74e9fbc055",
        "command": "cat /sys/devices/virtual/thermal/thermal_zone4/temp",
        "addpay": true,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": false,
        "name": "PMIC-therm",
        "x": 352,
        "y": 660,
        "wires": [
            [
                "fd69433d.c972b"
            ],
            [],
            []
        ]
    },
    {
        "id": "62b05e8f.05db5",
        "type": "debug",
        "z": "d9643b74e9fbc055",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 766,
        "y": 740,
        "wires": []
    },
    {
        "id": "fd69433d.c972b",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse FAN-therm",
        "func": "var buffer = parseFloat(msg.payload);\nvar PMIC = buffer/1000;      \nmsg.payload = {'PMIC':PMIC};   // JSON Format\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 660,
        "wires": [
            [
                "62b05e8f.05db5",
                "9129b67b.403578",
                "8592b03b.e2307"
            ]
        ]
    },
    {
        "id": "ead11754.fcad38",
        "type": "exec",
        "z": "d9643b74e9fbc055",
        "command": "cat /sys/devices/virtual/thermal/thermal_zone5/temp",
        "addpay": true,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": false,
        "name": "FAN-therm",
        "x": 352,
        "y": 840,
        "wires": [
            [
                "55bf7515.ba9aac"
            ],
            [],
            []
        ]
    },
    {
        "id": "35e620c2.0747a",
        "type": "debug",
        "z": "d9643b74e9fbc055",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 772,
        "y": 920,
        "wires": []
    },
    {
        "id": "55bf7515.ba9aac",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse FAN-therm",
        "func": "var buffer = parseFloat(msg.payload);\nvar FAN = buffer/1000;      \nmsg.payload = {'FAN':FAN};   // JSON Format\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 556,
        "y": 840,
        "wires": [
            [
                "35e620c2.0747a",
                "d112baa0.a62798",
                "5de26a5c.3fb6e4"
            ]
        ]
    },
    {
        "id": "97efa4fa.f82938",
        "type": "ui_gauge",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "af62378b.364a28",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "A0 Temp",
        "label": "[ °C ]",
        "format": "{{msg.payload.A0}}",
        "min": 0,
        "max": "120",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 756,
        "y": 40,
        "wires": []
    },
    {
        "id": "d715a000.75ccc",
        "type": "ui_gauge",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "6c50417d.0467d",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "CPU Temp",
        "label": "[ °C ]",
        "format": "{{msg.payload.CPU}}",
        "min": 0,
        "max": "120",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 766,
        "y": 180,
        "wires": []
    },
    {
        "id": "692c3353.cd1ebc",
        "type": "ui_gauge",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "28e6708f.a7cb8",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "GPU Temp",
        "label": "[ °C ]",
        "format": "{{msg.payload.GPU}}",
        "min": 0,
        "max": "120",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 766,
        "y": 340,
        "wires": []
    },
    {
        "id": "bc419e87.be15c",
        "type": "ui_gauge",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "6c48fc3a.cf9654",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "PLL Temp",
        "label": "[ °C ]",
        "format": "{{msg.payload.PLL}}",
        "min": 0,
        "max": "120",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 756,
        "y": 500,
        "wires": []
    },
    {
        "id": "9129b67b.403578",
        "type": "ui_gauge",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "8e9aeaef.dff428",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "PMIC Temp",
        "label": "[ °C ]",
        "format": "{{msg.payload.PMIC}}",
        "min": 0,
        "max": "120",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 766,
        "y": 660,
        "wires": []
    },
    {
        "id": "d112baa0.a62798",
        "type": "ui_gauge",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "6b117514.1b139c",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "FAN Temp",
        "label": "[ °C ]",
        "format": "{{msg.payload.FAN}}",
        "min": 0,
        "max": "120",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 772,
        "y": 840,
        "wires": []
    },
    {
        "id": "6176a3b4.588efc",
        "type": "ui_chart",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "af62378b.364a28",
        "order": 1,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#f30b0c",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "x": 746,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "297dd83c.d88d58",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse JSON",
        "func": "var buffer = msg.payload.A0;\nmsg.payload = buffer;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 80,
        "wires": [
            [
                "6176a3b4.588efc"
            ]
        ]
    },
    {
        "id": "495a8766.a440a8",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse JSON",
        "func": "var buffer = msg.payload.CPU;\nmsg.payload = buffer;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 220,
        "wires": [
            [
                "b7f2d224.67935"
            ]
        ]
    },
    {
        "id": "b7f2d224.67935",
        "type": "ui_chart",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "6c50417d.0467d",
        "order": 1,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "x": 746,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "d99a7ff6.6f225",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse JSON",
        "func": "var buffer = msg.payload.GPU;\nmsg.payload = buffer;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 380,
        "wires": [
            [
                "49d4103f.e137f"
            ]
        ]
    },
    {
        "id": "49d4103f.e137f",
        "type": "ui_chart",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "28e6708f.a7cb8",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "x": 746,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "c406dd37.fc7ee",
        "type": "ui_chart",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "6c48fc3a.cf9654",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "x": 746,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "c3cb09e6.b45cc8",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse JSON",
        "func": "var buffer = msg.payload.PLL;\nmsg.payload = buffer;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 540,
        "wires": [
            [
                "c406dd37.fc7ee"
            ]
        ]
    },
    {
        "id": "8592b03b.e2307",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse JSON",
        "func": "var buffer = msg.payload.PMIC;\nmsg.payload = buffer;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 548,
        "y": 700,
        "wires": [
            [
                "1dc9dc30.6ae594"
            ]
        ]
    },
    {
        "id": "1dc9dc30.6ae594",
        "type": "ui_chart",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "8e9aeaef.dff428",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "x": 746,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "5de26a5c.3fb6e4",
        "type": "function",
        "z": "d9643b74e9fbc055",
        "name": "Parse JSON",
        "func": "var buffer = msg.payload.FAN;\nmsg.payload = buffer;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 556,
        "y": 880,
        "wires": [
            [
                "d90ac2a8.d7309"
            ]
        ]
    },
    {
        "id": "d90ac2a8.d7309",
        "type": "ui_chart",
        "z": "d9643b74e9fbc055",
        "name": "",
        "group": "6b117514.1b139c",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "x": 752,
        "y": 880,
        "wires": [
            []
        ]
    },
    {
        "id": "af62378b.364a28",
        "type": "ui_group",
        "name": "A0",
        "tab": "d8f0661d.6ae1d8",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "6c50417d.0467d",
        "type": "ui_group",
        "name": "CPU",
        "tab": "d8f0661d.6ae1d8",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "28e6708f.a7cb8",
        "type": "ui_group",
        "name": "GPU",
        "tab": "d8f0661d.6ae1d8",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "6c48fc3a.cf9654",
        "type": "ui_group",
        "name": "PLL",
        "tab": "d8f0661d.6ae1d8",
        "order": 4,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "8e9aeaef.dff428",
        "type": "ui_group",
        "name": "PMIC",
        "tab": "d8f0661d.6ae1d8",
        "order": 5,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "6b117514.1b139c",
        "type": "ui_group",
        "name": "FAN",
        "tab": "d8f0661d.6ae1d8",
        "order": 6,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "d8f0661d.6ae1d8",
        "type": "ui_tab",
        "name": "Jetson Nano",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
