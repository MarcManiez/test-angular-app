angular.module('filterer.services', [])

.factory('Requests', $http => {
  const postEntry = (entry) => {
    return $http({
      method: 'POST',
      url: '/input',
      data: entry
    })
    .then(res => {
      return res.data;
    });
  };

  return {
    postEntry: postEntry
  };
});