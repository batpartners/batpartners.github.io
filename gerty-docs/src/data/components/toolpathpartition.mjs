// Data for the ToolPath Partition page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Partition Settings",
      "img": "9_ToolPathpartition_10.png",
      "rows": [
        {
          "name": "Start(mm)",
          "type": "Number",
          "ko": "시작 길이 (mm).",
          "en": "Start length (mm).",
          "y": [
            27.6,
            17.2
          ]
        },
        {
          "name": "End(mm)",
          "type": "Number",
          "ko": "끝 길이 (mm).",
          "en": "End length (mm).",
          "y": [
            49.4,
            17.2
          ]
        },
        {
          "name": "Substitution(%)",
          "type": "Number",
          "ko": "대체 비율 (%).",
          "en": "Substitution ratio (%).",
          "y": [
            71.3,
            17.2
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "Targets",
    "type": "Plane",
    "ko": "나눌 타겟 평면 리스트(Branch).",
    "en": "The target plane list (branch) to split."
  }
];

export const main = "9_ToolPathpartition.png";

export const outputs = [
  {
    "name": "Targets",
    "type": "Plane",
    "ko": "하위 리스트(Branch)로 나뉜 타겟 평면.",
    "en": "The target planes split into sub-lists (branches)."
  },
  {
    "name": "Index",
    "type": "Integer",
    "ko": "인스트럭션을 나누려고 삽입한 타겟 평면의 인덱스.",
    "en": "Indices of the target planes inserted to split the instructions."
  },
  {
    "name": "Domain",
    "type": "Integer",
    "ko": "인덱스의 도메인.",
    "en": "Domain of the indices."
  }
];
