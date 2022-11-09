import client from "../../client";

export default {
    Query: {
        seeProfile : (_, {username}) => {
            user = client.user.findUnique({
                where: {
                    username, 
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