import {getInstanceRouter} from "xpresser";
/**
 * See https://xpresserjs.com/router/
 */
const Route = getInstanceRouter();

/**
 * Url: "/" points to AppController@index
 * The index method of the controller.
 */
Route.get('/', 'App@users').name('users');
Route.get('/posts', 'App@posts').name('posts');
Route.get('/users/:userId', 'App@user').name('user');
Route.get('/posts/:postId', 'App@post').name('post');
