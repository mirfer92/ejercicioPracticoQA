import { unflatten } from 'flat';

function replaceStringByObjectValue(string, replaceObj) {
    if (typeof(string) === 'string' && string.includes('(') && string.includes(')')) {
        const key = string.slice(string.indexOf('(') + 1, string.indexOf(')'));
        return string.replace(`(${key})`, replaceObj[key]);
    }
    return string;
}

function replaceObjectValuesFromObject(sourceObject, replaceObj) {
    if (typeof(sourceObject) === 'object' ) {
        for (const key in sourceObject) {
            if (Object.hasOwnProperty.call(sourceObject, key)) {
                const replacedValue = replaceStringByObjectValue(sourceObject[key], replaceObj);
                replaceObjectValuesFromObject(replacedValue, replaceObj);
                sourceObject[key] = isNaN(parseInt(replacedValue)) ? replacedValue : parseInt(replacedValue);
            }
        }
    }
}

function convertDataTableToObject(dataTable) {
    const dataObject = {};
    dataTable.rawTable.forEach((entry) => {
        dataObject[entry[0]] = isNaN(parseInt(entry[1])) ? entry[1] : parseInt(entry[1]);
    });
    return unflatten(dataObject);
}

export { convertDataTableToObject, replaceObjectValuesFromObject, replaceStringByObjectValue };