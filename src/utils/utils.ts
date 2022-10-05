export const getToken = () => {
    let token = '';
    while (token?.length !== 4) {
        token = Math.floor(Math.random() * 10000).toString();
    }
    return token;
}