import React, { Component } from 'react';
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

class UpdateProfilePictureForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseName: '',
      responseFileName: '',
    }

    // Use uncontrolled form for this simple example, instead of a state
    this.nameRef = React.createRef();
    this.pictureFileRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Mutation mutation={UPDATE_PROFILE}>
          {(updateUserProfile) => (
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();

                  const profile = {
                    name: this.nameRef.current.value,
                    picture: this.pictureFileRef.current.files[0],
                  };

                  console.log(profile);

                  updateUserProfile({ variables: { profile } }).then(({ data: { UpdateUserProfile } }) => {
                    this.nameRef.current.value = '';
                    this.pictureFileRef.current.value = null;

                    this.setState({
                      responseName: UpdateUserProfile.name,
                      responseFileName: UpdateUserProfile.filename,
                    });
                  });
                }}
              >
                <input type="text" name="name" ref={this.nameRef} />
                <input type="file" name="pictureFile" ref={this.pictureFileRef} />

                <button type="submit">Update profile</button>
              </form>

              <div>
                Response:

                <ul>
                  <li>Name: {this.state.responseName}</li>
                  <li>Filename: {this.state.responseFileName}</li>
                </ul>
              </div>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
}

export default UpdateProfilePictureForm;
