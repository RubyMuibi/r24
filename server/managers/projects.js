const Project = require("@models/project")

exports.findAllProjects = async () => {
    try{
        const projects = await Project.find();
        return projects
    }

    catch(error) {
        throw new Error("findAllProjects: Error fetching projects", error)
    }
}