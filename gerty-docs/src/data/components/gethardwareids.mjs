// Data for the Get Hardware IDs page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Actions",
      "img": "0_GetHardwareIDs_10.png",
      "rows": [
        {
          "name": "Refresh",
          "type": "Button",
          "ko": "재검색을 통해 로컬 머신의 하드웨어 ID를 새로고침.",
          "en": "Refreshes the local machine's hardware IDs via re-scanning.",
          "y": [
            34.6,
            22.8
          ]
        },
        {
          "name": "Contact Support",
          "type": "Button",
          "ko": "<a href=\"https://b-at.kr/gerty-license-form/\" target=\"_blank\">라이선스 문의</a> 페이지를 연다.",
          "en": "Opens the <a href=\"https://b-at.kr/en/gerty-license-form/\" target=\"_blank\">licence request</a> page.",
          "y": [
            63.2,
            25
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "0_GetHardwareIDs.png";

export const outputs = [
  {
    "name": "MachineIDs",
    "type": "String",
    "ko": "기기 ID (MAC, 디스크 시리얼, BIOS ID, 로컬 UUID)",
    "en": "Device IDs (MAC, disk serial, BIOS ID, local UUID)."
  },
  {
    "name": "USBInfos",
    "type": "String",
    "ko": "연결된 USB 장치에 대한 정보.",
    "en": "Information about connected USB devices."
  },
  {
    "name": "USBIDs",
    "type": "Data",
    "ko": "기기에 연결된 USB 장치 ID 목록.",
    "en": "List of connected USB device IDs."
  }
];
