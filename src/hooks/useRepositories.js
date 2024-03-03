import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries';

export default function useRepositories() {
    const { data, loading, error } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    })

    return {
        repositories: data, loading, error
    }
}