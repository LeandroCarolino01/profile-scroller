const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Masterdam, Imaginary Land',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jenny Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Masterdam, Imaginary Land',
        image: 'https://randomuser.me/api/portraits/woman/82.jpg'
    },
    {
        name: 'Mary Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Masterdam, Imaginary Land',
        image: 'https://randomuser.me/api/portraits/woman/83.jpg'
    }
];

const profiles = profileIterator(data);

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile display
function nextProfile(){
    
}

//profile itarator
function profileIterator(profile) {
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? { value: profiles [nextIndex++], done: false } :
            { done: true }
        }
    };
}