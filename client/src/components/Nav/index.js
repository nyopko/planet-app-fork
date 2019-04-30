import React, { Component } from 'react';
import "./style.css";
import Modal from 'react-modal';
import app from '../../utils/app.js';

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
class Nav extends Component {
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
    
    modalClick = event => {
        event.preventDefault()
        this.openModal()
    }

    loginClick = event => {
        event.preventDefault();
        let login = {
            email: this.state.email,
            password: this.state.password
        }

        let checkLogin = app.getUser(login);
        console.log("is logged in: " + checkLogin) 

    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        //console.log("value: "+ value + " name: " + name)
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    };

    render(){
    return <div className="nav">
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo"><i class="fas fa-rocket"></i>Space Education</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <div id="links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/media">Media</a></li>
                    <li><a href="/planets">Planets</a></li>
                    <li><a href="/rover">Rover</a></li>
                    <li><a href="/resources">Resources</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                    <li onClick={this.modalClick}>Login</li>
                    </div>
                </ul>
            </div>
        </nav>

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
                        <input onChange = {this.handleInputChange} type="text" name ="email"/> {/* the "id" field may need to be changed to "name" in order for the setstate function to work properly */}
                        <label htmlFor="email">Email</label>
                    </div><br/>
                    <div className="input-field">
                        {/* <i class="material-icons prefix">lock</i> */}
                        <input onChange = {this.handleInputChange} type="password" name ="password"/>
                        <label htmlFor="pass">Password</label>
                    </div><br/>
                    <div className="form-field">
                        <button className="btn-large waves-effect waves-dark" id="btnLogin" onClick={this.loginClick}>Login</button>
                    </div>
                </div>
                    <br/>
                    <br/>
                    <button className="btn-small waves-effect waves-dark" onClick={this.closeModal}>close</button>
                    
                </Modal>

    </div>
}
}

export default Nav;
