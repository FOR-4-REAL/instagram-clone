# Instagram 목업 화면 설계서

## 1. 전체 레이아웃 구조

인스타그램 메인 페이지의 전체 레이아웃은 크게 Header와 Main Content로 구분됩니다.

Header에는 로고, 검색창, 네비게이션 메뉴가 포함되며, Main Content는 좌측(Stories 및 Posts)과 우측(Side Menu)으로 구성됩니다.

[Header]

- 로고
- 검색창 (768px 이상일 때만 표시)
- 네비게이션 아이콘 : Home, Shop, Message, Profile

[Main Content]

[Left Section]

- Stories : 가로 스크롤
- Posts : 여러 개의 포스트 카드

[Right Section]

- User Profile
- Suggestions
- Footer

## 2. 컴포넌트 상세 설명

### **2.1 Header**

화면 상단에 고정된 컴포넌트로 instagram 로고, 검색창, 네비게이션 아이콘이 배치됩니다.

instagram 로고는 header 좌측에 logo.svg 아이콘입니다.

검색 바는 화면 width가 768px 이상에서 표시됩니다.

네비게이션은 header의 우측에 위치해 있으며 home, shop, message, profile picture 아이콘이 있습니다.

네비게이션의 아이콘은 cursor 시 마우스 커서가 포인터로 변경되고, click event가 발생 시 해당 페이지로 이동합니다.

### **2.2 Stories Section**

가로 스크롤 형태의 스토리 목록으로 main-container의 좌측 상단에 위치합니다.

각 스토리 아이템은 원형 프로필 이미지와 사용자명으로 구성되어 있으며, 56 x 56px 사이즈의 이미지에 그레이 컬러 테두리가 적용됩니다.

또한, stories section은 스크롤바를 숨김 처리되어 있어 사용자는 pc에서는 shift+휠스크롤, 모바일에서는 터치 스와이프를 이용하여 콘텐츠를 가로로 이동시킬 수 있습니다.

**2.3 Posts Section**

여러개의 포스트가 한 열에 나열되어 있으며 post-header, post-content, post-footer으로 구분할 수 있습니다.

post-header는 프로필 이미지, 사용자명, 더보기 버튼로 구성되어 있으며, 프로필 이미지와 사용자명은 header 좌측에, 더보기 버튼은 header 우측에 위치하고 있습니다.

post-content는 이미지 또는 비디오 콘텐츠를 출력합니다.

post-footer는 액션버튼 (좋아요, 댓글, 북마크), 좋아요 정보, 설명 텍스트, 포스트 업로드 경과 시간이 표기됩니다.

### **2.4 Side Menu (1024px 이상에서 표시)**

사이드 메뉴는 사용자 프로필 섹션, 추천 계정 섹션, 푸터로 구성되어 있습니다.

사용자 프로필 섹션에는 56×56px 크기의 프로필 이미지, 사용자명, 닉네임, Switch 버튼이 포함됩니다.

추천 계정 섹션은 헤더와 콘텐츠 영역으로 구분됩니다. 헤더 좌측에는 “Suggestions for you” 문구가, 우측에는 추천 계정을 모두 볼 수 있는 “See All” 버튼이 배치됩니다. 콘텐츠 영역에는 추천 계정 목록이 표시됩니다. 각 추천 계정은 32×32px 사이즈의 프로필 이미지, 사용자명, 팔로워 정보, Follow 버튼으로 구성됩니다.

푸터에는 서비스 링크 목록과 저작권 정보가 포함됩니다.

## 3. 반응형 브레이크포인트

| 구분 | width 조건 | 주요 레이아웃 변화 |
| --- | --- | --- |
| Mobile | < 620px | stories와 posts 사이의 공백 제거 |
|  | < 767px | 검색창/사이드 바 숨김 |
| Tablet | 768px ~ 1023px | 검색창 표시, 사이드 바 숨김 |
| Desktop | >= 1024px | 사이드바 표시, 메인 배경색 변경 |

## 4. 색상 규격

| 구분 | 색상 | 색상 적용 위치 | CSS 변수명 |
| --- | --- | --- | --- |
| 배경색 | #FFFFFF | 헤더 배경, 모바일/태블릿 크기의 메인 배경, 스토리 배경, 
포스트 헤더/푸터의 배경 | --primary |
|  | #FAFAFA | 검색창 배경, 데스크탑 크기의 메인 배경 | --secondary |
|  | #DBDBDB | 너비가 620이하일 때 stories와 posts의 구분선의 배경색 | --border |
| 테두리색 | #DBDBDB | header-bottom, 검색창, 스토리, 포스트 | --border |
|  | #C7C7C7 | 스토리 이미지 외곽선 (stroke) | --story-border |
| 글자색 | #262626 | 검색창, 포스트 유저명, posts(좋아요 정보, 포스트 설명),
side menu(모든 유저이름, 메뉴 설명 헤더) | --text-dark |
|  | #999999 | 포스트 등록 경과시간, side menu(유저 닉네임, 친구 제안 정보 텍스트, 푸터) | --text-light |
|  | #0093F5 | side menu - ‘Follow’ 버 |  |

## 5. 타이포그래피

| 구분 | 사이즈 | 적용 위치 |
| --- | --- | --- |
| 기본 텍스트 | 14px | 작은 텍스트에 해당되는 텍스트를 제외한 모든 텍스트 |
| 작은 텍스트 | 12px | 사이드바(친구 제안_회원의 친구 정보) |
|  | 11px | 사이드바 푸터 |
|  | 10px | 포스터 업로드 경과시간 |

## 6. 상호작용 요소

현재 스토리 영역 가로 스크롤, 사용자명 호버 시 밑줄 표시, 버튼 호버 시 커서가 포인터로 변경되는 기능이 구현되어 있습니다.

추후 다크모드 전환, 좋아요 버튼 클릭 시 빨간 하트로 변경되는 기능 등을 추가로 구현할 수 있습니다.

## 7. 목업
![인스타그램 목업](https://www.notion.so/image/attachment%3A4f39287c-fe17-4538-acd1-3efd097a142a%3Aimage.png?table=block&id=21f6ca74-a8a3-8062-a1dd-cd8bc65f2cbb&spaceId=b2d80cad-ad72-45ce-acef-1e81f21dfd60&width=1830&userId=184380cf-e58a-486f-929f-a77e46b7186c&cache=v2)

# Instagram 목업 개발 문서
## 1. 개발 환경

### 학습목표

- HTML5
    - SEO와 유지보수를 위하여 아톰단위 컴포넌트를 구분하여 DOM트리를 구현하기 위한 시멘틱 마크업 기반으로 작업되어야 합니다.
- CSS3
    - 아직 SASS나 CSS-in-JS 라이브러리를 학습하기 이전 순수 CSS3를 활용하여 작업을 진행 해야 하며
      모듈화 작업을 간접적으로 경험하기 위한 컴포넌트 단위로 요소를 분리하여 스타일시트 작업을 해야합니다.
    - 반응형 웹 디자인 (RWD)
        - 앞선 `YouTube`  프로젝트와 다르게 인스타그램은 모바일 환경기반 제품으로 판단되며 따라서
          `PC > moblie`  로 스타일 작업을 진행 하는 것이 아닌 `moblie > PC`  기반으로 브레이크 포인트를 잡아 작업을 해야 합니다.
    - BEM(Block Element Modifier) 방법론

## 2. HTML 구조

### 시맨틱 태그 활용

```html
- <header>: 웹사이트 헤더
- <nav>: 네비게이션 메뉴
- <main>: 주요 콘텐츠
- <section>: 콘텐츠 섹션
- <article>: 포스트 항목
- <aside>: 사이드 메뉴
- <figure>: 미디어 콘텐츠
- <time>: 시간 정보
```

### 웹 접근성

```html
- aria-label 속성 적용
- alt 텍스트 제공
- 시맨틱 마크업
- 키보드 네비게이션
```

## 3. CSS 구조

### 파일 구조

```
styles/
├── general.css  // 전역 스타일
├── header.css   // 헤더 컴포넌트
├── main.css     // 메인 컨텐츠
└── side.css     // 사이드 메
```

### BEM 명명 규칙

```css
/* Block */
.header
.story
.post
.side-menu

/* Element */
.header__content
.story__avatar
.post__header
.side-menu__suggestion

/* Modifier */
.post__button--align-right
```

## 4. 반응형 디자인

### 미디어 쿼리 브레이크포인트

```css
/* Mobile First 접근 */
/* 기본: 모바일 스타일 */

/* Tablet */
@media (min-width: 768px) {
    /* 검색바 표시 */
    .header__search {
        display: flex;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    /* 사이드메뉴 표시 */
    .side-menu {
        display: flex;
    }
    /* 배경색 변경 */
    .main-container {
        background-color: #FAFAFA;
    }
}
```

### 반응형 레이아웃

```css
/* 콘텐츠 최대 너비 제한 */
.content-container {
    max-width: 935px;
}

.content {
    max-width: 614px;
}

```

## 5. 컴포넌트 구조

### Header 컴포넌트

```css
.header {
    position: fixed;
    width: 100%;
    height: 44px;
    z-index: 2;
}
```

### Stories 컴포넌트

```css
.stories {
    overflow: hidden;
    padding: 16px 0;
}

.stories__content {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
}
```

### Posts 컴포넌트

```css
.post {
    display: flex;
    flex-direction: column;
}
```

### Side Menu 컴포넌트

```css
.side-menu {
    position: fixed;
    max-width: 290px;
}

```

## 6. 성능 최적화

### 이미지 최적화

- 이미지 최적화
    - 인스타그램은 크게
      **프로필 사진은 110x110 픽셀, 정사각형 게시물은 1080x1080 픽셀, 세로 게시물은 1080x1350 픽셀, 가로 게시물은 1080x566 픽셀 (1.91:1 비율), 스토리는 1080x1920 픽셀(9:16 비율)**이 권장됩니다.  따라서 해당 이미지 규격에 맞춰 크고 작은 이미지 작업을 반영해야 합니다.
- 지연 로딩 고려
    1.  로딩바나 스켈레톤 UI를 대체해서 사용자에게 정보 표시를 준비하고 있는 중이다를 인식 가능하게 전달해야 합니다.
    2. 여러이미지를 케로셀로 사용자에게 전달하는 과정에서 `loading="lazy"`  어트리뷰트를 사용한다던지 `aria-hidden` 을 활용하여 현재 표시중인 `.isActive` 상태의 이미지를 제외한 이미지는 스크린 리더 사용자에게 정보가 전달 되지 않도록 개발되어야 합니다.

### CSS3 최적화

- 중복 코드 최소화
    - `:root`  를 활용한 스타일에서 사용하는 컬러정보를 한곳에서 관리하도록 작업합니다.
- 미디어 쿼리 최적화
    - 특이 디바이스 z플립 아이폰se 등 사이즈를 규격화하여 지원가능한 범위 내에 `breakpoint` 를 잡고 `@media`  쿼리를 설정해야 합니다.

## 7. 향후 개선사항

1. JavaScript 기능 추가
    - 스토리 슬라이더 기능
    - 좋아요 기능
    - 댓글 기능

   ※ 사용자 이벤트 기반 인터렉션 구현