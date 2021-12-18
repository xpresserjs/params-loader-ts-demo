import {Controller} from "xpresser/types/http";
import {getMockPosts, getMockUsers} from "../models/MockModel";


const AppController = <Controller.Object>{
    /**
     * Controller name.
     * @type {string}
     */
    name: 'AppController',

    middlewares: {
        "params.userId": ["user"],
        "params.postId": ["post"],
    },

    /**
     * Get all users
     * @returns {string}
     */
    users(http) {
        return http.view("index", {users: getMockUsers()})
    },

    /**
     * Get all posts
     * @returns {string}
     */
    posts(http) {
        return http.view("index", {posts: getMockPosts()})
    },

    /**
     * Get a particular user
     */
    user(http, boot) {
        // Because addToBoot is specified in `userId` param loader
        // it will be available in `boot` object.
        // if there is no boot function in the controller.

        return {
            boot: boot.user,
            loadedParam: http.loadedParam("user")
        }
    },

    /**
     * Get a particular post
     */
    post(http) {
        // PostId will be a number because of the `postId` param loader has converted it.
        // However, a type `number` should be added for type’s sake.
        const postId = http.loadedParam<number>("postId");

        return {
            loadedPostId: postId,
            defaultPostId: http.params.postId,
            post: getMockPosts().find(post => post.id === postId)
        }
    }
};

export = AppController;
