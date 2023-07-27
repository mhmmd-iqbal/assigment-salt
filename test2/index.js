const data = {
    'input.txt': 'Randy',
    'code.py': 'Stan',
    'output.txt': 'Randy',
};

const output = {};

Object.entries(data).forEach(([filename, name]) => {
    if (output[name]) {
        output[name].push(filename);
    } else {
        output[name] = [filename];
    }
});

console.log(output);