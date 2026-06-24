import Limiter, {ipKeyGenerator} from 'express-rate-limit'


export const basicLimiter = Limiter({
    windowMs: 1 * 60 * 1000,
    max: 2000,
    message: {
        success: false,
        message: "Denied, To many attempts"
    },
    standardHeaders: false,
    legacyHeaders: false
});

export const AuthLimiter = Limiter({
    windowMs: 1 * 60 * 1000,
    max: 10000,
    keyGenerator: (req) => {
        return `${ipKeyGenerator(req.ip)}-${req.body.email}`
    },
    message: {
        success: false,
        message: "Denied, Too many Attempts"
    },
    legacyHeaders: false,
    standardHeaders: true

});