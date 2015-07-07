/**
 * Created by dudi on 07/07/2015.
 */

exports.makeAnArray = function(array) {
    //if the parameter is empty it will be empty array
    if (!array) {
        array = []
    }
    //if the parameter is not an array it will be an array with one element
    else if (!Array.isArray(array)) {
        array = [array];
    }
    return array;
};

exports.getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};