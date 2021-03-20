import React from 'react';

class CarApi extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: true,
      users: null,
      error: null
    }
  }
  fetchUsers() {
    fetch(`https://reqres.in/api/users`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data,
          isLoading: false,
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            return (
              <div>
                <p>Name: {user[0]}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default CarApi;