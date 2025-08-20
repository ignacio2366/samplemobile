
const mockData = [1,1,2,2,3,3,4,4,2,5]

const filteredData = (data) => {
    const result = [];
    data.forEach((item, index) => {
        if (item !== data[index - 1]) {
            result.push(item);
        }
    });
    return result;
}
const input = filteredData(mockData);
console.log(input);