import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovAckoApi implements ICredentialType {
        name = 'N8nDevApisetuGovAckoApi';

        displayName = 'Apisetu Gov Acko API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovAcko/apisetu-gov-acko.svg', dark: 'file:../nodes/ApisetuGovAcko/apisetu-gov-acko.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/acko/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/acko/v3',
                        description: 'The base URL of your Apisetu Gov Acko API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
