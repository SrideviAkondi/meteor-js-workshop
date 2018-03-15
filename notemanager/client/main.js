import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Notes} from '../lib/collections.js';
import {Accounts} from 'meteor/accounts-base';

import './main.html';

//Account Config
Accounts.ui.config({
passwordSignupFields: 'USERNAME_ONLY'
});

Template.body.helpers({
	/*notes:[

	{text: 'My Note 1'},
	{text: 'My Note 2'},
	{text: 'My Note 3'}
	]*/
	notes(){
		return Notes.find({});
	}
});

Template.add.events({
  'submit .add-form': function(){
    event.preventDefault();
    const target= event.target;
    const text= target.text.value;

   /* Notes.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
*/
    Meteor.call('notes.insert', text);


    target.text.value='';
    console.log(text);

    return false;
  }
});

Template.note.events({
  'click .delete-note': function(){
/*    Notes.remove(this._id);
*/    Meteor.call('notes.remove', this);


    return false;
  }
});