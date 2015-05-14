'use strict';

angular
  .module('neocareer')
  .controller('DashboardCtrl', [function() {
    var self = this;
    var date = new Date();
    var iso = date.toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2})/);

    self.companyList = [
      {
        company: 'Angular',
        image:   'assets/images/angular.png',
        date:    iso[1] +  ' '+ iso[2],
        address: 'Mountain View 1600 Amphitheatre Parkway Mountain View, CA',
        likes:   3,
        editable:false,
        editText:'Edit',
        intro:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, est blanditiis quis! Labore perspiciatis enim nihil ut voluptate dicta dolorum!'
      },
      {
        company: 'Gulp',
        image:   'assets/images/gulp.png',
        date:    '2015-05-15 09:30',
        address: 'Mountain View 1601 Amphitheatre Parkway Mountain View, CA',
        likes:   1,
        editable:false,
        editText:'Edit',
        intro:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, est blanditiis quis! Labore perspiciatis enim nihil ut voluptate dicta dolorum!'
      },
      {
        company: 'Jasmine',
        image:   'assets/images/jasmine.png',
        date:    '2015-05-16 011:30',
        address: 'Mountain View 1602 Amphitheatre Parkway Mountain View, CA',
        likes:   2,
        editable:false,
        editText:'Edit',
        intro:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, est blanditiis quis! Labore perspiciatis enim nihil ut voluptate dicta dolorum!'
      },
      {
        company: 'Karma',
        image:   'assets/images/karma.png',
        date:    '2015-05-17 014:00',
        address: 'Mountain View 1603 Amphitheatre Parkway Mountain View, CA',
        likes:   4,
        editable:false,
        editText:'Edit',
        intro:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, est blanditiis quis! Labore perspiciatis enim nihil ut voluptate dicta dolorum!'
      },
      {
        company: 'Yeoman',
        image:   'assets/images/yeoman.png',
        date:    iso[1] +  ' '+ iso[2],
        address: '1 Infinite Loop Cupertino, CA 95014',
        likes:   5,
        editable:false,
        editText:'Edit',
        intro:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, est blanditiis quis! Labore perspiciatis enim nihil ut voluptate dicta dolorum!'
      },
    ];

    self.coming = self.companyList[4];
    self.toGo = self.companyList[0];
    self.alerts = [];
    self.temp = {
      company: '',
      image:   'assets/images/angular.png',
      date:    '',
      address: '',
      likes:   '',
      intro:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, est blanditiis quis! Labore perspiciatis enim nihil ut voluptate dicta dolorum!'
    };

    self.addToGo = function(index) {
      var selected = self.companyList[index];
      self.toGo = selected;
      self.alerts.push({
        type: 'success',
        msg:  'Well done! Your successfully add ' + selected.company + ' to go.'
      });
    };

    self.editItem = function(index) {
      var selected = self.companyList[index];
      selected.editable = !selected.editable;
      selected.editText = (selected.editable) ? 'OK' : 'Edit';
    };

    self.deleteItem = function(index) {
      var selected = self.companyList[index];
      self.companyList.splice(index, 1);
      self.alerts.push({
        type: 'danger',
        msg:  'Oops! You just fired a company. ' + selected.company + ' lost a talent.'
      });
    };

    self.closeAlert = function(index) {
      self.alerts.splice(index, 1);
    };

    self.addToList = function() {
      self.companyList.push(self.temp);
      self.alerts.push({
        type: 'success',
        msg:  'Well done! Your just added ' + self.temp.company + ' to company list.'
      });

      self.temp = {
        company: '',
        image:   'assets/images/angular.png',
        date:    '',
        address: '',
        likes:   '',
        intro:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, est blanditiis quis! Labore perspiciatis enim nihil ut voluptate dicta dolorum!'
      };
    };
  }]);