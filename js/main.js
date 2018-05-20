var post = new Vue({
  el:'#laporan',
  data: {
    list: [
      {
        img:'images/profil1.jpg',
        name: 'Sarah Doe',
        time: '2 minutes ago',
        title: 'Title Laporin',
        progress: '0',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img:'images/profil2.jpg',
        name: 'John Doe',
        time: '7 minutes ago',
        title: 'Title Laporin',
        progress: '10',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img:'images/profil3.jpg',
        name: 'Mei Ling',
        time: '2 hour ago',
        title: 'Title Laporin',
        progress: '7',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img:'images/profil4.jpg',
        name: 'Sudarmawan',
        time: '2 day ago',
        title: 'Title Laporin',
        progress: '73',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  }
});

Vue.component('navbar', {
  template:'<nav><div class="cell isi-laporan"><a href="home.html" class="active"><i class="fa fa-home fa-lg" aria-hidden="true"></i></a></div><div class="cell isi-laporan"><a href=""><i class="fa fa-user fa-lg"  aria-hidden="true"></i></a></div><div class="cell isi-laporan"><a href=""><i class="fa fa-dollar fa-lg"  aria-hidden="true"></i></a></div><div class="cell isi-laporan"><a href=""><i class="fa fa-list-alt fa-lg"  aria-hidden="true"></i></a></div><div class="cell isi-laporan"><a href=""><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a></div></nav>'
});

Vue.component('search', {
  template: '<div class="search-box"><div class="input-box"> <i class="fa fa-search" aria-hidden="true"></i> <input type="text" placeholder="Search"></div></div>'
});

var vm = new Vue({
  el: '#template'
});

function tes() {
  document.getElementById('content2').style.transform = "translateX(0)"
};
