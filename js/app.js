window.openModal = openModal;

function openModal() {
  window.parent.postMessage(
    { type: 'display_modal', payload: '' }
    , '*');
}