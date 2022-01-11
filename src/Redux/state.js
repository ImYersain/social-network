let state = {
    profilePage: {
        posts: [
            {id:'1', message: 'Hi, how are you?', likes: '1'}, 
            {id:'2', message: 'Somebody does read Martin Eden?', likes: '7'},
            {id:'3', message: 'Yes, really nice book', likes: '18'}
          ]
    },
    messagesPage: {
        dialogs: [
            { name: 'Dmitriy', id:'1' },{ name: 'Alex', id:'2' },
            { name: 'Honzo', id:'3' },{ name: 'Petr', id:'4' },
            { name: 'Kanat', id:'5' },{ name: 'John', id:'6' }
        ],
        messages: [
            {message: 'Hi' , id:'1' },{message: 'How are you?' , id:'2'},
            {message: 'Nice, what about you? :)' , id:'3'},{message: 'Not bad', id:'4'},
            {message: 'Okay, bye', id:'5'}
          ]
    }
}

export default state;