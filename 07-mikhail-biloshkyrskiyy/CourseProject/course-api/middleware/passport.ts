import { PassportStatic } from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { model } from 'mongoose'

import keys from '@/config/keys'

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.JWT
}

export default function (passport: PassportStatic) {
    passport.use(
        new Strategy(options, async (payload, done) => {
            try {
                done(null, true)
            } catch (err) {
                console.log(err)
            }
        })
    )
}