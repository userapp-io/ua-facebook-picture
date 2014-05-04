'use strict';

/* AngularJS directive to show the Facebook profile picture of the logged in user using UserApp. */

angular.module('UserApp.facebook-picture', []).
	directive('uaFacebookPicture', function(user, UserApp) {
		return function(scope, element, attrs) {
			function getFacebookProfilePicture(callback) {
				if (callback && user.current) {
					user.avatarCache = user.avatarCache || {};

					if (user.avatarCache[user.current.user_id]) {
						callback(user.avatarCache[user.current.user_id]);
						return;
					}

					UserApp.OAuth.Connection.search({
					    user_id: 'self',
					    fields: ['provider_id', 'provider_user_data']
					}, function(error, result) {
						if (!error) {
							for (var i = 0; i < result.items.length; ++i) {
								if (result.items[i].provider_id == 'facebook') {
									var url = 'http://graph.facebook.com/' + result.items[i].provider_user_data.id + '/picture?type=' + (attrs.uaFacebookPicture || 'small');

									if (attrs.width) {
										url += '&width=' + attrs.width;
									}

									if (attrs.height) {
										url += '&height=' + attrs.height;
									}

									user.avatarCache[user.current.user_id] = url;
									callback(url);
									return;
								}
							}
						}

						callback(null);
					});
				}
			}
			
			getFacebookProfilePicture(function(url) {
				if (url) {
					element.attr('src', url);
				}
			});
		};
	});
