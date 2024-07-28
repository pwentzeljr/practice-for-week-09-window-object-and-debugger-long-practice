export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here
    function _traverse(el) {
        if (el.id === id) {
            return el
        }

        let found;
        if (el.children.length > 0) {
            for (const child of el.children) {
                found = _traverse(child);
                if (found) break;
            }
        }
        return found;
    }

    return _traverse(document.body)
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
    function _traverse(el) {
        if (el.tagName === tag) {
            return el
        }

        let found;
        if (el.children.length > 0) {
            for (const child of el.children) {
                found = _traverse(child);
                if (found) break;
            }
        }
        return found;
    }

    return _traverse(document.body)
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
    function _traverse(el) {
        if (el.classList.contains(cls)) {
            return el
        }

        let found;
        if (el.children.length > 0) {
            for (const child of el.children) {
                found = _traverse(child);
                if (found) break;
            }
        }
        return found;
    }

    return _traverse(document.body)
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    const rv = [];
    // Your code here
    function _traverse(el) {
        if (el.tagName === tag) {
            rv.push(el);
        }

        if (el.children.length > 0) {
            for (const child of el.children) {
                _traverse(child);
            }
        }
    }
    _traverse(document.body)
    return rv;
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
    const rv = [];

    function _traverse(el) {
        if (el.classList.contains(cls)) {
            rv.push(el);
        }

        if (el.children.length > 0) {
            for (const child of el.children) {
                _traverse(child);
            }
        }
    }
    _traverse(document.body)
    return rv;
}
