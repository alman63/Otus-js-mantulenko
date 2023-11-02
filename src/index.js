export function getPath(element) {
    let resultStr = '';
    if (!element) return Error;
    while (element.tagName != 'HTML') {
        let nameElemTag = element.tagName;
        let nameElemClass = element.getAttribute('class');
        const hasElemId = element.getAttribute('id');
        if (hasElemId) {
            resultStr = resultStr + ' > ' + `#${hasElemId}`;
            return resultStr.split(' ').reverse().join(' ').slice(0, -3);
        }
        if (nameElemClass)
            nameElemClass
                .replace(/ +/g, ' ')
                .trim()
                .split(' ')
                .forEach((el) => (nameElemTag += '.' + el));
        if (
            element.nextElementSibling ||
            (element.previousElementSibling && element.tagName !== 'BODY')
        )
            nameElemTag += `:nth-child(${getIndexChild(element)})`;

        resultStr = resultStr + ' > ' + nameElemTag;
        element = element.parentElement;
    }
    return resultStr.split(' ').reverse().join(' ').slice(0, -3);
}

function getIndexChild(element) {
    let firstSibling = element.parentElement.firstElementChild;
    let indexChild = 1;
    while (element !== firstSibling) {
        firstSibling = firstSibling.nextElementSibling;
        indexChild++;
    }
    return indexChild;
}
