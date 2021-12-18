import {ParamsMiddleware} from "@xpresser/params-loader";
import {getMockUsers} from "../models/MockModel";


/**
 * ParamsMiddleware
 */
export = ParamsMiddleware({
    userId: {
        // Since load gets `user`
        // It would be better to rename the param to user.
        as: "user",
        // Add to boot for easy access in controller
        addToBoot: true,
        // Load user function
        load: (userId) => getMockUsers().find(user => user.id === Number(userId)),
        // Not found function
        notFound: (http, userId) =>
            http.status(404).json({
                error: `User: '${userId}' not found`
            })
    },

    postId: {
        // Convert the postId to a number
        load: postId => Number(postId),
    }
})
