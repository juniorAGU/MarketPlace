import Limiter, {ipKeyGenerator} from 'express-rate-limit'


export const basicLimiter = Limiter({
    windowMs: 5 * 60 * 1000,
    max: 200,
    message: {
        success: false,
        message: "Denied, To many attempts"
    },
    standardHeaders: false,
    legacyHeaders: false
});

export const AuthLimiter = Limiter({
    windowMs: 5 * 60 * 1000,
    max: 1000,
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