import { PassportStatic } from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { model } from 'mongoose'

import keys from '@/config/keys'
import '@/models/user'
const User = model('User')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.JWT
}

export default function (passport: PassportStatic) {
    passport.use(
        new Strategy(options, async (payload, done) => {
            const user = await User.findById(payload.id)

            try {
                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (err) {
                console.log(err)
            }
        })
    )
}