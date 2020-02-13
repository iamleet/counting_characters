import * as dom from './dom';

export function prompt(message) {
    return dom.globals.prompt(message);
}

export function alert(message) {
    return dom.globals.alert(message);
}
