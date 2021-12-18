// Function that returns 5 dummy users array
export function getMockUsers() {
    return [
        {
            id: 1,
            name: 'John Doe',
            email: 'user1@example.com'
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'user2@example.com'
        },
        {
            id: 3,
            name: 'Jack Doe',
            email: 'user3@example.com',
        },
        {
            id: 4,
            name: 'Jill Doe',
            email: 'user4@example.com',
        },
        {
            id: 5,
            name: 'Joe Doe',
            email: 'user5@example.com',
        }
    ]
}

// Function that returns 5 dummy posts array with userId
export function getMockPosts() {
    return [
        {
            id: 1,
            title: 'Post 1',
            body: 'This is the body of post 1',
            userId: 1
        },
        {
            id: 2,
            title: 'Post 2',
            body: 'This is the body of post 2',
            userId: 2
        },
        {
            id: 3,
            title: 'Post 3',
            body: 'This is the body of post 3',
            userId: 3
        },
        {
            id: 4,
            title: 'Post 4',
            body: 'This is the body of post 4',
            userId: 4
        },
        {
            id: 5,
            title: 'Post 5',
            body: 'This is the body of post 5',
            userId: 5
        }
    ]
}