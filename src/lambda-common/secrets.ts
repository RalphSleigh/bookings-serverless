import * as AWS from 'aws-sdk'
import am_in_lambda from './am_in_lambda';
import { since } from './timer';

let secret_cache: undefined | string = undefined

class SecretsManager {

    /**
     * Uses AWS Secrets Manager to retrieve a secret
     */
    static async getSecret (secretName: string): Promise<string> {

        if(secret_cache) return secret_cache
        if(!am_in_lambda())return '{"password":"my-secret-pw"}'

        const config = { region : process.env.AWS_REGION }
        var decodedBinarySecret;
        let secretsManager = new AWS.SecretsManager(config);
        try {
            since("fetching secret:")
            let secretValue = await secretsManager.getSecretValue({SecretId: secretName}).promise();
            //console.log(JSON.stringify(secretValue))
            if ('SecretString' in secretValue) {
                since("returning secret:")
                secret_cache = secretValue.SecretString!
                return secret_cache
            } else {
                //@ts-ignore
                let buff = new Buffer(secretValue.SecretBinary, 'base64');
                return decodedBinarySecret = JSON.parse(buff.toString('ascii'));
            }
        } catch (err: any) {
            if (err.code === 'DecryptionFailureException')
                // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InternalServiceErrorException')
                // An error occurred on the server side.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InvalidParameterException')
                // You provided an invalid value for a parameter.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InvalidRequestException')
                // You provided a parameter value that is not valid for the current state of the resource.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'ResourceNotFoundException')
                // We can't find the resource that you asked for.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
        }
        return '{"password":"my-secret-pw"}'
    } 
}

export default SecretsManager;