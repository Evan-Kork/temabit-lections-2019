import { Request, Response } from 'express'
import fetch from 'node-fetch'

import keys from '@/config/keys'

export const getTracking = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/tracking/${req.params.number}?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}

export const getHistoryTracking = async (req: Request, res: Response) => {
    await fetch(`${keys.OPENAPI}/tracking_history/${req.params.number}?output=compact`)
        .then(response => response.json())
        .then(result => res.json(result))
}