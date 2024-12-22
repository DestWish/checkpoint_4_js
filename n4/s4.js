function checkObj(obj) {
    return 'particle' in obj;
}
console.log(checkObj({ id: 1, particle: 10 }));
console.log(checkObj({ id: 2, name: "tag" }));