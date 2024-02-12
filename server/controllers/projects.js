const { findAllProjects } = require("@managers/projects")

exports.getAllProjects = async (req, res) => {
    try{
        const projects = await findAllProjects()
        res.status(200).json(projects)
    }

    catch (error) {
        res.status(500).send("getAllProjects: Error getting all projects")
    }
}