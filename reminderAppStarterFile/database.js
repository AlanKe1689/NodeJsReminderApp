var Database = {
    cindy: {
        reminders: [{
            id: 1,
            title: "abc",
            date: new Date().toLocaleDateString("en-US"),
            description: "abcabc",
            completed: false,
            tags: ["abc"],
            subtasks: ["abcabcabc"]
        }]
    },
    alex: {
        reminders: []
    } 
}

module.exports = Database;
