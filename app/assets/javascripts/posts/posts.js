angular.module('flapperNews')
.factory('posts', [
  '$http',
  function(){
    var o = {
      posts: [{title: 'xxx'}]
    };
    return o;
 }])

