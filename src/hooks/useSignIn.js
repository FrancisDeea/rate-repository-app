import { AUTHENTICATE } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

export default function useSignIn() {
    const [mutation, result] = useMutation(AUTHENTICATE);

    const singIn = async ({ username, password }) => {
        const result = await mutation({ variables: { credentials: { username, password } } });
        return result
    }

    return [
        singIn, result
    ]
}