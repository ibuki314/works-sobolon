// 要素の取得
const hamburgerButton = document.querySelector("#js-header-hamburger-button");
const drawer = document.querySelector("#js-drawer");
const body = document.body;
const header = document.querySelector("#header");

// ハンバーガーボタンのクリックイベント
hamburgerButton.addEventListener("click", (event) => {
  event.preventDefault();
  toggleDrawer();
});

// ドロワー内のリンクのクリックイベント
document
  .querySelectorAll('#js-drawer-nav a[href^="#"]')
  .forEach((drawerLink) => {
    drawerLink.addEventListener("click", closeDrawer);
  });

// ドキュメントのクリックイベント
document.addEventListener("click", (event) => {
  if (!isClickInsideDrawerOrHeader(event)) {
    closeDrawer();
  }
});

// ドロワーのトグル関数
function toggleDrawer() {
  hamburgerButton.classList.toggle("active");
  drawer.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

// ドロワーを閉じる関数
function closeDrawer() {
  hamburgerButton.classList.remove("active");
  drawer.classList.remove("active");
  body.classList.remove("no-scroll");
}

// ドロワーまたはヘッダー内のクリック判定関数
function isClickInsideDrawerOrHeader(event) {
  return (
    drawer.contains(event.target) ||
    header.contains(event.target) ||
    event.target === drawer ||
    event.target === header
  );
}
