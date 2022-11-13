import client from "../../client";

export default {
    Query: {
        seeProfile : async (_, {username}) => {
            const user = await client.user.findUnique({
                where: {
                    username, 
                },
                include: {
                    following: false,
                    followers: false
                }  
            })
            if (!user){
                return {
                    ok: false,
                    error: "User cannot be found."
                }
            }
            return {
                ok: true
            }
        }
    },
};