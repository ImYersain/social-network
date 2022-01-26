const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';



let store = {

    _state: {
        profilePage: {
            posts: [
                {id:'1', message: 'Hi, how are you?', likes: '1'}, 
                {id:'2', message: 'Somebody does read Martin Eden?', likes: '7'},
                {id:'3', message: 'Yes, really nice book', likes: '18'}
              ],
            newPostText: ''
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
            ],
            newMessageText: ''
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
    },
    _callSubscriber() {
        console.log('state changed');
    },


    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    


    
    _addPost() {
        let newPost = {
            id:'4',
            message: this._state.profilePage.newPostText,
            likes: '0'
        }
        if(newPost.message !== '') {
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
       
    },
    _updatePostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _sendMessage(){
        let newMessage = {
            id: '6',
            message: this._state.messagesPage.newMessageText,
        }
        this._state.messagesPage.messages.push(newMessage);
        // this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    _updateMessageText(newText){
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    
    dispatch (action) {
        if(action.type === ADD_POST){
            this._addPost();
        } else if(action.type === UPDATE_POST_TEXT){
            this._updatePostText(action.newText);   
        } else if(action.type === SEND_MESSAGE){
            this._sendMessage();
        } else if(action.type === UPDATE_MESSAGE_TEXT){
            this._updateMessageText(action.newText);
        }
    },

}





export const onPostBtnActionCreater = () => ({type: ADD_POST});
export const onChangeTextActionCreater = (text) => 
                        ({type: UPDATE_POST_TEXT, newText: text});
export const  onSendMessageActionCreater = () => ({type: SEND_MESSAGE});
export const  onUpdateMessageActionCreater = (text) =>
                        ({type: UPDATE_MESSAGE_TEXT, newText: text});







export default store;
window.store = store;