// You have a group chat application, but who is online!?
//
//     You want to show your users which of their friends are online and available to chat!
//
//     Given an input of an array of objects containing usernames, status and time since last activity (in mins),
//     create a function to work out who is online, offline and away.
//
//     If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
//
//     The input data has the following structure:

const friendsList = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]

const whosOnline = (friends) => {
    // Если массив пуст, сразу возвращаем пустой объект
    if (friends.length === 0) {
        return {}
    }

    // Объект для группировки по статусам
    const statusGroups = {
        online: [],
        offline: [],
        away: []
    }

    // Проходим по каждому другу и распределяем по статусам
    for (const friend of friends) {
        if (friend.status === 'online' && friend.lastActivity <= 10) {
            statusGroups.online.push(friend.username)
        } else if (friend.status === 'offline') {
            statusGroups.offline.push(friend.username)
        } else if (friend.status === 'online' && friend.lastActivity > 10) {
            statusGroups.away.push(friend.username)
        }
    }

    // Убираем пустые массивы из объекта
    Object.keys(statusGroups).forEach(key => {
        if (statusGroups[key].length === 0) {
            delete statusGroups[key]
        }
    })

    // Возвращаем объект с результатом
    return statusGroups
}


console.log(whosOnline(friendsList))