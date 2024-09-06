import { env } from "@/env";
import { IRailwayProvider, Variables } from "../interface-railway-provider";
import axios from "axios";

export interface variableUpsert{
    projectId: string;
    environmentId: string;
    serviceId: string;
    name: string;
    value: string;
}
export class RailwayProvider implements IRailwayProvider {
    async variablesUpsert(variables: Variables[]) {
        try {
            console.log('ENTROU NO RAILWAY PROVIDER')
            const query = `
            mutation variableUpsert($input: [VariableUpsertInput!]!) {
                variableUpsert(input: $input)
            }
            `;

            const variablesToUpsert: variableUpsert[] = []

            console.log(variables)
            // popular o array de variáveis com os valores
            // para atualizar as variáveis de ambiente
            for (const variable of variables) {
                variablesToUpsert.push({
                    projectId: env.RAILWAY_PROJECT_ID,
                    environmentId: env.RAILWAY_ENVIRONMENT_ID,
                    serviceId: env.RAILWAY_SERVICE_ID,
                    name: variable.name,
                    value: variable.value
                })
            }

            const response = await axios.post(env.RAILWAY_API_URL,
                {
                    query,
                    variables: {
                        input: variablesToUpsert
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${env.RAILWAY_TOKEN}`
                    }
                }
            )

            if (response.data.errors) {
                console.error('Erro ao atualizar as variáveis:', response.data.errors);
            } else {
                console.log('Variáveis de ambiente atualizadas com sucesso:', response.data.data);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
}