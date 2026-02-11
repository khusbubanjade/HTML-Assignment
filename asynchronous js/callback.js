// Task 1: Understanding callbacks

function getUser(id, callback) {
    setTimeout(() => {
        const user = { id: id, name: "Ram" };
        callback(user);
    }, 2000);
}

getUser(1, function(user) {
    console.log("User fetched");
    console.log("User Name:", user.name);
});