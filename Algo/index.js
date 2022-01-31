function reverse(arr) {
    for(var left = 0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

    }
    return arr;
}

var a = reverse(["a", "b", "c", "d", "e"]);
console.log(a);