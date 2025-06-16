// '사진 추가하기' 버튼을 누르면 실행될 기능
document.getElementById('add-photo-btn').addEventListener('click', function() {
    
    // 이 코드는 '관리자 페이지'의 가장 기초적인 원리를 보여주기 위한 예시입니다.
    // 실제로는 비밀번호로 로그인하는 진짜 관리자 페이지를 만들고,
    // 서버에 파일을 업로드하는 복잡한 과정이 필요합니다.

    const newPhotoURL = prompt("추가할 사진의 이미지 주소(URL)를 입력하세요:", "https://via.placeholder.com/300x300.png?text=새+네일");

    if (newPhotoURL) {
        // 새로운 사진 요소를 만들어서 갤러리에 추가
        const gallery = document.querySelector('.gallery');
        const newPhotoDiv = document.createElement('div');
        newPhotoDiv.classList.add('photo');
        
        const newImage = document.createElement('img');
        newImage.src = newPhotoURL;
        newImage.alt = "새 네일아트";

        newPhotoDiv.appendChild(newImage);
        gallery.appendChild(newPhotoDiv);
        
        alert("새로운 사진이 포트폴리오에 추가되었습니다!");
    }
});
