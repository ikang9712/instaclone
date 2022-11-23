import client from "../../client"
import {protectedResolver} from "../../users/users.utils"

export default {
    Mutation: {
        uploadPhoto: protectedResolver(
            async(_,{file, caption}, {loggedInUser}) => {
                console.log("Hello")
                let hashtagObj = [];
                // parse caption
                // create connectOrCreate compatible object for hashtags
                if (caption) {
                    const hashtags = caption.match(/#[\w]+/g)
                    hashtagObj = hashtags.map(ht => ({where: {ht}, create:: {ht}}))
                }
                console.log(hashtags)
                return client.photo.create({
                    data: {
                        file, 
                        caption,
                        userId: loggedInUser.id,
                        user: {
                            connect: {
                                id: loggedInUser.id
                            }
                        },
                        ...(hashtagObj.length > 0 && {
                            hashtags: {
                                connectOrCreate: hashtagObj,
                            }
                        }),
                    }
                })

                // save the photo with the parsed hashtags
                // add the photo to the hashtags
            }
        )
    }
}