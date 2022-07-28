// map API
function initMap() {
    const myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    }
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: myLatLng,
            scrollwheel: false, 
            zoom: 18
        }
    );
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Github'
    });
}

// toggle action 
(function(window, document) {
    'use strict'; 
    
    const toggles = document.querySelectorAll('.toggle'); //NodeList유사배열
    const toggleBtn = document.getElementById('toggle-btn');

    toggleBtn.addEventListener('click', function() {
        toggleElements();
    });
    //리사이즈 이벤트 (가로 1024 이상) 발생 시 토글 숨기기
    window.addEventListener('resize',function(){
        if(window.innerWidth > 1024) {
            // Off toggle element
        }
            offElements();
    })
    
    function toggleElements() {
        [].forEach.call(toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
        //유사배열 반복시키기
        //toggle 클래스 가진 요소들 개수가 여러개가 될 수 있으므로 하나씩 다 처리
    }

    function offElements() {
        [].forEach.call(toggles, function(toggle) {
            toggle.classList.remove('on');
        });
        
    }
})(window, document)
//즉시 실행 함수 전체 영역에서 window와 document객체를 즉시실행함수가 인수로 받음 
//전체 영역을 더럽히지 않도록 부분화 (모듈화)