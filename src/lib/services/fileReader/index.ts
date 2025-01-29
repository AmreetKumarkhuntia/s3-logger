import * as fs from 'fs';
import * as readline from 'readline';

export async function readFileLineByLine(filePath: string): Promise<string[]> {
    const fileStream: fs.ReadStream = fs.createReadStream(filePath);
    let readLines: string[] = [];

    const rl: readline.Interface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        readLines.push(line)
    }

    return readLines;
}