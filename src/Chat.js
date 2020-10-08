import { GiftedChat } from "react-web-gifted-chat";
import React from "react";
import Avatar from '@material-ui/icons/PersonRounded';
import { NavBar } from "aws-amplify-react";
import * as moment from 'moment';

class Chat extends React.Component {
  componentDidMount() {
    this.props.subscribeToNewMessages();
  }

  onSend(messages = []) {
    messages.map(m => this.props.onSend(m.text));
  }

  render() {
    const { loading, error, data, user } = this.props;
    if (error) return <div>{error.message}</div>;
    if (loading) return <div>Loading</div>;
    const messages = data.getRoom.messages.items;
    return (
      <div style={styles.container}>
        <NavBar style={{height: 50}}><Avatar color="secondary"
                      aria-label="PersonRounded"
                      style={{ position: "responsive", align:"right"}}></Avatar><br></br>
                      <text color="secondary">{user}</text>
        </NavBar>
        <GiftedChat
          messages={messages.map(m => ({
            id: m.id,
            text: m.content,
            createdAt: new Date(m.when),
            user: {
              id: user,
              name: user
            }
          }))}
          onSend={messages => this.onSend(messages)}
          user={{
            id: user
          }}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 50,
    height: "90vh"
  }
};

export default Chat;