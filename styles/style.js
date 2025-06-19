{// 좋아요 버튼 클릭 이벤트 처리
    const likeBtns = document.querySelectorAll('.like');
    const cancleLikeBtns = document.querySelectorAll('.cancle-like');

    likeBtns.forEach(likeBtn =>{
        likeBtn.addEventListener('click',function() {
            const cancleLikeBtn = this.parentElement.querySelector('.cancle-like');
            
            if(this === likeBtn){
                likeBtn.style.display = "none";
                cancleLikeBtn.style.display = "block";            
            }
        })
    })

    cancleLikeBtns.forEach(cancleLikeBtn =>{
        cancleLikeBtn.addEventListener('click',function() {
            const likeBtn = this.parentElement.querySelector('.like');
            
            if(this === cancleLikeBtn){
                likeBtn.style.display = "block";
                cancleLikeBtn.style.display = "none";            
            }
        })
    })

}





{// 다크모드 전환 
    const toggleThemeBtn = document.querySelector(".header__theme-button");

    document.onload = setInitialTheme(localStorage.getItem('theme'));
    function setInitialTheme(themeKey){
        if(themeKey === 'dark'){
            document.documentElement.classList.add('darkTheme');
        }else{
            document.documentElement.classList.remove('darkTheme');
        }
    }

    toggleThemeBtn.addEventListener('click', ()=>{
        document.documentElement.classList.toggle('darkTheme');

        if(document.documentElement.classList.contains('darkTheme')){
            localStorage.setItem('theme','dark');
        }else{
            localStorage.setItem('theme','light');   
        }
    })

}