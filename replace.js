const shell = require("shelljs");

let replacements = [
    {target: "Tester", repl: "Tester_repl"}, 
    {target: "ClassThree", repl: "ClassThree_repl"}
];

shell.find("./src").filter((file) => file.match(/\.ts$/)).forEach((file) => {
    console.log(file);

    for (replacement of replacements) {
        let regexp = new RegExp(`(from.*)(${replacement.target}\\b)`, "g");
        console.log(regexp);
        shell.sed("-i", regexp, `$1${replacement.repl}`, file);
    }
});