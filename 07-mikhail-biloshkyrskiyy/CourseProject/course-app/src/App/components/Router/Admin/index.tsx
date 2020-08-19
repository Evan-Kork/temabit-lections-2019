import React from 'react'
import { Redirect } from 'react-router-dom'
import CryptoJS from 'crypto-js'

import { iUser } from '@/interfaces/iAuth'
import keys from '@/config'
// Interface indicates
// what parameters are in the component
interface iProps {
    children: React.ReactNode
}
const router = (user: iUser, children: React.ReactNode) => (
    <>
        {user.accessibility === 'Administrator' || user.accessibility === 'Moderator' ? children : <Redirect to='/' />}
    </>
)
const Admin: React.FC<iProps> = (props: iProps) => {
    const { user } = JSON.parse(CryptoJS.AES.decrypt(sessionStorage.getItem('rp') as string, keys.UserPrivateKey).toString(CryptoJS.enc.Utf8))
    return (
        <>
            {user.accessibility ? router(user, props.children) : <Redirect to='/' />}
        </>
    )
}

export default Admin