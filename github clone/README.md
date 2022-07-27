# GitHub Clone

기본이 중요하다는 말 뭔지 알 것 같다 ㄱ-
밀도 있는 정보들이 쏟아질수록 .. 봤던 것 다시 보기 너무너무 중요하고, 자바스크립트나 리액트 이렇게 진도 나가면서 스택을 늘려나갈수록 이전에 배웠던 것들을 맹목적으로 안다고 착각하는 느낌을 경계하자  
내가 나중에 백지 상태에서 자연스럽게 쓸 수 있는 속성들인가? 생각하면서 클론코딩을 진행하였다. 

```
README로 클론 코딩 하면서 복기한 내용, 새로 배운 점, 느낀 점 팁 등 무엇이든 배운 내용들을 엮어서 작성 (일단 메모-> 추후 구체화하며 복습)  
정리가 간단하게 안 되거나 추가 공부 상세하게 필요할 시 tistory에 글 쓰고 링크 첨부하기
```

---

### :book: 개념들 

#### @import 를 이용한 css 분할도 고려했지만  
반응형으로 작업했을 때 css 파일이 증가함을 고려해서 `<link>`로 css를 연결하는 방법 이용.  
import는 브라우저가 로드해야하는 css 파일들이 늘어나는 것이라`<link>` 보다 속도가 느려진다고 한다.

#### -  오픈그래프(og), 트위터카드  
: SNS 등에 해당 웹사이트가 공유되었을 때의 미리보기 정보를 설정한다.  
메타 태그를 꼼꼼하게 잘 작성해서 검색엔진이나 공유되었을 때 보이는 웹사이트의 퀄리티 높이기!   

#### - cdn = Content-Delivery-Network  
‘게임 클라이언트나 콘텐츠를 효율적으로 전달하기 위해 분산된 서버에 데이터를 저장해 사용자에게 전달하는 시스템.’  
웹 캐시의 클라우드화, 인터넷 캐시에 컨텐츠 저장하는 방식으로 콘텐츠의 효율적인 전달을 돕는다.  
지리적 제약 없이 전 세계 사용자에게 빠르게 콘텐츠 전송 가능 - 한국 사용자가 접속하면 한국 캐시 서버에서 뿌려주는 식이다.  
해당 프로젝트에서는 css reset cdn을 이용하였다. (:link: https://cdnjs.com/libraries/meyer-reset)

#### - Vendor Prefix(브라우저 업체별 접두사) : 실험적 기능을 해당 브라우저에서 쓸 수 있게 한다. --webkit-- 같은 것들

### :black_nib:작명에 대하여 

#### - BEM : 작명 규칙 (css 방법론): BEM은 Block, Element, Modifier를 뜻함  
태그의 중첩이 깊어지면 클래스 이름이 길어진다는 문제점O  
* Block : A functionally independent page component that can be reused. : 재사용이 가능하며 기능적으로 독립된 페이지 컴포넌트  
* Element : 블럭을 구성하는 단위이며 소속한 블록에 의존적  
* Modifier : 블록, 엘리먼트의 변형, 속성  

>`-` (하이픈1) : 일반적 이름 연결 ex) toggle-btn  
>`--` (하이픈 2) : ~의 상태 ex) btn--success, btn--danger, section--visual  
>`__` (언더스코어 2) : ~의 일부분이다 ex)body__container, summary__description   
  
- Container, wrapper, inner: 섹션 안의 컨텐츠들을 감싸서 안으로 몰아주는 역할을 하는 클래스명을 설정할 때  
- form 안의 button type이 submit인 경우 form 안의 양식들이 action에 있는 주소로 전송된다.

### :recycle: 유지, 보수, 재사용성에 대하여 
- 일일이 지정하기보다는 css의 상속을 적극 활용한다  
- width: 100%로 하고 부모요소(inner 등)의 가로사이즈 맞춰 상속받기
- `inline-flex`에 width값 따로 설정하지 않음으로서 작성하는 컨텐츠에 따라 가로 사이즈 조절되는 효과
- 전역으로 쓰이는 스타일을 파악하고 클래스로 지정해놓은 후, 필요할 때 클래스를 추가함으로써 활용하기  
: 굉장히 생산적이라고 느낀 부분. 부모요소 제어를 통해 한번에 사이즈 제어할 수 있도록 설계하는 것  
- clearfix와 float left,right를 클래스로 지정해 놓은 후 사용하기  
- 그 외 신경써 볼 디테일 : 논리적 구조에 맞게 css 스타일 작성 위치 배치하기  

### 전역 속성 및 Header, Visual 
- `.btn:hover::before`에 `position: absolute` 걸려있을 경우 -> `position: relative`를 설정할 부모요소는`.btn` 이어도 되는구나! (왜 이걸 몰랐지)  

이걸 활용해서
```css
.class-example {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
```
부모요소의 100퍼센트 쓰겠다는 뜻.  
- `box-shadow` 그림자 다중으로 넣기 

```css
  .input--text:focus {
    border-color: #51a7e8;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.075), 0 0 5px rgba(81, 167, 232, 0.5); 
    /*순서대로 안쪽 그림자, focus그림자*/
  }
```

- 클릭할 때의 편의성 : 클릭 가능한 범위 확장하기 위하여 padding 사용

- 로고의 대체텍스트 처리 : 대체텍스트를 요소의 content로 입력한 후 `text-indent : -9999px` 속성으로 화면 밖으로 밀어준다  

- 큼직큼직한 개념에는 그 안의 absolute가 걸릴 수 있도록 `position: relative` 추가해주고 그 안에서 배치할 수 있도록 조정하는 것이 일반적

- 배경 img를 원본보다 어둡게 설정하기

```css
.section--visual {
    background-size: cover;
}
.section--visual::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /*전방향 0에 absolute = 부모 사이즈 100%효과*/
    background: rgba(0,0,0,.3);
```

- 텍스트 줄바꿈을 어떻게 할까: `<br>`말고 `&nbsp;` 이용해 단어 묶기 - 반응형을 대비

### Feature
- 반응형 작업 맛보기 > iframe 태그를 통해 동영상 삽입, 16:9의 반응형 동영상을 구현하기 위해 video-ratio 태그 생성하여 `padding-top: 56.25%` (계산한 비율) 을 통해 높이 비율 부모요소의 width에 종속  
- 화면 바깥 너비까지 써야함 :max-width을 따로 설정해줘서 기존의 inner 가로폭 덮어씌움  

### Footer  
- `<svg>` 이용 -> css에서 fill 속성을 통한 색깔 조정 
- footer.logo의 가운데 배치하는 코드

```css
footer .logo {
    position: absolute;  
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto; 
    width: 24px;
    height: 24px;
}
```

  
### :pushpin: 추후 체크해 볼 것  
1. 삽입한 API 관련한 코드를 비롯한 JS코드 
2. form의 method ="POST" api배우고 나서 다시 한 번 보기



