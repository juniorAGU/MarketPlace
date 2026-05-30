import mongoose from "mongoose";
import { Schema } from "mongoose";

const AuditLogs = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        default: null
    },
    attemptedEmail: {
        type: String,
        lowerCase: true,
        requird: true,
    },
    status: {
        type: String,
        requird: true,
        enum: ["success", "failed",]
    },
    reasons: {
        type: String,
        default: null
    },
    ipadress: {
        type: String,
        requird: true,
    },
    userAgent: {
        type: String,
        requird: true,
    },
},
    {
        timestamps: {
            type: Date,
            default: Date.now
        }
    }
);

export const LoginAudit = mongoose.model("LoginAudit", AuditLogs);