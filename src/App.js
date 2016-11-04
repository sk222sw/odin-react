import React from 'react'

import Synth from './containers/synth/Synth'

const App = () => (
  <div>
    <Synth />
  </div>
)

export default App

// const App = ({keys, actions}) => (
//   <div className="App">
//     <Synth keys={keys} actions={actions} />
//   </div>
// )

// class App extends Component {
//   constructor(props) {
//     super(props)
//     console.log(props)
//   }

//   render() {
//     return (
//       <div>
//         Synth
//       </div>
//     );
//   }
// }

// App.propTypes = {
//   actions: PropTypes.object.isRequired,
// }

// const mapStateToProps = state => ({
//   keys: state.syntheziser.keys
// })

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(Actions, dispatch)
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
