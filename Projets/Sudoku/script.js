"use strict";
// Pour obtenir le tsconigf, commande => tsc --init
// Pour lancer en hot reload, commande => tsc -w
const rowErrorSudoku = [
    [8, 2, 4, 9, 5, 3, 6, 7, 1],
    [6, 3, 5, 8, 1, 7, 9, 2, 4],
    [7, 1, 9, 6, 2, 4, 8, 5, 3],
    [5, 8, 7, 2, 9, 1, 3, 4, 6],
    [1, 4, 2, 7, 3, 6, 5, 8, 9],
    [3, 9, 6, 4, 8, 5, 2, 1, 7],
    [2, 6, 1, 5, 4, 3, 7, 9, 8],
    [4, 7, 8, 3, 6, 2, 1, 3, 5],
    [9, 5, 3, 1, 7, 8, 4, 6, 2],
];
const correctSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
];
const colErrorSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 7], // Erreur: "7" apparaît deux fois dans la colonne 3
];
const regionErrorSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9], // Erreur: Les chiffres de la région 2 sont tous différents
];
function checkSudoku(sudoku) {
    let message = "VALID";
    let rows = new Map();
    let columns = new Map();
    let regionsSample = [];
    // Initialisation des régions avec des tableaux vides
    for (let i = 0; i < 3; i++) {
        regionsSample[i] = [];
        for (let j = 0; j < 3; j++) {
            regionsSample[i][j] = [];
        }
    }
    // Parcours de chaque ligne du sudoku
    sudoku.forEach((row, rowIndex) => {
        rows.set(rowIndex, row);
        // Parcours de chaque élément dans la ligne
        row.forEach((value, colIndex) => {
            // Vérification des colonnes
            if (!columns.has(colIndex)) {
                columns.set(colIndex, [value]);
            }
            else {
                // Si la colonne existe, ajouter la valeur à la liste existante
                const target = columns.get(colIndex);
                if (target) {
                    target.push(value);
                }
            }
            // Ajout des valeurs des régions
            const regionRow = Math.floor(rowIndex / 3);
            const regionCol = Math.floor(colIndex / 3);
            if (value && regionsSample[regionRow]) {
                regionsSample[regionRow][regionCol].push(value);
            }
        });
        if (!isSetValid(row)) {
            console.log("Rows", rows, row);
            message = `Ligne ${rowIndex} Invalid`;
        }
    });
    // Ajoutez ici la logique de vérification des lignes, des colonnes et des régions si nécessaire
    columns.forEach((column, colIndex) => {
        if (!isSetValid(column) && message === "") {
            console.log("Columns", columns, column);
            message = `Column ${colIndex} Invalid`;
        }
    });
    regionsSample.forEach((principal, princI) => {
        principal.forEach((region, regionIndex) => {
            if (!isSetValid(region) && message === "") {
                console.log(princI, regionIndex, region);
                console.log("Regions", regionsSample);
                return `Region ${regionIndex} invalid`;
            }
        });
    });
    return message;
}
// Fonction utilitaire pour vérifier si un ensemble (ligne, colonne, région) est valide
function isSetValid(set) {
    const seen = new Set();
    for (const num of set) {
        if (num < 1 || num > 9 || seen.has(num)) {
            return false;
        }
        seen.add(num);
    }
    return true;
}
console.log(checkSudoku(rowErrorSudoku));
console.log(checkSudoku(correctSudoku));
console.log(checkSudoku(colErrorSudoku));
console.log(checkSudoku(regionErrorSudoku));
