// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix) && matrix.length !== 0 ) {
        let newm = [];
        matrix.forEach((element, i) => {
            if (i % 2 !== 0) {
                element.reverse()
            }
            element !== ',' ? newm.push(...element) : ''
        });
        return newm
    } else {
        return []
    }
};
