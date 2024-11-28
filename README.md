# 🍽️ FlavorPath
![Frame 1](https://github.com/user-attachments/assets/1cdca922-bf25-439a-b17d-5c57dd094a6f)

- 배포 URL:

- 테스트 아이디: `test`

- 테스트 비밀번호: `12341234`

<br />

## 프로젝트 소개
- `FlavorPath`는 사용자들에게 **맞춤형 식당 추천 경험**를 제공하는 데 초점을 맞춘 식당 탐색 애플리케이션입니다.
- 사용자는 한식, 중식, 디저트 등 선호하는 카테고리를 선택해 해당 카테고리에 가장 적합한 식당 정보를 빠르게 찾을 수 있습니다.
- 또한, 리뷰 기능을 통해 사용자들이 직접 작성한 신뢰도 높은 후기와 평가를 확인할 수 있어 식당 선택에 도움을 줍니다.
- 간단한 인터페이스와 직관적인 사용성을 갖춰 사용자가 원하는 식당 정보를 빠르고 정확하게 제공하여 최적의 외식 경험을 제공합니다.

<br />

## 프로젝트 실행하기
```
$ git clone https://github.com/FlavorPath/front.git
$ pnpm install
$ pnpm run dev
```

<br />

## 개발 환경
### 프론트엔드
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge)
![PandaCSS](https://img.shields.io/badge/pandacss-%23FDE046.svg?style=for-the-badge)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
<br />
### 백엔드
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
<br />
### 협업 도구 및 배포
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<br />

## 폴더 구조
```
src/
├── api/                 # API 호출 및 관련 로직
├── assets/              # 이미지 및 정적 자산
├── fonts/               # 폰트 파일
├── hooks/               # 커스텀 훅
├── mocks/               # Mock 데이터
├── pages/               # 페이지 컴포넌트
├── routes/              # 라우트 설정
├── store/               # 상태 관리 관련 코드
    ├── queries
    └── stores
├── styles/              # 스타일 관련 파일
├── ui/                  # UI 컴포넌트
    ├── components
    └── view
        ├── atom
        ├── molecule
        └── template
└── utils/               # 유틸리티 함수 및 모듈
```

<br />

## 트러블슈팅
- **API 응답 데이터 타입 불일치 문제 및 해결**
  
  `labels` 필드가 배열로 전달될 것으로 예상했지만, 실제로는 쉼표로 구분된 단일 문자열로 반환되었습니다. 확인해보니 백엔드에서 배열 데이터를 JSON 직렬화하면서 쉼표로 구분된 문자열로 변환된 것이 원인이었습니다.<br/>
  
  이에 대해 아래의 과정을 통해 이 문제를 해결했습니다.
    1. API 응답 데이터를 확인해 `labels`가 배열 대신 문자열로 반환된 문제를 발견했습니다.
    2. 백엔드에 수정 요청을 보내 배열 형태로 반환하도록 조치했습니다.
    3. 백엔드 수정 전까지는 임시로 쉼표로 구분된 문자열을 배열로 반환하는 로직을 추가하여 처리했습니다.<br/>
    
  결과적으로, 백엔드 수정 후 `labels`가 배열 형태로 변환되며 프론트엔드에서 예상대로 데이터 처리가 가능해졌습니다.<br/>
  API 명세서를 통해 데이터 타입을 명확히 정의하고, 방어 코드를 작성하여 데이터 타입 이상 시 오류를 사정에 검지하여 해당 문제가 더 이상 발생하지 않도록 예방할 것 입니다.

- **토큰 만료 처리에 대한 문제**

    토큰이 만료된 상태에서 사용자가 서버에 요청을 보낼 경우, 인증 오류가 발생하였습니다. 프로젝트 시간 상 리브레시 토큰을 구현하거나 활용할 수 없었기 때문에 다른 방법을 찾아야했습니다.

    이를 시도하는 과정에서 다양한 에러 응답을 정확히 구분하는 로직을 작성하는 것과, 사용자 요청이 중단되지 않도록 처리하는 데 어려움이 있었습니다. 만료 상태를 status와 message로 감지하여 자동으로 로그인 페이지로 이동하고 토큰 만료 알림 메시지를 제공하여 사용자 경험을 개선하여 안전하게 토큰을 처리할 수 있었습니다.

<br />

## 주요 기능
| 회원가입/로그인 페이지 | 홈페이지 | 상세페이지 |
| -- | -- | -- |
|<img src="https://github.com/user-attachments/assets/2ffde60d-3cb9-4230-96aa-fa4c87c71df1" width="200" /> | <img src="https://github.com/user-attachments/assets/49f984da-0341-4bb5-8cae-b9828a4926b7" width="200" /> | <img src="https://github.com/user-attachments/assets/f918fb2d-3708-4d94-a235-3f6b14eba04d" width="200" /> |

| 검색페이지 | 스크랩페이지 | 마이페이지 |
| -- | -- | -- |
| <img src="https://github.com/user-attachments/assets/30ce62fc-43bf-47b0-9f5a-77370e0ae80e" width="200" /> |<img src="https://github.com/user-attachments/assets/b7281fce-b201-4056-b697-3905e6fd5151" width="200" /> |<img src="https://github.com/user-attachments/assets/7205e2f3-db5e-46e0-9ba8-37ba33a8cc30" width="200" />|

<br />

## FlavorPath 팀
| 한태동 | 심채윤 | 조성민 | 정동현 |
| -- | -- | -- | -- |
| <img src="https://avatars.githubusercontent.com/u/132195232?v=4" width="120" /> | <img src="https://avatars.githubusercontent.com/u/111689342?v=4" width="120" /> | <img src="https://avatars.githubusercontent.com/u/80831228?v=4" width="120" />  | <img src="https://avatars.githubusercontent.com/u/142657661?v=4" width="120" />  |
| <p align="center">FE</p> | <p align="center">FE</p> | <p align="center">BE</p> | <p align="center">BE</p> |
