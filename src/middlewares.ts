import {NextFunction, Response, Request} from "express";

const isWorkingHours = () => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    return day >= 1 && day <= 5 && hour >= 9 && hour <= 17; // Monday to Friday, 9am to 5pm
}

const availabilityChecker = async (_: Request, res: Response, next: NextFunction) => {
    if (isWorkingHours()) {
        next();
    } else {
        res.status(503).send("Service unavailable outside working hours");
    }
}

export default { availabilityChecker };