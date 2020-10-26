// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
    const newDriver = Object.assign({}, driver, {[key]: value})
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
<<<<<<< HEAD
    return object;
}

function deleteFromDriverByKey(object, key) {
    const newDriver = Object.assign({}, object)
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;
=======
>>>>>>> 578fc500d58461e92c66219b9d9080d656f0e864
}
