// materialize initilization for sidebar navigation & materialize modals
console.log("style loaded")
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

// // materialize modals
// document.addEventListener('DOMContentLoaded', function() {
// var elems = document.querySelectorAll('.modal');
// var instances = M.Modal.init(elems, {});
// });

