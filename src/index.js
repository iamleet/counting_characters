import * as io from './io';

export function main() {
    
    const string = io.prompt('What is the input string?');
    return `${string} has ${string.length} characters.`;

}