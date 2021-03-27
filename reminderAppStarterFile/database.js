var Database = {
    cindy: {
        reminders: [{
            id: 1,
            title: "abc",
            date: new Date().toLocaleDateString("en-US"),
            description: "abcabc",
            completed: false,
            tags: ["abc"],
            subtasks: ["abcabcabc"],
        }],
        friends: [],
        picture: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTcxMTl8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTYxNjgxOTU2OA&ixlib=rb-1.2.1&q=80&w=200"
    },
    alex: {
        reminders: [],
        friends: [],
        picture: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTcxMTl8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTYxNjgxOTU2OA&ixlib=rb-1.2.1&q=80&w=200"
    } 
}

module.exports = Database;
