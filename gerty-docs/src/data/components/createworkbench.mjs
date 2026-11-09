// Data for the CreateWorkBench page. Source of the page's tables (both languages); edit here, not in the page.
// Rows are required unless `optional: true` (then put the default in the description); `y` = [top%, height%] of the
// control on its tab screenshot (numbered markers). Drafted from the posts by scripts/extract-component.mjs.
export const groups = [
  [
    {
      "label": "WorkBench",
      "img": "2_Workbench_20.png",
      "rows": [
        {
          "name": "Name",
          "type": "String",
          "ko": "워크벤치의 식별 이름을 입력한다.",
          "en": "Workbench name",
          "y": [
            27.6,
            17.2
          ]
        },
        {
          "name": "WorkBench Colour",
          "type": "Color",
          "ko": "뷰포트에서 워크벤치 메시의 시각화 색상을 지정한다.",
          "en": "Visualization color",
          "y": [
            48.9,
            17.8
          ]
        },
        {
          "name": "WorkPiece Colour",
          "type": "Color",
          "ko": "뷰포트에서 작업물(Workpiece) 메시의 시각화 색상을 지정한다.",
          "en": "Visualization color of the workpiece mesh",
          "y": [
            71.3,
            17.2
          ]
        }
      ]
    },
    {
      "label": "Export",
      "img": "2_Workbench_22.png",
      "rows": [
        {
          "name": "Export",
          "type": "Button",
          "ko": "워크벤치 데이터를 사용자 로컬의 지정된 경로에 파일로 저장한다.",
          "en": "Saves the workbench data as a file to a user-specified local directory.",
          "y": [
            53.1,
            26.5
          ]
        }
      ]
    }
  ]
];

export const inputs = [
  {
    "name": "BenchGeo",
    "type": "Mesh",
    "ko": "워크벤치의 3D 형상 메시 데이터를 연결한다.",
    "en": "Mesh geometry of the workbench"
  },
  {
    "name": "BenchBase",
    "type": "Plane",
    "ko": "포지셔너 플랜지 면에 장착되는 워크벤치의 하단 기준 좌표계 평면을 지정한다.",
    "en": "Workbench mounting reference plane relative to the positioner flange"
  },
  {
    "name": "BenchTop",
    "type": "Plane",
    "ko": "워크벤치 상단의 작업물 부착 기준 좌표계 평면을 지정한다.",
    "en": "Top plane of the workbench"
  },
  {
    "name": "WorkPieces",
    "type": "Mesh",
    "ko": "워크벤치 위에 고정할 작업물(Workpiece)의 3D 형상 메시 데이터를 연결한다.",
    "en": "Workpiece geometry mesh",
    "optional": true
  }
];

export const main = "2_Workbench_2.png";

export const outputs = [
  {
    "name": "WorkBench",
    "type": "Workbench",
    "ko": "구성된 워크벤치 및 작업물 데이터 정의를 출력한다. Positioner 컴포넌트에 연결하여 사용한다.",
    "en": "Created workbench definition."
  }
];
