export const getOTP = () => {
    let token = Math.floor(Math.random() * 10000).toString();
    return token;
}