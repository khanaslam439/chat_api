import React, { Component } from 'react'


export default class Reservation extends Component {
    state = {
        allReply: []
    }
    componentDidMount(){
        fetch('/register')
        .then(res => res.json())
        .then(data => this.setState({ allReply: data}))
    }

    render() {
        return (
            <>
                <div className="w-100 p-4 pt-3"> 
                    <h4 className="mb-4">All Reservations</h4>
                    <table className="table border">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Sender</th>
                            <th>Reply</th>
                            <th>Choice</th>
                            <th>Name</th>
                            <th>No of guest</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                            (this.state.allReply != '') ?
                            this.state.allReply.map((el, index) => 
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.sender}</td>
                                    <td>{el.reply}</td> 
                                    <td>{el.step}</td> 
                                    <td>{el.name}</td> 
                                    <td>{el.no_of_guest}</td> 
                                    <td>{el.phone}</td> 
                                </tr>
                            )
                            : <tr>
                                <td colspan="8"className="fw-bold text-center py-4" >No Reservation Found...</td>
                            </tr>
                        }
                    </tbody>
                </table>
                </div>
            </>
        )
    }
}
