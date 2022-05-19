
import React, { Component } from 'react';

export default class NewSolde extends Component {

    DATA;

    constructor(props) {
        super(props);

        this.eventSolde = this.eventName.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            solde: '',
        }
    }

    // Event handlers
    eventName(event) {
        this.setState({ solde: event.target.value })
    }
    onFormSubmit(event) {
      event.preventDefault()
    }


    componentDidMount() {
        this.DATA = JSON.parse(localStorage.getItem('solde'));

        if (localStorage.getItem('solde')) {
            this.setState({
                solde: this.DATA.solde,
            })
        } else {
            this.setState({
                solde: '',
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('solde', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className="container">
                 <div className="card">
                     <div className="card-body">
                        <form>
                            <div className="form-group mb-3">
                                <label><strong>Entrer un nouveau solde</strong></label>
                                <input type="text" className="form-control" value={this.setState.solde} onChange={this.eventName} />        
                            </div>
                            <div className="d-grid mt-3">
                                <button type="submit" className="btn btn-primary btn-block">Valider</button>
                            </div>
                        </form>
                      </div>
                  </div>
            </div>
        )
    }
}