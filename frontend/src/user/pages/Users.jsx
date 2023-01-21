import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Amani',
        image: "https://logos.flamingtext.com/Name-Logos/Amani-design-fluffy-name.png",
        places: 4
    },
    {
        id: 'u2',
        name: 'Clara',
        image: "https://i.scdn.co/image/ab6761610000e5ebceb3a230c319fae89eecc8f4",
        places: 3
    },
    {
        id: 'u3',
        name: 'Lisa',
        image: "https://media.allure.com/photos/6127a91ac2052c31747415dd/1:1/w_2323,h_2323,c_limit/blackpink%20lisa%20gold%20background.jpg",
        places: 2
    },{
        id: 'u4',
        name: 'Rose',
        image: "https://www.1800flowers.com/blog/wp-content/uploads/2017/03/single-red-rose.jpg",
        places: 1
    }]
  return <UsersList items={USERS} />
}

export default Users;