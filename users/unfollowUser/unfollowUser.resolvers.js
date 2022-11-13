import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
    Mutation: {
        unfollowUser: protectedResolver(
            async(_, {username}, {loggedInUser}) => {
                const check = await client.user.findUnique({where: {username}})
                if (!check) {
                    return {
                        ok: false,
                        error: "Can't find user."
                    }
                }
                await client.user.update({
                    where: {
                        id: loggedInUser.id
                    },
                    data: {
                        following: {
                            disconnect: {
                                username
                            }
                        }
                    }
                })
                return {
                    ok: true
                }
            }
        )
    }
}