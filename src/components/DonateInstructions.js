import React from 'react';

class DonateInstructions extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Donation Form</h2>
                <form>
                    <div className="form-group">
                        <label for="donationAmount">Donation Amount</label>
                        <input type="number" className="form-control" id="donationAmount" placeholder="Enter amount" />
                    </div>
                    <div className="form-group">
                        <label for="donorName">Your Name</label>
                        <input type="text" className="form-control" id="donorName" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label for="donorEmail">Email address</label>
                        <input type="email" className="form-control" id="donorEmail" placeholder="Enter your email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Donate</button>
                </form>
            </div>
        );
    }
}

export default DonateInstructions;