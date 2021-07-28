import React, { Component } from 'react'
import './index.css'
export default class Chat extends Component {
    state = {
        userFlag: 'online',
        testingVar: '',
        chatHistory:[

            // {
            //     user: 'admin',
            //     text: 'Hello',
            //     number: ''
            // },
            // {
            //     user: 'client',
            //     text: 'Hi what are you offering?',
            //     number: ''
            // },
            // {
            //     user: 'admin',
            //     text: 'Sorry! but we only deal iwth real estate',
            //     number: ''
            // },
            // {
            //     user: 'client',
            //     text: 'do you have any offer regarding trip',
            //     number: ''
            // },
            // {
            //     user: 'admin',
            //     text: 'Are you looking for you own dream house?'
            // }
        ],
        users:[
            {
                id:1,
                name: 'Aslam',
                phone: '+919540378590',
                status: 'online'
            }
            ,
            {
                id:2,
                name: 'Sanaul',
                phone: '+919389726350', 
                status: 'offline'
            }
        ],
        broadcast: [
            {
                broadcast_name: 'Social Media ',
                modified_at: '2 hour ago'
            },
            {
                broadcast_name: 'Website Promotion',
                modified_at: '1 hour ago'
            },
            {
                broadcast_name: 'Lead Generation',
                modified_at: '30 min ago'
            }
        ]
    }

    componentWillMount(){
        fetch('/whatsapp')
        .then(res => res.json())
        .then(data => this.setState({ chatHistory: data }))
    }

    componentWillUpdate(){
        fetch('/whatsapp')
        .then(res => res.json())
        .then(data => this.setState({ chatHistory: data }))

        var objDiv = document.querySelector(".chat-body");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() {
        return (
            
            <div className="d-flex w-100">
                <div className="w-25 py-2">
                    <h5 className="px-4 py-3"><img src={process.env.PUBLIC_URL + 'assets/icons/comment-alt.svg'} width="24" alt="" className="img-fluid me-3" />All Chats</h5>
                    <div className="chat-aside">
                        {
                            this.state.users.map(el => 
                                <div className="chat-owner d-flex align-items-center justify-content-between">
                                    <div className="d-inline-flex align-items-center">
                                        <img src="https://picsum.photos/32" className="rounded-circle img-fluid" alt="" />
                                        <p className="mb-0 ms-3">{el.name}</p>
                                    </div>
                                    <span className={el.status}>1</span>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
                <div className="w-50 border-end border-start px-0">
                    <div className="chat-area">
                        <div className="chat-header d-flex justify-content-between align-items-center border-bottom p-4 py-3">
                            <div className="d-flex align-items-center">
                                <img src="https://picsum.photos/40" className="rounded-circle img-fluid" alt=""></img>
                    <label className="chat-username ms-2 mb-0 h5 ">Anonymous <sub className={`d-block ${this.state.userFlag}`}>{this.state.userFlag}</sub></label>
                            </div>

                            <button className="btn btn-sm btn-outline-danger d-flex align-items-center fw-bold"><i className="bi-trash me-1"></i>Delete</button>
                        </div>
                        <div className="chat-body">
                            {   
                                (this.state.chatHistory.length > 0) ?
                                this.state.chatHistory.map((el) => 
                                    <div className={`chat-box ${el.user}`}>
                                        
                                        <span>{el.text}</span>
                                    </div>
                                ): <p>No conversation found...</p>
                            }
                        </div>
                    </div>           
                </div>
                <div className="w-25 p-4 px-4">  
                    <h5 className="mb-4"><i className="bi-megaphone me-2" ></i>   All Broadcast</h5>
                    {
                        this.state.broadcast.map(el => 
                            <div className="d-flex justify-content-between py-3 border-bottom">
                                <div>
                                    <label className="fw-bold mb-0 d-block">{el.broadcast_name}</label>
                                    <small>Admin</small>
                                </div>
                                <small className="small">{el.modified_at}</small>
                            </div>
                        )
                    }

                    <button className="btn primary-btn mt-4" data-bs-target="#modalForm" data-bs-toggle="modal"><i className="bi-megaphone-fill me-2"></i>Add Broadcast</button>

                    <div className="modal fade slide" id="modalForm">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body p-5">
                                    <form action="/api" method="post">
                                        <div className="mb-3">
                                            <label>Broadcast Title</label>
                                            <input className="form-control" type="text" id="c_name" name="c_name" />
                                        </div>

                                        <div className="mb-3">
                                            <label>Phone 1</label>
                                            <input className="form-control" type="number" id="no_1" name="no_1" />
                                        </div>

                                        <div className="mb-3">
                                            <label>Phone 2</label>
                                            <input className="form-control" type="number" id="no_2" name="no_2" />
                                        </div>

                                        <div className="mb-3">
                                            <label>Messages</label>
                                            <textarea rows="4" className="form-control" type="text" id="message" name="message" />
                                        </div>

                                        <button className="btn btn-primary me-2" type="submit">Send Broadcast</button>
                                        <button className="btn btn-outline-secondary" type="submit">Close</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
        
        )
    }
}
