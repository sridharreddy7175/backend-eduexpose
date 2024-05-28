export const successResponse=(res: any, code: any, message: any, data: any)=>{
    let success: any = {};
    success['code'] = code;
    success['message'] = message;
    success['status'] = 'Success';
    success['data'] = data;
    return res.status(code).send(success);
}

export const errorResponse=(res: any, code:any, message: any, err?: any)=>{
    let error: any = {};
    error['code'] = code;
    error['message'] = message;
    error['status'] = 'Fail';
    if (err && err.message) {
        error['error'] = err.message;
    }
    error['totalError'] = JSON.stringify(err);
    return res.status(code).send(error);
}