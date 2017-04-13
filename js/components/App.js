import React from 'react';
import Relay from 'react-relay';

// Your React component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.allUsers.email}</h1>
      </div>
    );
  }
}

// Your Relay container.
// Compose your React components with a declaration of
// the GraphQL query fragments that fetch their data.
export default Relay.createContainer(App, {
  fragments: {
    allUsers: () => Relay.QL`
      fragment on User {
        email
      }
    `,
  },
});
