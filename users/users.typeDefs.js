import {gql} from "apollo-server"
export default gql`
    type User{
        # required
        id: String!
        firstName: String!
        username: String!
        email: String!
        createdAt: String!
        updatedAt: String!
        # optional
        lastName: String
        bio: String
        avatar: String
    }
`