// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener("DOMContentLoaded", function() {
  const profileIcon = document.querySelector('.profile_icon');
  const fileField = document.getElementById('avatar_field');
  const form = profileIcon.closest('form');//フォーム要素を取得

  profileIcon.addEventListener('click', function() {
    fileField.click();// ファイル選択ダイアログを開く
  });
  fileField.addEventListener('change', function(){
    if (fileField.files.length > 0) {
      form.submit();
    }
  });
});
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
