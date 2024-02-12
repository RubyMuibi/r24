
async function authenticateUser(accessToken) {
    const apiURL = "https://api.github.com/user";
    const response = await fetch(apiURL, {
        method: "GET",
        headers: {
            "Authorization": `token ${accessToken}`
        },
    });
    const responseData = await response.json();
    return responseData;
}

module.exports = { authenticateUser };