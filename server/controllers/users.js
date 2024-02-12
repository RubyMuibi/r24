const { authenticateUser } = require("@managers/users");

async function authUser(req, res) {
    try {
        const githubCode = req.query.code
        const apiURL = "https://github.com/login/oauth/access_token"
        const params = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${githubCode}`
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        };
        const response = await fetch(`${apiURL}${params}`, requestOptions);
        const responseData = await response.json()
        const accessToken = responseData.access_token;
        const authUser = await authenticateUser(accessToken);
        res.json(authUser);
    } catch (error) {
        console.log('authUser:', error);
        res.status(500).send('authUser: Error authenticating user');
    }
}

module.exports = { authUser };