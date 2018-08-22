import React, { Component } from 'react'
import { Icon, Grid, Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Style.css'

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  linkedin() {
    window.open('https://www.linkedin.com/in/brama-prasetyo-permana-647599116/')
  }

  github() {
    window.open('https://github.com/bramprasetyop')
  }

  closeModal() {
    this.setState({
      open: false
    })
  }

  emailPage() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bramprasetyop@gmail.com')
  }

  render() {
    const { open, size } = this.state
    return (
      <div className="Body-text">
        <h1>Brama Prasetyo Permana</h1>
        <h3 style={{ color: 'red' }}>Software Engineer</h3>
        <h4 style={{ textAlign: 'justify' }}>
          Hello World! My name is Brama Prasetyo Permana, you can call me Brama
          or just Bram. I'm a Software Engineer living in Jakarta, Indonesia. I
          primarily use Node.js for writing applications. I consider programming
          as one of my passion . I am an open-minded individual with a proven
          track record in designing websites and creating databases. I have
          strong technical skills as well as excellent interpersonal skills. I
          am eager to be challenged in order to grow and improve my
          communication and professional IT skills gained through previous
          experiences in the IT sector. Feel free to contact me if you wanted to
          discuss something or just wanted to know more about me. You could
          reach me using links below.
          <hr />
        </h4>

        <Icon name="linkedin" size="large" onClick={this.linkedin.bind(this)} />
        <Icon name="github" size="large" onClick={this.github.bind(this)} />
        <Icon name="envelope" size="large" onClick={this.show('tiny')} />

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Click YES if you want to send me an email.</Modal.Header>
          <Modal.Content>
            <h4>Bramprasetyop@gmail.com</h4>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.closeModal.bind(this)}>
              No
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
              onClick={this.emailPage.bind(this)}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default Body
