class CustomException extends Error {
    status?: number;
    constructor(message: string, status?: number) {
        super(message);
        if (status) this.status = status;
    }
}

export default CustomException;
