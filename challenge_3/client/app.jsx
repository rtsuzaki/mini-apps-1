class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content:0,
            F1Entries:['Name','Email','Password'],
            F2Entries:['Shipping Address Line 1',' Shipping Address Line 2','City','State','Zip Code','Phone Number'],
        }
    }
    handleCheckoutClick() {
        console.log('handled click')
        let nextContentNum = this.state.content + 1;
        this.setState({content:nextContentNum})
    }
    render() {
        return (  
            <div>
                <PageContent fNum={this.state.content} next={this.handleCheckoutClick.bind(this)}/>
            </div>
        )
    }
}
window.App = App

var PageContent =(props) => {
    if (props.fNum === 0) {
        return (
           <button onClick={props.next}>Checkout</button>
        )
    } else if (props.fNum === 1) {
        return (
            <div>
                <F1 />
                <button onClick={props.next}>Next</button>
            </div>
        )
    } else if (props.fNum === 2) {
        return (
            <div>
                <F2 />
                <button onClick={props.next}>Next</button>
            </div>
        )
    } else if (props.fNum === 3) {
        return (
            <div>
                <F3 />
                <button onClick={props.next}>Next</button>
            </div>
        )
    } else if (props.fNum === 4) {
        return (
            <div>
            <button onClick={()=>{console.log('purchase')}}>Purchase</button>
            </div>
        )
    }

};

var F1 = (props) => {
    return (
        <form>
            <label>
            Name:
            <input
                name="name"
                // onChange={this.handleInputChange} />
                />
            </label>
            <br />
            <label>
            Email:
            <input
                name="email"
                // value={this.state.numberOfGuests}
                // onChange={this.handleInputChange} />
                />
            </label>
            <label>
            Password:
            <input
                name="password"
                />
            </label>
        </form>
    )
}

// var F2 = (props) => {
//     return (
//         <form>
//             <label>
//             Shipping Address Line 1:
//             <input
//                 name="address1"
//                 // onChange={this.handleInputChange} />
//                 />
//             </label>
//             <br />
//             <label>
//             Shipping Address Line 2:
//             <input
//                 name="address2"
//                 // value={this.state.numberOfGuests}
//                 // onChange={this.handleInputChange} />
//                 />
//             </label>
//             <label>
//             City:
//             <input
//                 name="city"
//                 />
//             </label>
//             <label>
//             State:
//             <input
//                 name="state"
//                 />
//             </label>
//             <label>
//             Zip Code:
//             <input
//                 name="zipCode"
//                 />
//             </label>
//             <label>
//             Phone Number:
//             <input
//                 name="phoneNumber"
//                 />
//             </label>
//         </form>
//     )
// }

// var F3 = (props) => {
//   return (
//     <form>
//         <label>
//         Credit Card #:
//         <input
//             name="cardNumber"
//             // onChange={this.handleInputChange} />
//             />
//         </label>
//         <br />
//         <label>
//         Expiration Date:
//         <input
//             name="expiration"
//             // value={this.state.numberOfGuests}
//             // onChange={this.handleInputChange} />
//             />
//         </label>
//         <label>
//         CVV:
//         <input
//             name="cvv"
//             />
//         </label>
//         <label>
//         Billing Zip code:
//         <input
//             name="billing"
//             />
//         </label>
//      </form>
//   )
// }

var formEntry = (props) => {
    return (
        <label>
        {props.entryName}:
        <input
            name="billing"
            />
        </label>
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