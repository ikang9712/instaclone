import {gql} from "apollo-server";

export default gql`
    type Photo {
        id: Int!
        user: User!
        file: String!
        createdAt: String!
        updatedAt: String!
        caption: String
        hashtag: [Hashtag]
    }
    type Hashtag {
        id: Int!
        hashtag: String!
        createdAt: String!
        updatedAt: String!
        photos: [Photo]
    }
`