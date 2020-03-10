import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const UPDATE_PROFILE = gql`
  mutation UpdateUserProfile($profile: UpdateUserProfileInput!) {
    UpdateUserProfile(input: $profile) {
      name
      filename
    }
  }
`;

const UpdateProfilePictureForm = () => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState(null);

  const [responseName, setResponseName] = useState('');
  const [responseFileName, setResponseFileName] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handlePictureChange = e => {
    setPicture(e.target.files[0]);
  }

  const handleSubmit = (e, updateUserProfile) => {
    e.preventDefault();

    const profile = {
      name,
      picture,
    };

    updateUserProfile({ variables: { profile } }).then(({ data: { UpdateUserProfile } }) => {
      setName('');
      setPicture(null);
      setResponseName(UpdateUserProfile.name);
      setResponseFileName(UpdateUserProfile.filename);
    });
  };

  return (
    <div>
      <Mutation mutation={UPDATE_PROFILE}>
        {(updateUserProfile) => (
          <div>
            <form onSubmit={e => handleSubmit(e, updateUserProfile)} >
              <input type="text" name="name" value={name} onChange={handleNameChange} />
              <input type="file" name="pictureFile" onChange={handlePictureChange} />

              <button type="submit">Update profile</button>
            </form>

            <div>
              Response:

              <ul>
                <li>Name: {responseName}</li>
                <li>Filename: {responseFileName}</li>
              </ul>
            </div>
          </div>
        )}
      </Mutation>
    </div>
  );
};

export default UpdateProfilePictureForm;
