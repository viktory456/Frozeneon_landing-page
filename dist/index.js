window.onload = function(){
    document.querySelector('.shop__menu').addEventListener('click', tabSelector);

    function tabSelector(event) {
        console.log(event);
        if (event.target.className == 'shop__menu-title'){
            var dataTab = event.target.getAttribute('data-tab');
            var tabTitles = document.getElementsByClassName('shop__menu-title');
            for (var i=0; i<tabTitles.length; i++){
                tabTitles[i].classList.remove('active');
            }
            event.target.classList.add('active');
            var tabBody = document.getElementsByClassName('shop__items-list');
            for (var i = 0; i< tabBody.length; i++) {
                if(dataTab == i) {
                    tabBody[i].style.display = 'block';
                } else {
                    tabBody[i].style.display = 'none';
                }
            }
        }
        
    }
}