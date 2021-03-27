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
        reminders: [],
        friends: [],
        picture: []
    } 
}

module.exports = Database;
