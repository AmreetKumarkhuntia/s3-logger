import { isJSON, decodeString, decodeArray } from "type-decoder";

/**
 * @type { S3Logs }
 */
export type S3Logs = {
  /**
   * @type { string }
   * @memberof S3Logs
   */
  id: string;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  protocol: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  HTTPProtocol: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  timestamp: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  appInfo: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  clientIp: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  serverIp: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  connectTime: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  processingTime: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  responseTime: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  statusCode: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  requestSize: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  responseSize: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  requestMethod: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  requestDomain: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  requestPath: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  userAgent: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  sslCipher: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  tlsVersion: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  targetGroupArn: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  traceId: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  certificateArn: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  unknownField: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  secondTimestamp: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  wafDetails: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  fieldA: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  fieldB: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  transactionId: string | null;
  /**
   * @type { string }
   * @memberof S3Logs
   */
  logText: string | null;
};

export function decodeS3Logs(rawInput: unknown): S3Logs | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput["id"]);
    const decodedProtocol = decodeString(rawInput["protocol"]);
    const decodedHTTPProtocol = decodeString(rawInput["HTTPProtocol"]);
    const decodedTimestamp = decodeString(rawInput["timestamp"]);
    const decodedAppInfo = decodeString(rawInput["appInfo"]);
    const decodedClientIp = decodeString(rawInput["clientIp"]);
    const decodedServerIp = decodeString(rawInput["serverIp"]);
    const decodedConnectTime = decodeString(rawInput["connectTime"]);
    const decodedProcessingTime = decodeString(rawInput["processingTime"]);
    const decodedResponseTime = decodeString(rawInput["responseTime"]);
    const decodedStatusCode = decodeString(rawInput["statusCode"]);
    const decodedRequestSize = decodeString(rawInput["requestSize"]);
    const decodedResponseSize = decodeString(rawInput["responseSize"]);
    const decodedRequestMethod = decodeString(rawInput["requestMethod"]);
    const decodedRequestDomain = decodeString(rawInput["requestDomain"]);
    const decodedRequestPath = decodeString(rawInput["requestPath"]);
    const decodedUserAgent = decodeString(rawInput["userAgent"]);
    const decodedSslCipher = decodeString(rawInput["sslCipher"]);
    const decodedTlsVersion = decodeString(rawInput["tlsVersion"]);
    const decodedTargetGroupArn = decodeString(rawInput["targetGroupArn"]);
    const decodedTraceId = decodeString(rawInput["traceId"]);
    const decodedCertificateArn = decodeString(rawInput["certificateArn"]);
    const decodedUnknownField = decodeString(rawInput["unknownField"]);
    const decodedSecondTimestamp = decodeString(rawInput["secondTimestamp"]);
    const decodedWafDetails = decodeString(rawInput["wafDetails"]);
    const decodedFieldA = decodeString(rawInput["fieldA"]);
    const decodedFieldB = decodeString(rawInput["fieldB"]);
    const decodedTransactionId = decodeString(rawInput["transactionId"]);
    const decodedLogText = decodeString(rawInput["logText"]);

    if (decodedId === null) {
      return null;
    }

    return {
      id: decodedId,
      protocol: decodedProtocol,
      HTTPProtocol: decodedHTTPProtocol,
      timestamp: decodedTimestamp,
      appInfo: decodedAppInfo,
      clientIp: decodedClientIp,
      serverIp: decodedServerIp,
      connectTime: decodedConnectTime,
      processingTime: decodedProcessingTime,
      responseTime: decodedResponseTime,
      statusCode: decodedStatusCode,
      requestSize: decodedRequestSize,
      responseSize: decodedResponseSize,
      requestMethod: decodedRequestMethod,
      requestDomain: decodedRequestDomain,
      requestPath: decodedRequestPath,
      userAgent: decodedUserAgent,
      sslCipher: decodedSslCipher,
      tlsVersion: decodedTlsVersion,
      targetGroupArn: decodedTargetGroupArn,
      traceId: decodedTraceId,
      certificateArn: decodedCertificateArn,
      unknownField: decodedUnknownField,
      secondTimestamp: decodedSecondTimestamp,
      wafDetails: decodedWafDetails,
      fieldA: decodedFieldA,
      fieldB: decodedFieldB,
      transactionId: decodedTransactionId,
      logText: decodedLogText,
    };
  }
  return null;
}
