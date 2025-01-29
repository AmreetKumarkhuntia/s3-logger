import { type S3Logs } from "$generated/types";
import { generateNanoId } from "$utils/common";

export function parseS3Log(log: string): S3Logs {
    const id = generateNanoId();
    const parts = log.split('"'); // Split by quotes first
    const basicParts = parts[0].trim().split(/\s+/); // Split first part by spaces
    const requestDetails = parts[1]; // This is the request details
    const userAgent = parts[3]; // This is the user agent
    const sslCipherParts = parts[4].trim().split(/\s+/); // The rest split by spaces again

    // Parse the requestDetails
    const [requestMethod, fullPath, HTTPProtocol] = requestDetails.split(' '); // Split into method and full path
    console.log(">>> ", String(fullPath));
    let url = null;
    let requestDomain = null;
    let requestPath = null;
    try {
        url = new URL(fullPath); // Parse the URL to get domain and path
        requestDomain = url.origin;
        requestPath = url.pathname;
    }
    catch (err) {
        console.log("err :", String(err));
    }

    const s3log: S3Logs = {
        id: id,
        protocol: basicParts[0] || null,
        HTTPProtocol: HTTPProtocol || null,
        timestamp: basicParts[1] || null,
        appInfo: basicParts[2] || null,
        clientIp: basicParts[3] || null,
        serverIp: basicParts[4] || null,
        connectTime: basicParts[5] || null,
        processingTime: basicParts[6] || null,
        responseTime: basicParts[7] || null,
        statusCode: basicParts[8] || null,
        requestSize: basicParts[10] || null,
        responseSize: basicParts[11] || null,
        requestMethod: requestMethod || null,
        requestPath: requestPath || null,
        requestDomain: requestDomain || fullPath,
        userAgent: userAgent,
        sslCipher: sslCipherParts[0] || null,
        tlsVersion: sslCipherParts[1] || null,
        targetGroupArn: sslCipherParts[2] || null,
        traceId: parts[5]?.trim() || null,
        certificateArn: sslCipherParts[3] || null,
        unknownField: sslCipherParts[4] || null,
        secondTimestamp: sslCipherParts[5] || null,
        wafDetails: parts[9]?.trim() || null,
        fieldA: parts[11]?.trim() || null,
        fieldB: parts[13]?.trim() || null,
        transactionId: sslCipherParts[6] || null,
        logText: log
    };

    return s3log;
}

export function parseS3Logs(logs: string[]): S3Logs[] {
    let parsedLogs: S3Logs[] = [];

    for (let i = 0; i < logs.length; i++) {
        parsedLogs.push(parseS3Log(logs[i]));
    }

    return parsedLogs;
}
