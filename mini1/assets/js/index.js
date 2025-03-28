// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = "block";
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "block";
  overlayBg.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  showContent("logo");
  const navbarItems = document.querySelectorAll(".w3-bar-item");

  navbarItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      if (this == navbarItems[0] && this.classList.contains("navbar__active")) {
        return;
      }
      navbarItems.forEach((nav) => nav.classList.remove("navbar__active"));
      this.classList.add("navbar__active");
    });
  });
});

function showContent(content) {
  document
    .querySelectorAll(".content-container")
    .forEach((section) => section.classList.add("hidden"));

  // Hiển thị phần nội dung tương ứng
  const targetSection = document.getElementById(content);

  if (targetSection) {
    targetSection.classList.remove("hidden");
  }

  mySidebar.innerHTML = "";

  if (content === "logo") {
    mySidebar.innerHTML = `
      <h4 class="w3-bar-item" style="pointer-events: none"><b>Menu</b></h4>
      <a class="w3-bar-item w3-button w3-hover-black" href="#classInfoOpening">Thông tin khai giảng</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#classInfoSeminar">Thông tin lớp</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#company">Thông tin công ty quan tâm</a>
      `;
  } else if (content === "infoCourse") {
    mySidebar.innerHTML = `
      <h4 class="w3-bar-item" style="pointer-events: none"><b>Menu</b></h4>
      <a class="w3-bar-item w3-button w3-hover-black" href="#classInfo">Thông tin chung</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#studySectionInfo">Phân bổ học phần</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#summaryVN">Mô tả tóm tắt học phần (Tiếng Việt)(*)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#summaryEN">Mô tả tóm tắt học phần (Tiếng Anh)(*)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#contentVN">Nội dung tóm tắt của học phần (Tiếng Việt)(*)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#contentEN">Nội dung tóm tắt của học phần (Tiếng Anh)(*)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#materialClass">Đề cương chi tiết của học phần(*)</a>
      `;
  } else if (content === "infoTech") {
    mySidebar.innerHTML = `
      <h4 class="w3-bar-item" style="pointer-events: none"><b>Công nghệ Web</b></h4>
      <a class="w3-bar-item w3-button w3-hover-black" href="#frontend">Frontend (Giao diện người dùng)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#backend">Backend (Máy chủ và xử lý dữ liệu)</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#database">Cơ sở dữ liệu</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#api">API và Tích hợp dịch vụ</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#devops">DevOps và Triển khai</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#security">Bảo mật</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#testing">Testing và Debugging</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#optimization">Performance Optimization</a>
      <a class="w3-bar-item w3-button w3-hover-black" href="#authentication">User Authentication & Authorization</a>
      `;
  } else if (content === "infoStudent") {
    mySidebar.innerHTML = `
    <h4 class="w3-bar-item" style="pointer-events: none"><b>Thông tin sinh viên</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#student-infor2">Thông tin học tập</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#student-infor3">Kĩ năng</a>
      `;
  }
}
