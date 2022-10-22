export const isAdmin = ({ req: { user } }) => {
    if (user && user.role === 'admin') {
        return true;
    }

    return {
        id: {
            equals: user.id
        }
    }
}