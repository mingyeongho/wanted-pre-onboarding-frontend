<h1 align='center'>원티드 프리온보딩 프론트엔드 사전과제</h1>

## 📖 목차

<ol>
    <li>
        <a href='#overview'>Overview</a>
    </li>
    <li>
        <a href='#run'>환경설정 및 실행</a>
    </li>
    <li>
        <a href='#features'>요구사항</a>
    </li>
    <li>
        <a href='#library'>라이브러리</a>
    </li>
    <li>
        <a href='#structure'>폴더 구조</a>
    </li>
    <li>
        <a href='#agonize'>고민한 부분</a>
    </li>
    <li>
        <a href='#improve'>개선사항</a>
    </li>
    
</ol>

<h2 id='overview'>Overview</h2>

<video src='https://user-images.githubusercontent.com/57670160/216997652-34f0f071-2ff7-4e8c-b261-3bf633213eef.mov'></video>

<h2 id='run'>환경설정 및 실행</h2>

<pre>
git clone https://github.com/mingyeongho/wanted-pre-onboarding-frontend.git

yarn 

yarn run dev
</pre>

<h2 id='features'>요구사항</h2>

<p>
로그인 / 회원가입

- [x] /signin 경로에 로그인 기능 개발
- [x] /signup 경로에 회원가입 기능 개발
- [x] 회원가입과 로그인 페이지에 이메일과 비밀번호 유효성 검사 기능 구현
- [x] 이메일과 비밀번호 유효성 검사를 통과하지 못했다면 button에 disabled 속성 추가
- [x] 회원가입 완료 시 /signin으로 경로 이동
- [x] 로그인이 정상적으로 완료되었을 시 /todo로 경로 이동
- [x] 응답받은 토큰을 로컬 스토리지에 저장
- [x] 로그인 여부에 따른 리다이렉트 처리

Todo List

- [x] /todos 경로에 접속하면 투두 리스트 목록 Fetch
- [x] 새로운 Todo를 입력할 수 있는 Form
- [x] 체크박스를 통해 완료 여부 수정
- [x] 수정 기능 구현
- [x] 삭제 기능 구현
</p>

<h2 id='library'>라이브러리</h2>

![image](https://user-images.githubusercontent.com/57670160/216999733-b873f04e-c6d3-403d-bd99-e40b362a98b7.png)

<h2 id='structure'>폴더 구조</h2>

<pre>
src
├── App.tsx
├── Hoc
│   └── withAuth.tsx
├── apis
│   ├── Auth
│   │   ├── signin.ts
│   │   └── signup.ts
│   └── Todo
│       ├── createTodo.ts
│       ├── deleteTodo.ts
│       ├── getTodos.ts
│       └── updateTodo.ts
├── assets
│   └── react.svg
├── components
│   ├── Home
│   │   ├── Home.style.tsx
│   │   ├── Home.tsx
│   │   ├── TodoForm
│   │   │   ├── TodoForm.style.tsx
│   │   │   ├── TodoForm.tsx
│   │   │   └── hooks
│   │   │       └── useTodoForm.ts
│   │   ├── TodoList
│   │   │   ├── TodoItem
│   │   │   │   ├── TodoItem.style.tsx
│   │   │   │   ├── TodoItem.tsx
│   │   │   │   └── hooks
│   │   │   │       └── useTodoItem.ts
│   │   │   ├── TodoList.style.tsx
│   │   │   └── TodoList.tsx
│   │   └── hooks
│   │       └── useHome.ts
│   ├── Signin
│   │   ├── Signin.style.tsx
│   │   ├── Signin.tsx
│   │   └── hooks
│   │       └── useSignin.ts
│   └── Signup
│       ├── Signup.style.tsx
│       ├── Signup.tsx
│       └── hooks
│           └── useSignup.ts
├── function
│   └── isValid.ts
├── main.tsx
├── pages
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── Signin.tsx
│   └── Signup.tsx
├── router
│   └── Router.tsx
├── styles
│   ├── GlobalStyle.tsx
│   └── Variable.ts
├── utils
│   ├── Storage.ts
│   ├── constant.ts
│   ├── interface.ts
│   └── type.ts
└── vite-env.d.ts
</pre>

<h2 id='agonize'>고민한 부분</h2>

- 추가, 삭제, 수정 등 기능을 수행할 때 데이터를 새로 받아와야 하는 부분
  - 데이터를 가져오는 hook에서 refresh state를 선언한 뒤 refresh가 바뀔 때 데이터를 가져오고, 추가, 삭제, 수정이 일어날 때 state를 변경시킨다.

<h2 id='improve'>개선사항</h2>
