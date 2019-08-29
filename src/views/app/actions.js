// function requestApp() {
//   return {
//     type: 'REQUEST_APP',
//     loading: true,
//   }
// }

function receiveAppColor(color) {
  return {
    type: 'RECEIVE_APP_COLOR',
    color
  }
}


export function changeBgColor() {
  return function (dispatch) {

    //dispatch(requestApp());

    let colors = ['blue', 'red', 'yellow', 'coral'];
    let color = colors[Math.floor(Math.random()*colors.length)];

    return dispatch(receiveAppColor(color))
  }
}
