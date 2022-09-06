let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
//   classList.remove( oldClassName )；
// 移除已经存在的类名;
// classList.toggle( className )；
// 如果classList中存在给定的值，删除它，否则，添加它；
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}