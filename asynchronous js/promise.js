// Task 3: Convert to Promise

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: id, name: "Ram" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 1000);
    });
}

// Using .then()
getUser(1)
    .then(user => {
        return getPosts(user.id)
            .then(posts => {
                return getComments(posts[0])
                    .then(comments => {
                        console.log("User:", user);
                        console.log("Posts:", posts);
                        console.log("Comments:", comments);
                    });
            });
    })
    .catch(error => {
        console.log("Error:", error);
    });
