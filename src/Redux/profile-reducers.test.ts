 import profileReducer, { actions } from './profile-reducer';
import { PostType } from '../types/types';


let state = { 
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 1}, 
        {id: 2, message: 'Comon #Chelsea fc!', likes: 7},
        {id: 3, message: 'Yes, really nice book', likes: 18}
      ] as Array<PostType>,
    profile: null,
    status: '',
    newPostText: ''
};


test('length should be incremented', () => {
//1. test data

    let action = actions.addPost('New post yeahe');

//2. action
    const newState = profileReducer(state,action);

//3.exceptation
    expect(newState.posts.length).toBe(4);
});


test('message should be correct', () => {
    //1. test data
    
        let action = actions.addPost('New post yeahe');
    
    //2. action
        const newState = profileReducer(state,action);
    
    //3.exceptation
        expect(newState.posts[3].message).toBe('New post yeahe');
    });
    


test('after delete , length should be 2', () => {
    //1. test data
    
        let action = actions.deletePost(4);
    
    //2. action
        const newState = profileReducer(state,action);
    
    });
        