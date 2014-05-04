# ua-facebook-picture

AngularJS directive to show the Facebook profile picture of the logged in user using [UserApp](https://www.userapp.io/).

## Requirements

* [AngularJS](http://angularjs.org/)
* [UserApp AngularJS Module](https://github.com/userapp-io/userapp-angular)

## Usage

**Download and include the `ua-facebook-picture.js` file in your *index.html*:**

```html
<script src="js/ua-facebook-picture.js"></script>
```

**Then in *app.js*, add it to your app's dependencies:**

```javascript
angular.module('myApp', [..., 'UserApp', 'UserApp.facebook-picture']);
```

**And last, in your templates, show the profile picture with the following code:**

```html
<img ua-facebook-picture>
```

**Note:** The directive caches the result from UserApp to save API calls.

## Types

Facebook allows you to get different sizes of the picture. Use the `ua-facebook-picture` directive to specify which type you want. You can choose from these types: `square`, `small`, `normal`, `large`

```html
<img ua-facebook-picture="large">
```

You can also use the attributes `width` and `height` to specify the exact size in pixels.

```html
<img ua-facebook-picture width="16" height="16">
```

Read more about it in Facebook's [API Graph Reference](https://developers.facebook.com/docs/graph-api/reference/v2.0/user/picture).

## Help

Contact us via email at support@userapp.io or visit our [support center](https://help.userapp.io). You can also see the [UserApp documentation](https://app.userapp.io/#/docs/) for more information.

## License

MIT. See LICENSE.

