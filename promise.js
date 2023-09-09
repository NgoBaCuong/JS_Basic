var users = [
    {
        id: 1,
        name: "Kien Dam",
    },
    {
        id: 2,
        name: "Ba Cuong",
    },
    {
        id: 3,
        name: "Ngo Cuong",
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video'
    },
    {
        id: 2,
        user_id: 2,
        content: 'ok nha em'
    }
];

//1. lay comments
// 2. Từ comment lấy ra user_id,
// từ user_id lấy ra user tương ứng
// Fake API 

function getComments() {
    return new Promise(function(resolve){
        setTimeout (function(){
            resolve(comments)
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        resolve(result)
    }, 1000);
}

getComments()
.then(function(comments){
    var userIds = comments.map(function(comment){
        return comment.user_id;
    }) 
    return getUsersByIds(userIds).then(function(users) {
        console.log(users);
        return {
            users: users,
            comments: comments,
        };
    });
})
.then(function(users) {
    console.log(users);
})


