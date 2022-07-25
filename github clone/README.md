# GitHub Clone

기본이 중요하다는 말 뭔지 알 것 같다 ㄱ-
밀도 있는 정보들이 쏟아질수록 .. 봤던 것 다시 보기 너무너무 중요하고 안다고 착각하는 느낌을 경계하자

```
README로 클론 코딩 하면서 복기한 내용, 새로 배운 점, 느낀 점 팁 등 ***무엇이든 배운 내용들*** 엮어서 작성
정리가 간단하게 안 되거나 추가 공부 상세하게 필요할 시 tistory에 글 쓰고 링크 첨부하기
```

---

## Ch.1 ~ Ch.4

### HEADER , VISUAL

:book: 오픈그래프, 트위터카드

cdn = Content-Delivery-Network

작명에 대하여

BEM : 작명 규칙
body**container ??
** ~의 일부분이다
— ~의 상태  
Ex 버튼 수식어
Btn success
Btn danger
Btn--success로 표현하는 것처럼
Toggle-btn

.. Container, wrapper, inner
섹션 안의 컨텐츠들을 감싸서 안으로 몰아주는 역할을 하는 클래스명을 설정할 때

Form이나

추후 체크해 볼 것
form의 method ="POST" api배우고 나서 다시 한 번 보기

form 안의 button type이 submit인 경우 form 안의 양식들이 action에 있는 주소로 전송된다

재사용성

Width: 100%로 하고 부모요소(inner 등)의 가로사이즈 맞춰 상속받기

// inline-flex에 width값 따로 설정하지 않음으로서
=> 작성하는 컨텐츠에 따라 사이즈 조절되게

전역으로 쓰이는 스타일을 파악하고 클래스로 지정해놓은 후, 필요할 때 클래스를 추가함으로써 활용하기

굉장히 생산적이라고 느낀 부분. 부모요소 제어를 통해 한번에 사이즈 제어할 수 있도록 설계하는 것도 너무 인상깊고 …..좋다.. (김혜수짤) 감동심하다

신경 써볼 디테일 -
논리적 구조에 맞게 css 스타일 작성 위치 배치하기

.btn:hover::before의 경우
가상선택자의 포지션 absolute  
-> position: relative를 설정한 부모요소는.btn 이어도 되는구나..

이걸 활용해서
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
부모요소의 100퍼센트 쓰겠다는 뜻

:focus 시 box에 box 스타일
box shadow에 대하여
Box-shadow: 0 1px 2px red;
(X,y,px,blur)
box-shadow: inset 0 1px 2px red;
Inset 추가하면 박스 내부에 그림자 추가

Vendor Prefix(브라우저 업체별 접두사) : 실험적 기능을 해당 브라우저에서 쓸 수 있게 함

클릭할 때의 편의성 : 클릭 가능한 범위 확장하기 위하여 padding 사용

로고의 대체텍스트 처리 :
대체텍스트를 content로 입력한 후
text-indent : -9999px 로 화면 밖으로 밀어준다

큼직큼직한 개념에는 그 안의 absolute가 걸릴 수 있도록 position: relative 추가해주고 그 안에서 배치할 수 있도록

배경 img 원본보다 어둡게 설정하기
background-size: cover;

플렉스 아이템에 대한 속성들 (Flex-grow)
Flex-basis: auto 여서 발생한 문제
ㄴ 플렉스 아이템의 초기 크기

Flex-grow

Flex-grow 0
Shrink 1
Basis auto
기본값
flex라는 단축속성 사용시 flex-basis:0 으로 설정됨

텍스트 줄바꿈을 어떻게 할까:
<br>말고 &nbsp; 이용해 단어 묶기 - 반응형 대비

### Chp. Feature

반응형 작업 맛보기

iframe 태그를 통해 동영상 삽입하기
16:9의 반응형 동영상을 구현하기 위해 video-ratio 태그 생성,
padding-top: 56.25% (계산한 비율) 을 통해 높이 비율 부모요소의 width에 종속

화면 바깥 너비까지 써야함
max-width을 따로 설정해줘서 기존의 inner 가로폭 덮어씌움
tiles 는 ~~grid로 배치~ -> float 방법

### Chp.7 Where is
