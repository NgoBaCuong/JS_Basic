var courses = [
    {
        id: 1,
        name: 'Java',
        coin: 0
    },

    {

        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },

    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 0
    }
]

var course = courses.filter(function(course, index ){
    console.log(index)
    return course.name === 'Ruby';
});

console.log(course);


/*
/// Array methods:
forEach()
every() 
some()
find()
filter()
map()
reduce() 
*/