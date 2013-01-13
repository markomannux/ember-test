var App = Ember.Application.create();
App.Store = DS.Store.extend({
  revision: 10,
  adapter: DS.RESTAdapter.create({
    serializer: DS.JSONSerializer.create()
    })
});

App.store = App.Store.create();

App.Profile = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
});

App.Contact = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string')
});

App.ready = function() {
  console.log('init');
}

App.ApplicationController = Ember.Controller.extend({
  profile: null
});
App.ProfileController = Ember.Controller.extend({
  firstName: ''
});
App.AboutController = Ember.Controller.extend({
});
App.ApplicationView = Ember.View.extend({
  templateName: 'application',
});
App.ProfileView = Ember.View.extend({
  templateName: 'profile',
});
App.AboutView = Ember.View.extend({
  templateName: 'about',
});

App.ContactsController = Ember.ArrayController.extend({

  max: 10,
  offset: 0,
  addContact: function() {
    console.log("aaa");
    var contact = App.store.createRecord(App.Contact,{
      firstName: 'marco',
        lastName: 'mannucci',
        email: 'mmannucci@aaa.it'
    });
    App.store.commit();
    this.set('content',App.Contact.find({max: this.max, offset:this.offset}));
  }
});
App.ContactsView = Ember.View.extend({
  templateName: 'contacts',
  addContact: function() {
    this.get( 'controller' ).addContact();
  }

});

App.Router = Ember.Router.extend({
  root: Ember.Route.extend({

    showProfile: Ember.Route.transitionTo('profile'),
    showAbout: Ember.Route.transitionTo('about'),
    showHome: Ember.Route.transitionTo('index'),
    showContacts: Ember.Route.transitionTo('contacts'),

    index: Ember.Route.extend({
      route: '/',
      connectOutlets: function(router) {
        var controller = router.get('applicationController');
        controller.profile = App.store.createRecord(App.Profile,{
          firstName: 'marco',
          lastName: 'mannucci'
        });
        console.log(controller.profile);
        App.store.commit();
        controller.set('title', "welcome"); 
        controller.disconnectOutlet(); 
      }
    }),

    profile: Ember.Route.extend({
      route: '/profile',
      connectOutlets: function(router) {
        var controller = router.get('applicationController');
        controller.set('title', "profile"); 
        controller.connectOutlet('profile', controller.profile);
      }
    }),

    contacts: Ember.Route.extend({
      route: '/contacts',
      connectOutlets: function(router) {
        var controller = router.get('applicationController');
        controller.set('title', "contacts"); 
        controller.connectOutlet('contacts', App.Contact.find({max:3}));
      }
    }),
    about: Ember.Route.extend({
      route: '/about',
      connectOutlets: function(router) {
        var controller = router.get('applicationController');
        controller.set('title', "about"); 
        controller.connectOutlet('about');
      }
    })
  }),
})

App.initialize();
