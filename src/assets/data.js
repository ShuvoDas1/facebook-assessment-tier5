export const data = {
  user: {
    username: "John Adam",
    name: "Joe Adam",
    profile_picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU",
  },
  posts: [
    {
      id: 1,
      user: {
        username: "Shuvo Das",
        name: "Shuvo Das",
        profile_picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU",
      },
      posted_on: "2022-06-18T22:05:43.812Z",
      likes: 10,
      liked: true,
      shares: 4,
      post: "To stay on top of the tech industry, I have to read A LOT of industry articles every day. At the end of the year, I like to reflect on what I read and see what has made the biggest impression. Here are the top 10 articles that I believe every programmer should read from this year. Reading these articles has made me a better programmer/engineer/developer/human and I hope it will do the same for you. Let me know if I missed any by sending me a tweet",
      comments: [
        {
          text: "Nice Post",
          created_at: "19/06/2022",
          user: {
            username: "John Adam",
            name: "Joe Adam",
            profile_picture: "https://blog.hubspot.com/hubfs/how-to-create-user-accounts-and-profiles.jpeg",
          },
        },
      ],
    },
    {
        id: 1,
        user: {
          username: "Jhon Doe",
          name: "Jhon Doe",
          profile_picture:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        },
        posted_on: "2022-06-18T22:05:43.812Z",
        likes: 20,
        liked: false,
        shares: 3,
        post: "To stay on top of the tech industry, I have to read A LOT of industry articles every day. At the end of the year, I like to reflect on what I read and see what has made the biggest impression. Here are the top 10 articles that I believe every programmer should read from this year. Reading these articles has made me a better programmer/engineer/developer/human and I hope it will do the same for you. Let me know if I missed any by sending me a tweet",
        comments: [
          {
            text: "To stay on top of the tech industry, I have to read A LOT of industry articles every day. At the end of the year,",
            created_at: "19/06/2022",
            user: {
              username: "Johnifer",
              name: "Johnifer",
              profile_picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
            },
          },
        ],
      },
  ],
};
