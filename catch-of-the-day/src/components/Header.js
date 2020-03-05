import React, { Component } from 'react';

// class Header extends Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch
//                     <span className="ofThe">
//                         Of The
//                     </span>
//                      Day</h1>
//                 <h3 className="tagline">
//                     <span> {this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// }

// stateless functional component
// const Header = (props) => {
//     return (
//         <header className="top">
//             <h1>Catch
//                         <span className="ofThe">
//                     Of Theƒ
//                         </span>
//                 Day</h1>
//             <h3 className="tagline">
//                 <span> {props.tagline}</span>
//             </h3>
//         </header>
//     );
// }

//implicit return 
// - can help you save some memory and improve performance
const Header = (props) => (
    <header className="top">
        <h1>Catch
                        <span className="ofThe">
                Of The
                        </span>
            Day</h1>
        <h3 className="tagline">
            <span> {props.tagline}</span>
        </h3>
    </header>
);
export default Header;