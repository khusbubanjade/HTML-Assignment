function printPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let stars = "*".repeat(2 * i + 1);
        console.log(stars);
    }
}
printPyramid(5);