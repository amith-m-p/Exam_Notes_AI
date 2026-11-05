import jwt from "jsonwebtoken"

const isAuth = (req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token found" })
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if (!verifyToken) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" })
        }
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Token expired or invalid" })
    }
}

export default isAuth
