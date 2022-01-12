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
            { name: 'Dmitriy', avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-512.png", id:'1' },
            { name: 'Alex', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/old_man_male_portrait-512.png',  id:'2' },
            { name: 'Artyom', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-512.png', id:'3'},
            { name: 'Katerina', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-512.png', id:'4' },
            { name: 'Ibragim', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', id:'5' },
            { name: 'Anna', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-512.png', id:'6' }
        ],
        messages: [
            {message: 'Hi' , id:'1'},
            {message: 'Hi' , id:'1'}, 
            {message: 'How are you?' , id:'2'},
            {message: 'Nice, what about you? :)' , id:'3'},
            {message: 'Not bad', id:'4'},
            {message: 'Okay, bye', id:'5'}
        ]
    },
    sidebar: {
        friends: [
            {id:'1', name:'Alex', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/old_man_male_portrait-512.png'},
            {id:'2', name:'Artyom', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-512.png'},
            {id:'3', name:'Ibragim', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'},
            {id:'4', name:'Denisa', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-512.png'},
            {id:'5', name:'Dilnaz', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'},
            {id:'6', name:'Ruslan', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_male_avatar_portrait-512.png'}
        ]
    }
}

export default state;