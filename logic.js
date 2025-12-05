
document.getElementsByClassName("download-app")[0].addEventListener("click", function (e) {
  e.preventDefault();
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    //window.location.href = "https://images.1492929.com/wsd-images-prod/mm88vndkf3/merchant_resource/android/mm88vndkf3_2.4.68_20250807230349.apk";
    window.location.href = "https://mm88-download-app.pages.dev/";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    //window.location.href = "https://images.1492929.com/wsd-images-prod/mm88vndkf3/merchant_resource/mobileconfig/mm88vndkf3_2.4.3_20250807230323.mobileconfig";
    window.location.href = "https://mm88-download-app.pages.dev/";
  } else {
    alert("Vui lòng tải ứng dụng trên điện thoại Android hoặc iOS.");
  }
});
