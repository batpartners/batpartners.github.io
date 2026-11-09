// Data for the Get Hardware IDs page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Actions",
      "img": "gethardwareids_tab1.png",
      "rows": [
        {
          "name": "Refresh",
          "type": "Button",
          "ko": "로컬 머신을 다시 검색하여 하드웨어 ID 를 새로 고친다.",
          "en": "Re-scans the local machine and refreshes the hardware IDs.",
          "y": [
            37.4,
            22.9
          ]
        },
        {
          "name": "Contact Support",
          "type": "Button",
          "ko": "<a href=\"https://b-at.kr/gerty-license-form/\" target=\"_blank\">라이선스 문의</a> 페이지를 연다.",
          "en": "Opens the <a href=\"https://b-at.kr/en/gerty-license-form/\" target=\"_blank\">licence request</a> page.",
          "y": [
            66.4,
            22.9
          ]
        }
      ]
    }
  ]
];

export const inputs = [];

export const main = "gethardwareids_main.png";

export const outputs = [
  {
    "name": "MachineIDs",
    "type": "String",
    "ko": "기기 ID (MAC, 디스크 시리얼, BIOS ID, 로컬 UUID).",
    "en": "Machine IDs (MAC, disk serial, BIOS ID, local UUID)."
  },
  {
    "name": "USBInfos",
    "type": "String",
    "ko": "연결된 USB 장치의 상세 정보.",
    "en": "Detailed information about the connected USB devices."
  },
  {
    "name": "USBIDs",
    "type": "Data",
    "ko": "기기에 연결된 USB 장치 ID 목록.",
    "en": "List of USB device IDs connected to the machine."
  }
];
