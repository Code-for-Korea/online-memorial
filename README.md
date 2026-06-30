사회적 추모 (Online Memorial) 
-----------------------------

> 잊혀진 산업재해 희생자들을 추모하는 공간

[사회적 추모 Online Memorial](https://code-for-korea.github.io/online-memorial/) 프론트엔드 저장소입니다.

## 프로젝트 개요

본 프로젝트는 산업재해 희생자들을 기억하고 추모하기 위한 웹 서비스의 클라이언트 애플리케이션입니다. 백엔드 API와 연동하여 산업재해 통계, 추모 게시글, 관련 소식 등을 제공합니다.

- **백엔드 저장소**: [wagurano/candlelight](https://github.com/wagurano/candlelight) (Rails 기반 API 서버)
> 저장소 통합 작업 진행중입니다 
- **배포 주소**: [https://code-for-korea.github.io/online-memorial](https://code-for-korea.github.io/online-memorial)
> 서버 이전 작업 진행중입니다

## 기술 스택

- **프레임워크**: React 18
- **언어**: TypeScript 4.7+
- **빌드 도구**: Create React App
- **HTTP 클라이언트**: Axios
- **차트 라이브러리**: Chart.js, react-chartjs-2
- **UI 개발 환경**: Storybook
- **배포**: GitHub Pages

## 시작하기

### 사전 요구사항

- Node.js 16+
- npm 또는 yarn

### 설치

```bash
cd client
npm install
```

### 개발 서버 실행

```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속합니다.

### 빌드

```bash
npm run build
```

`build/` 디렉토리에 프로덕션 빌드가 생성됩니다.

### Storybook 실행

```bash
npm run storybook
```

`http://localhost:6006`에서 컴포넌트 문서를 확인할 수 있습니다.

### 배포

```bash
npm run deploy
```

GitHub Pages로 배포됩니다. (`gh-pages` 브랜치)

## 프로젝트 구조

```
client/
├── public/              # 정적 자산 (favicon, index.html 등)
├── src/
│   ├── api/             # Axios 인스턴스 및 API 설정
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   │   ├── animation/   # 애니메이션 관련 컴포넌트
│   │   ├── carousel/    # 캐러셀 컴포넌트
│   │   ├── common/      # 공용 컴포넌트
│   │   ├── dataTable/   # 데이터 테이블 컴포넌트
│   │   ├── modal/       # 모달 컴포넌트
│   │   ├── newsCard/    # 뉴스/소식 카드 컴포넌트
│   │   ├── pagination/  # 페이지네이션 컴포넌트
│   │   └── post/        # 게시글 관련 컴포넌트
│   ├── config/          # 상수 및 설정
│   ├── services/        # API 호출 비즈니스 로직
│   ├── style/           # 전역 스타일
│   ├── views/           # 페이지 단위 뷰 컴포넌트
│   │   ├── Layout/              # 전체 레이아웃
│   │   ├── MemorialAnimation/   # 추모 애니메이션 영역
│   │   └── MemorialMainContent/ # 메인 콘텐츠 영역
│   ├── App.tsx          # 루트 컴포넌트
│   └── index.tsx        # 엔트리 포인트
├── package.json
├── tsconfig.json
└── README.md
```

## 주요 기능

- **추모 애니메이션**: 희생자들을 기리는 시각적 추모 공간
- **산업재해 통계**: 연도별 사망/부상 통계, 요일별/시간대별 통계 차트 제공
- **재난 정보 조회**: 산업재해 관련 재난 정보 데이터 테이블 및 페이지네이션
- **추모 게시글**: 추모 글 작성 및 목록 조회
- **관련 소식**: 산업재해 및 노동 관련 이야기(뉴스) 제공

## API 연동

백엔드 API 서버(`https://candlelight-wdkq.onrender.com`)와 통신합니다.

주요 엔드포인트:

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/stats/year/:year` | 연도별 통계 조회 |
| GET | `/posts` | 추모 게시글 목록 |
| POST | `/posts` | 추모 게시글 작성 |
| GET | `/disasters` | 재난 정보 목록 |
| GET | `/stories` | 관련 소식 목록 |

자세한 API 문서는 [Swagger UI](https://candlelight-wdkq.onrender.com/api-docs)에서 확인할 수 있습니다.
> 서버 이전 작업중입니다.

## 라이선스

본 프로젝트는 [Code for Korea](https://codefor.kr) 커뮤니티와 함께 합니다.
