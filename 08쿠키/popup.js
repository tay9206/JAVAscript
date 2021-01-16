function createCookie(name) {
    
    // 1. 쿠키생명주기
    var date = new Date();
    date.setDate( date.getDate() + 1 ); // 1일 설정
    
    // 2. 쿠키형식 설정
    var cookie = "";
    cookie += name + "=true;";  // 쿠키 이름, 값 설정
    cookie += "expires=" + date.toUTCString();   // 시간 설정


    document.cookie = cookie;
}


function getCookie(name) {

    var cookies = document.cookie.split("; ");    // 쿠키 자르기
    
    // 쿠키를 확인
    for(var i in cookies) {
        if(cookies[i].search(name) != -1) {     // 쿠키를 탐색
            return true;   
        }
    }

    // 아무값이 없다면 return false

}







