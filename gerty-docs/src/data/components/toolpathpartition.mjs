// Data for the ToolPath Partition page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "Partition Settings",
      "img": "toolpathpartition_tab1.png",
      "rows": [
        {
          "name": "Start(mm)",
          "type": "Number",
          "ko": "분할에 쓰는 시작 길이 (mm)이다. 기본값은 20 (범위 0 ~ 100).",
          "en": "Start length used for the partition (mm). Default: 20 (range 0–100).",
          "y": [
            29,
            17.8
          ]
        },
        {
          "name": "End(mm)",
          "type": "Number",
          "ko": "분할에 쓰는 끝 길이 (mm)이다. 기본값은 20 (범위 0 ~ 100).",
          "en": "End length used for the partition (mm). Default: 20 (range 0–100).",
          "y": [
            51.5,
            17.8
          ]
        },
        {
          "name": "Substitution(%)",
          "type": "Number",
          "ko": "대체 비율이다. 기본값은 0.2 (범위 0 ~ 0.5).",
          "en": "Substitution (replacement) ratio. Default: 0.2 (range 0–0.5).",
          "y": [
            74,
            17.8
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
    "ko": "나눌 타겟 평면 리스트(Branch)이다.",
    "en": "The list (branch) of target planes to partition."
  }
];

export const main = "toolpathpartition_main.png";

export const outputs = [
  {
    "name": "Targets",
    "type": "Plane",
    "ko": "길이 값에 따라 하위 리스트(Branch)로 나뉜 타겟 평면이다.",
    "en": "The target planes partitioned into sub-lists (branches) by the length values."
  },
  {
    "name": "Index",
    "type": "Integer",
    "ko": "인스트럭션을 나누기 위해 삽입한 타겟 평면의 인덱스이다.",
    "en": "Indices of the target planes inserted to split the instructions."
  },
  {
    "name": "Domain",
    "type": "Domain",
    "ko": "<strong>Index</strong> 의 도메인(구간)이다.",
    "en": "Domain (interval) of the indices."
  }
];
