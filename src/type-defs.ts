import { gql } from "apollo-server"

export default gql`
    type Query {
        """
        Test Message
        """
        testMessage: String!,
        id: ID!,
        title: String!,
        user: User
    }

    type Mutation {
        createStudent(collegeId:ID,firstName:String,lastName:String):String
    }

    type User {
        id: String
        name: String
      }
`