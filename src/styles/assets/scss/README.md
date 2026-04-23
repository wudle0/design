# 클래스 명명 규칙

기본적으로 ant의 클래스명을 따른다.
그외 클래스명을 지어보자~

### 규칙

1. 비주얼 커스텀이 필요할때 **가능하다면 부모에 상속되지 않는다.**
2. 컴포넌트가 위치에 상관없이 비주얼 구현이 가능해야한다.
3. 기능이 확실한 레이아웃 관련 컴포넌트는 컴포넌트명과 클래스명이 같다. (header, gnb, lnb...)
4. 클래스명의 스타일네이밍은 규칙이 있음

### 선언순서

구분-상태값, 헬퍼클래스
e.g. status-success bd-right-1

### 헬퍼 클래스명

접두사가 고유한것이 있다. 한글자로 쓴다 (d, m, p, g, w, h)

1. d-none
2. mt-12
3. pt-12
4. g-12
5. w-min-80
6. w-per-100
7. w-min-per-100

속성명은 줄이고, 속성의 키워드는 풀네임 ('-'는 제외)
접두사는 2글자 or 3글자
4글자는 용납못해 절대로 네버 에버

1. bd-right-0
2. ta-left
3. pos-fixed
4. top-0

### ant 내부 커스텀 클래스명

ant컴포넌트 안에서 단일 select가 되어야할때 (커스텀하는 친구, 클래스명이 없는)
tit X
title O

1. 태그 선택자는 쓰지 않는다.
2. 계층 정의
   1. container
   2. contents
   3. wrap
   4. list group
   5. head body
   6. box item
   7. 상태

### 변수 네이밍 규칙

1. formState에 모든 input 변수를 넣어서 관리

   - checkbox : checkedValue
   - text : textValue
   - radio : radioValue
   - number : numberValue
   - select : selectedValue
   - switch : switchedValue

2. activeTab / activeCollapse

   - 복수일경우 02,03 ...
   - 하위 depth는 -01,-02 ...

3. modal

   - useModal에 사용할 변수만 삽입
   - const { open, showModal, closeModal } = useModal([
     'create',
     'upload',
     'delete',
     ]);

4. table

   - 페이지에 1개의 테이블만 들어갈 경우 basicColumns, basicData
   - 2개 이상의 테이블이 들어갈 경우 value값 삽입
     - valueColumns
     - valueData

# 뒤로가기 (6/20 ~ 고도화 예정)

1. minus
   - 단순 history back
     - router.go(-1)
2. replace
   - 2 step 이상의 진행 상황에서 사용
   - @click="replace('volume')"

# 생성, 수정 페이지 (6/20 ~ 고도화 예정)

1. isUpdate 변수 선언
2. router 경로에 따라 isUpdate 분기
