
// $(function(){
//     $('#btn-nav').on({
//         'click':function(){
//               $('.header,.nav').toggleClass('show-nav');
                
//         },
//     });
// })



window.onload=function(){
    let btnNav = document.getElementById('btn-nav');
    btnNav.addEventListener('click', function(){
        let _header = document.querySelector('.header');
        let _nav = document.querySelector('.nav');
        
        _header.classList.toggle('show-nav');
        _nav.classList.toggle('show-nav');
    });

    


}
// 슬라이더 생성 함수
function mySlider(_target){
    $(_target).bxSlider();
}

function disBlock(eventEle, target){
    eventEle.addEventListener('click', function(){
        target.style.display = 'block';
    })
    
    
}
function disNone(eventEleTarget){
    for(let idx=0; idx<eventEleTarget.length; idx++){
        eventEleTarget[idx].addEventListener('click', function(){
            eventEleTarget[idx].style.display = 'none';
           
        })
    }
}

function smScl(_target){
    $(_target).smoothScroll({
        speed: 600,
    })
}