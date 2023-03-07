
const friendName = ['sajid', 'mamun', 'jubayer bin rashed', 'kamal', 'chinku'];
function bestFriend(num) {
    let maxvalue = num[0].length;
    let largestName = num[0];
    for (let i = 0; i < num.length; i++) {
        let element = num[i].length;
        if (element > maxvalue) {
            largestName = num[i];
            maxvalue= element;
        }


    }

    
    return largestName;
}
const bigName = bestFriend(friendName);
console.log(bigName)

