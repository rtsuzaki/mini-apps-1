class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content:0,
            inputs:{},
            F1Entries:['Name','Email','Password'],
            F2Entries:['Shipping Address Line 1',' Shipping Address Line 2','City','State','Zip Code','Phone Number'],
            F3Entries:['Credit Card Number', 'Expiration Date','CVV','Billing Zip Code']
        }
    }
    handleCheckoutClick() {
        console.log('handled click')
        let nextContentNum = this.state.content + 1;
        this.setState({content:nextContentNum})
    }

    handlePurchaseClick() {
        console.log('handled purchase click')
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let newInputs = this.state.inputs
        newInputs[name]=value
        this.setState({
            inputs: newInputs,
        });
    }

    render() {
        return (  
            <div>
                <PageContent fNum={this.state.content} next={this.handleCheckoutClick.bind(this)} F1Entries={this.state.F1Entries} F2Entries={this.state.F2Entries} F3Entries={this.state.F3Entries} purchase ={this.handlePurchaseClick} handleInputChange= {this.handleInputChange.bind(this)}/>
            </div>
        )
    }
}
window.App = App

var PageContent =(props) => {
    if (props.fNum ===1) {
        var entries = props.F1Entries;
    } else if (props.fNum ===2) {
        var entries = props.F2Entries;
    } else if (props.fNum ===3) {
        var entries = props.F3Entries;
    }

    if (props.fNum === 0) {
        return (
           <button onClick={props.next}>Checkout</button>
        )
    } else if (props.fNum ===4) {
        return (
            <div>
            Summary of Purchase
            <br />
            <button onClick={props.purchase}>Purchase</button>
            </div>
        )
    } else {
        return (
            <div>
                {entries.map((entry)=> <FormEntry entryName={entry} handleInputChange={props.handleInputChange}/>)}
                <button onClick={props.next}>Next</button>
            </div>
        )
    }
}

var FormEntry = (props) => {
    return (
        <label>
        {props.entryName}:
        <input
            name={props.entryName}
            onChange={props.handleInputChange}
            />
        <br />
        </label>
        
        // <form action="/quotes" method="POST">
        // <input type="text" placeholder="name" name="name">
        // <input type="text" placeholder="quote" name="quote">
        // <button type="submit">Submit</button>
        // </form>
    )
}








//    super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
      
//     );
//   }
// }


ReactDOM.render(<App />, document.getElementById('app'));