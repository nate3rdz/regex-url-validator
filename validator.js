/**
 * A function that creates a regex to validate a URL.
 * @param {Array<string>} acceptedDomains an array that contains all the accepted domains of the possible url (e.g. ['http://google.it', 'https://google.it'])
 * @param {Array<string>} acceptedArguments an array that contains all the accepted arguments of the possible url (e.g. ['http://google.it/somewhat/ARGUMENTHERE'])
 * @returns {String} the regex needed to validate the url
 */
 function createUrlRegexValidator(acceptedDomains, acceptedArguments){

    let regexValidator = '('; //initialize the regex string
    for(let i = 0; i < acceptedDomains.length; i++){ //puts all the accepted domains into the regex
        if(i+1 != acceptedDomains.length) regexValidator += (acceptedDomains[i] + '|');
        else regexValidator += acceptedDomains[i];
    }

    regexValidator += ')(.+)/('; //put your data here

    for(let i = 0; i < acceptedArguments.length; i++){ //puts all the accepted arguments into the regex
        if(i+1 != acceptedArguments.length) regexValidator += acceptedArguments[i];
        else regexValidator += acceptedArguments[i];
    }
    regexValidator += ')'; //end of the regex

    return regexValidator;
}

module.exports = {
    createUrlRegexValidator
}