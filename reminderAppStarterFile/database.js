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
        picture: undefined
    },
    alex: {
        reminders: [{
            id: 1,
            title: "abc123",
            date: new Date().toLocaleDateString("en-US"),
            description: "abcabc123",
            completed: true,
            tags: ["abc123"],
            subtasks: ["abcabcabc123"],
        }],
        friends: [],
        picture: undefined
    } 
}

module.exports = Database;
