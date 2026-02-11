// Task 4: Async/await version

function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: id, name: "Ram" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 1000);
    });
}

async function showData() {
    try {
        const user = await getUser(1);
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0]);

        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    } catch (error) {
        console.log("Error:", error);
    }
}

showData();

