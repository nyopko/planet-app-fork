import React, { Component } from "react";
import './style.css';
import solarsystem from '../img/old.jpg';
import planets from '../../planets.json';
import Modal from 'react-modal';

// import {  } from '../img';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '550px',
        border:"1px solid grey",
    }
};


class PlanetContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            planet: planets[0]
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
        this.subtitle.style.color = '#f00';
      }

    openModal () {
        
        this.setState({ modalIsOpen: true });

    }

    modalClick=event=>{
        event.preventDefault()
        const id = event.target.getAttribute("data-id")
        console.log(id)
        this.setState({ planet: planets[id] });
        this.openModal()
    }

    render() {
        return (
            <div className="PlanetContent">
                <div className="row">
                    <div className="col s12">
                        <div id="planetCard" className="card-panel">
                            <div className="row">
                                <div className="col s4 m2">
                                    <img src={solarsystem} alt="planets" className="planetPic" useMap="#Map" />
                                    <map name="Map" id="Map">
                                        <area id="sun" data-id="9" alt="sun" onClick={this.modalClick} title="sun" href="#" shape="poly" coords="175,584,215,405,200,282,176,209,141,122,113,80,68,25,24,3,2,3,1,583" className='' />
                                        
                                        <area id="Mercury" data-id="0" alt="Mercury" onClick={this.modalClick} title="Mercury" href="#" shape="poly" coords="244,439,263,438,273,451,278,475,258,486,243,483,231,472,231,450" className='' />
                                        <area id="Venus" data-id="1" alt="Venus" onClick={this.modalClick} title="Venus" href="#" shape="poly" coords="348,384,366,384,376,384,383,394,387,412,389,431,381,442,366,444,350,444,337,444,330,434,324,416,324,400,330,390" className='' />
                                        <area id="Earth" data-id="2" alt="Earth" onClick={this.modalClick} title="Earth" href="#" shape="poly" coords="430,348,438,336,460,323,482,325,489,338,495,364,493,380,471,390,452,389,438,384,432,368" className='' />
                                        <area id="Mars" data-id="3" alt="Mars" onClick={this.modalClick} title="" href="#" shape="poly" coords="530,256,548,257,559,268,561,285,560,306,542,317,526,314,514,302,510,289,510,268" className='' />
                                        <area id="Jupiter" data-id="4" alt="Jupiter" onClick={this.modalClick} title="" href="#" shape="poly" coords="698,236,733,232,762,241,789,260,801,300,796,332,782,362,753,382,721,386,686,380,661,360,649,335,643,299,651,267,672,242" className='' />
                                        <area id="Saturn" data-id="5" alt="Saturn" onClick={this.modalClick} title="" href="#" shape="poly" coords="777,154,845,163,887,152,925,158,977,185,984,207,1016,234,1039,267,1016,279,982,279,936,280,897,282,856,268,806,212,780,203,768,180" className='' />
                                        <area id="Uranus" data-id="6" alt="Uranus" onClick={this.modalClick} title="" href="#" shape="poly" coords="1008,104,1031,91,1063,90,1084,105,1093,128,1093,151,1080,178,1060,190,1027,182,1006,169,997,135" className='' />
                                        <area id="Neptune" data-id="7" alt="Neptune" onClick={this.modalClick} title="" href="#" shape="poly" coords="1130,38,1158,23,1188,25,1207,47,1207,74,1202,95,1191,107,1168,117,1141,110,1126,85,1117,60" className='' />
                                        <area id="Pluto" data-id="8" alt="Pluto" onClick={this.modalClick} title="" href="#" shape="poly" coords="1231,5,1238,24,1256,26,1270,15,1271,8,1252,0" className='' />
                                        <area id="Moon" data-id="10" alt="Moon" onClick={this.modalClick} title="" href="#" shape="poly" coords="455,296,466,299,469,309,464,316,452,318,445,311,446,301" className='' />

                                    </map>





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Details Modal"
                >

                    <h2 id="planetName" ref={subtitle => this.subtitle = subtitle}>{this.state.planet.name}</h2>
                    <div><img id="modalPics" src={this.state.planet.image} alt="modalPics"></img></div>
                    <br />
                    <div><b>Moons:</b> {this.state.planet.moons}</div>
                    <div><b>Revolution:</b> {this.state.planet.revolution}</div>
                    <div><b>Rotation:</b> {this.state.planet.rotation}</div>
                    <div><b>Diameter:</b> {this.state.planet.diameter}</div>
                    <div><b>Average temperature:</b> {this.state.planet.average_temperature}</div>
                    <div><b>Fun Facts:</b> {this.state.planet.cool_facts}</div>
                    <br/>
                    <br/>
                    <button onClick={this.closeModal}>CLOSE</button>
                    
                    <div></div>
                </Modal>
               

            </div>
        );

    }
}







export default PlanetContent;