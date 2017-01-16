angular.module('filterer.services', [])

.factory('requests', $http => {
  const postEntry = (entry) => {
    return $http({
      method: 'POST',
      url: '/input',
      data: entry
    })
    .then(res => {
      return resp.data;
    });
  }
});