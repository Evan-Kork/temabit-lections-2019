import { Request, Response } from 'express'
import fetch from 'node-fetch'

import keys from '@/config/keys'

export const getLocalities = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/localities?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}

export const getAllLocalities = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/localities/all?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}

export const getLocalitiesActivity = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/localities/activity?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}