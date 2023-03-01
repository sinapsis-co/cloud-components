import { APIGatewayProxyEventV2WithJWTAuthorizer } from 'aws-lambda';
export const context: APIGatewayProxyEventV2WithJWTAuthorizer = {
    version: '2.0',
    routeKey: 'POST /places',
    rawPath: '/places',
    rawQueryString: '',
    headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'cache-control': 'no-cache',
        'content-length': '224',
        'content-type': 'application/json',
        host: '5nh7gqqo01.execute-api.us-east-1.amazonaws.com',
        'postman-token': '7cb52c6b-d4ea-4715-a466-ff07e0721b32',
        'user-agent': 'PostmanRuntime/7.29.2',
        'x-amzn-trace-id': 'Root=1-637ced1f-540a26b470ea049128991d89',
        'x-forwarded-for': '54.86.50.139',
        'x-forwarded-port': '443',
        'x-forwarded-proto': 'https'
    },
    requestContext: {
        accountId: '913838861210',
        apiId: '5nh7gqqo01',
        domainName: '5nh7gqqo01.execute-api.us-east-1.amazonaws.com',
        domainPrefix: '5nh7gqqo01',
        http: {
            method: 'POST',
            path: '/places',
            protocol: 'HTTP/1.1',
            sourceIp: '54.86.50.139',
            userAgent: 'PostmanRuntime/7.29.2'
        },
        requestId: 'cAn85gztoAMEPlQ=',
        routeKey: 'POST /places',
        stage: '$default',
        time: '22/Nov/2022:15:39:11 +0000',
        timeEpoch: 1669131551130,
        authorizer: {
            principalId: '',
            integrationLatency: 1,
            jwt: {
                claims: {},
                scopes: []
            }
        }
    },
    body: '{\n' +
        '    "name": "tier gold",\n' +
        '    "branchCode": "TB",\n' +
        '    "description": "fist level",\n' +
        '    "address": "tuculandia 123",\n' +
        '    "latitude": "-26.814629240168692",\n' +
        '    "longitude": "-65.23666988227053",\n' +
        '    "telephone": "+1234567"\n' +
        '}',
    isBase64Encoded: false
};