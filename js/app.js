window.openModal = openModal;
window.onSearchPosts = onSearchPosts

function onInit(){
 
}

function openModal() {

    sendMsgToParent('display_modal','add_post')
    
}

function onSearchPosts(ev){
  console.log('search', ev.target.value);
  sendMsgToParent('filter_posts', ev.target.value)

  
}

function sendMsgToParent(type, payload){
  window.parent.postMessage(
    { type, payload }
    , '*');
}
