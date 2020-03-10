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
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pictureFile">Choose picture</label>
                <input
                  type="file"
                  id="pictureFile"
                  name="pictureFile"
                  className="form-control"
                  onChange={handlePictureChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Update profile</button>
            </form>

            <div>
              Server response:

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
