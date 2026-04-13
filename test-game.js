// Test script to verify game logic

const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

// Extract CSV_DATA
const csvMatch = code.match(/const CSV_DATA = `([\s\S]*?)`;/);
if (!csvMatch) {
    console.log('ERROR: CSV_DATA not found');
    process.exit(1);
}
const CSV_DATA = csvMatch[1];

// Extract parseCSV function
const parseCSVMatch = code.match(/function parseCSV\(csvText\) \{[\s\S]*?return rows;\n\}/);
if (!parseCSVMatch) {
    console.log('ERROR: parseCSV function not found');
    process.exit(1);
}

// Create a sandbox to test the functions
const sandbox = {
    console: console,
    window: undefined,
    document: undefined
};

// Extract and eval parseCSV
const parseCSVCode = parseCSVMatch[0];
const parseCSV = eval('(' + parseCSVCode + ')');

// Test CSV parsing
console.log('Testing CSV parsing...');
const csvRows = parseCSV(CSV_DATA);
console.log('CSV rows parsed:', csvRows.length);
console.log('First row:', csvRows[0]);
console.log('');

// Extract buildCrosticPuzzle function
const buildCrosticMatch = code.match(/function buildCrosticPuzzle\(phrase, words\) \{[\s\S]*?return \{ grid, words: wordsWithNums, phrase, phraseMap \};\n\}/);
if (!buildCrosticMatch) {
    console.log('ERROR: buildCrosticPuzzle function not found');
    process.exit(1);
}
const buildCrosticPuzzle = eval('(' + buildCrosticMatch[0] + ')');

// Test puzzle building
console.log('Testing puzzle building...');
const testPhrase = 'AFRICA IS RICH';
const testWords = [
    { answer: 'AFRICA', clue: 'Continent' },
    { answer: 'RICH', clue: 'Wealthy' }
];
const puzzle = buildCrosticPuzzle(testPhrase, testWords);
console.log('Puzzle built:', {
    gridLength: puzzle.grid.length,
    wordsCount: puzzle.words.length,
    phraseMapLength: puzzle.phraseMap.length
});
console.log('First word:', puzzle.words[0]);
console.log('');

// Test answer building simulation
console.log('Testing answer building simulation...');
puzzle.words.forEach((word, idx) => {
    console.log(`Word ${idx}:`, {
        answer: word.answer,
        clueNum: word.clueNum,
        cellNums: word.cellNums,
        cellNumsLength: word.cellNums ? word.cellNums.length : 'N/A'
    });
    
    if (!word.cellNums || !Array.isArray(word.cellNums)) {
        console.log('ERROR: word.cellNums is missing or not an array');
        process.exit(1);
    }
    
    if (word.cellNums.length !== word.answer.length) {
        console.log('ERROR: cellNums length mismatch');
        console.log('Expected:', word.answer.length);
        console.log('Got:', word.cellNums.length);
        process.exit(1);
    }
});

console.log('');
console.log('All tests passed! Game data structure is correct.');
