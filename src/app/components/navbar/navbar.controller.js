'use strict';

angular
  .module('neocareer')
  .controller('NavbarCtrl', ['$location', function ($location) {
    var self = this;

    // TODO: get user info from server
    self.user = {
      account: 'Aaron Hsieh',
      img:     'https://avatars3.githubusercontent.com/u/6642653?v=3&s=460'
    };

    /**
     * [isActive add 'active' class to current navbar]
     * @param  {[string]}  slug [the slug for current path]
     * @return {Boolean}        [if the slug matches the nav, return true]
     */
    self.isActive = function(slug) {
      return slug === $location.path();
    };

  }]);
