document.addEventListener("DOMContentLoaded", function() {
    let langToggle = document.querySelector(".lang-switch");

    if (langToggle) {
        langToggle.addEventListener("click", function(e) {
            localStorage.setItem("currentLang", this.innerText === "EN" ? "en" : "ko");
        });

        // 페이지 로드 시 버튼 상태 유지
        let currentLang = localStorage.getItem("currentLang");
        if (currentLang) {
            langToggle.innerText = currentLang === "ko" ? "KR" : "EN";
        }
    }
});
