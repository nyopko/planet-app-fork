import React, { Component } from "react";
import './style.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
  }
};

class Login extends Component  {

  constructor(props) {
    super(props);

    this.state = {
        modalIsOpen: false,
        
    };

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
}

closeModal() {
    this.setState({ modalIsOpen: false });
}

afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

openModal () {
    
    this.setState({ modalIsOpen: true });

}

modalClick=event=>{
    event.preventDefault()
    this.openModal()
}

  render() {
  return (
    <div className="main">
    <div className="row">
        <div className="col s12 m9">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                    <button onClick={this.modalClick}>I am button</button>
                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Login Modal"
                    >
                     <div className="container">
                    <div className="input-field">
                        {/* <i class="material-icons prefix">person</i> */}
                        <input type="text" id="username"/>
                        <label for="username">Username</label>
                    </div><br/>
                    <div className="input-field">
                        {/* <i class="material-icons prefix">lock</i> */}
                        <input type="password" id="pass"/>
                        <label forHTML="pass">Password</label>
                    </div><br/>
                    <div className="form-field">
                        <button className="btn-large waves-effect waves-dark">Login</button>
                    </div>
                </div>
                    <br/>
                    <br/>
                    <button className="btn-small waves-effect waves-dark" onClick={this.closeModal}>close</button>
                    
                </Modal>
                </div>
            </div>
           </div>
          </div>
         </div>
         </div>
    );
}
}

export default Login;