const shell = require("shelljs");

const repl1 = {
    target: "Tester",
    repl: "Tester_repl"
};

let replacements = [repl1];

shell.find("./src").filter((file) => file.match(/\.ts$/)).forEach((file) => {
    console.log(file);

    for (replacement of replacements) {
        let regexp = new RegExp(`(from.*)(${replacement.target}\\b)`, "g");
        console.log(regexp);
        shell.sed("-i", regexp, `$1${replacement.repl}`, file);
    }
});

/*new webpack.NormalModuleReplacementPlugin(
    /src\/Tester.ts/,
    path.join(__dirname, '/src_repl/Tester_repl.ts')
),

new webpack.NormalModuleReplacementPlugin(
    /src\/inheritance_chain\/ClassThree.ts/,
    path.join(__dirname, '/src_repl/inheritance_chain/ClassThree.ts')
)*/