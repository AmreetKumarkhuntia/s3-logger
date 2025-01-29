import { readFileLineByLine } from "$services/fileReader";
import type { RequestHandler } from '@sveltejs/kit';
import { json as jsonResp } from '@sveltejs/kit';


const filePath = './dump/logs-elb.log';

export async function GET(requestEvent: RequestHandler): Promise<Response> {
    console.log("request-recieved | readLogs", JSON.stringify(requestEvent));
    let logs: string[] = await readFileLineByLine(filePath)

    const responseBody = {
        logs
    };

    console.log("response-recieved | readLogs", JSON.stringify({status: 200, count: logs.length}));

    return jsonResp(responseBody, { status: 200 });
};