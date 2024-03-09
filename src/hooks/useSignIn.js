import { AUTHENTICATE } from "../graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client";

import { useNavigate } from 'react-router-native'

import useAuthStorage from "./useAuthStorage";

export default function useSignIn() {
    const [mutation, result] = useMutation(AUTHENTICATE);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient()
    const navigate = useNavigate()

    const singIn = async ({ username, password }) => {
        try {
            const { data } = await mutation({ variables: { credentials: { username, password } } });
            const token = data.authenticate.accessToken
            await authStorage.setAccessToken(token)
            apolloClient.resetStore()
            navigate('/')
            return data
        } catch (e) {
            console.log(e)
        }
    }

    return [
        singIn, result
    ]
}