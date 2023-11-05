import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, elit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.',
    avatar: 'https://via.placeholder.com/150',
  };

  return (
    <div>
      <img src={user.avatar} alt="Profile Avatar" />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;
