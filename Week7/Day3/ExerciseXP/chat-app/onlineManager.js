const userController = require('./controller/userController')

class OnlineManager {
    constructor(){
        this.users = {}
        this.userIds = {}
    }

    async addUser(username, socketId) {
        await userController.fetchId(username, (id) => {
            this.users[socketId] = {
                username: username,
                id: id
            };

            this.userIds[id] = {
                username: username,
                socketId: socketId
            }
        })
    }
}

module.exports = new OnlineManager();