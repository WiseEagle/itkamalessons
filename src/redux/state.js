let state = {
    profilePage:{
        posts:[
            {id: 1, message: "Hi! How your study"},
            {id: 2, message: "Do you learn React"},
            {id: 3, message: "Good luck!"}
        ],
    },
    dialogsPage:{
        messages: [
            {id: 1, message: "Some posted text 1", likesCount:"1"},
            {id: 2, message: "Some posted text 2", likesCount:"1"},
            {id: 3, message: "Some posted text 3", likesCount:"2"},
            {id: 3, message: "Some posted text 4", likesCount:"4"}
        ],
        dialogs:[
            {id: 1, name: "React learn"},
            {id: 2, name: "Workout"},
            {id: 3, name: "ComeInHome"},
            {id: 4, name: "Work"},
            {id: 5, name: "ReadingABook"}
        ]
    }


}

export default state;