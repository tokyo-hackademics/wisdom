Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  onBeforeAction: function() {
    this.next();
  }
});

Router.route('/', {
  name:'home'
});