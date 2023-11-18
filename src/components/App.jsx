// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


import { Component } from "react";
// import { Section } from './components/Section';
// import { Notification } from 

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onUpdated = item => {
    this.setState(prevState => {
      return {
        [item]: prevState[item] + 1
      };
    })
  } 
}