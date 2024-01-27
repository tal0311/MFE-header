
window.sendMsg = sendMsgToParent;

function sendMsgToParent() {
  var message = {
    type: "messageType",
    payload: {
      //... your data here
    },
    sender: "header-MFE",
    timestamp: new Date().toISOString(),
  };
  // console.log('Sending message to parent page:  ', message);
  window.parent.postMessage(message, "http://127.0.0.1:3000/");

  // Replace with your parent page's origin
  // window.parent.postMessage(message, 'http://127.0.0.1:3000/'); // Replace with your parent page's origin
}

window.addEventListener(
  "message",
  (event) => {
    // Optionally check the origin here for security
    // if (event.origin !== 'http://expected-main-page-origin.com') return;
    console.log(event.origin);
    if (event.data.source === "react-devtools-content-script") return;
    console.log("Message received in header iframe:");

    // Handle the message as needed
  },
  false
);

function init(){
  

}

function broadCast(){

}