// 影片輪播
const videos = document.querySelectorAll('.video-carousel video');
let currentVideoIndex = 0;

function showNextVideo() {
  videos[currentVideoIndex].classList.remove('active');
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  videos[currentVideoIndex].classList.add('active');
}

setInterval(showNextVideo, 5000); // 每 5 秒切換影片

// 側邊欄
const sidebar = document.querySelector('.sidebar');
const openSidebarButton = document.querySelector('.open-sidebar');
const closeSidebarButton = document.querySelector('.close-sidebar');

openSidebarButton.addEventListener('click', () => {
  sidebar.style.width = '250px';
});

closeSidebarButton.addEventListener('click', () => {
  sidebar.style.width = '0';
});
