let initialState = {
    users: [
        {id:'1', fullName:'Alex', status: 'Hi there!', locaction: {country:'United States', city:'Los Angeles'}},
        {id:'2', fullName:'Artyom', status: 'Hi there!', locaction: {country:'United States', city:'Los Angeles'}},
        {id:'3', fullName:'Ibragim', status: 'Hi there!', locaction: {country:'United States', city:'Los Angeles'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    return stateCopy;
}

export default usersReducer;