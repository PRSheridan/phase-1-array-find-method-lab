function superbowlWin(record) {
    const isWin = function(element) {
        if (element.result === 'W') {
            return element.year;
        }else{
            return null;
        }
    }
    let test = record.find(isWin);
    if (test != null) {
        return test.year
    } else {
        return undefined;
    }
}