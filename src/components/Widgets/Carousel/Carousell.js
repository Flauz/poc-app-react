// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { connect } from 'react-redux'



// class Carousel extends React.Component {

//     state = {
//         carousel: []
//     }


//     getCarousel = () => {
//         axios.get("http://localhost:3030/widgets")
//             .then(result => { this.setState({ carousel: result.data }) })
//     }

//     carouselToStore = () => {
//         const action = { type: 'CAROUSEL_LOADED', value: this.state.carousel }
//         this.props.dispatch(action)
//     }

//     componentDidMount() {
//         this.getCarousel()
//     }

//     render() {

//         this.carouselToStore()

//         return (
//             <div>
//                 hello world
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         // crsl: state.carousel,
//         state
//     }
// }


// // const mapDispatchToProps = () => {
// //     return (dispatch) => {
// //         axios.get("http://localhost:3030/widget")
// //             .then(result => {
// //                 dispatch({ type: "CAROUSEL_LOADED", value: result.data })
// //             })
// //     }
// // }


// export default connect(mapStateToProps)(Carousel)