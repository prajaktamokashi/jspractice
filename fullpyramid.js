function Pyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let s = 1; s <= rows - i; s++) {
            row += '  ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

const rows = 9;
Pyramid(rows);
