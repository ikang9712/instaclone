import {gql} from "apollo-server";

export default gql`
    type Photo {
        id: String!
        user: User!
        file: String!
        createdAt: String!
        updatedAt: String!
        caption: String
        hashtag: [Hashtag]
    }
    type Hashtag {
        id: String!
        hashtag: String!
        createdAt: String!
        updatedAt: String!
        photos: [Photo]
    }
`