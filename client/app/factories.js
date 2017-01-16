angular.module('filterer.services', [])

.factory('requests', $http => {
  const postEntry = () => {
    return $http({
      method: 'POST',
      url: '/input'
    })
    .then(res => {
      return resp.data;
    });
  }
});