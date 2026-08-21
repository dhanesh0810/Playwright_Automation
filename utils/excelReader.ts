import * as XLSX from 'xlsx';
import path from 'path';

export type LoginData = {
    username: string;
    password: string;
    expected: string;
    run: string;
}

export function excelReader(filePath: String, sheetName: String): LoginData[]{

    const fullPath = path.resolve(filePath);

    const workBook = XLSX.readFile(fullPath);

    const sheet = workBook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(sheet);

    return data;

}