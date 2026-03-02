/**
 * @param {HTMLElement} element 
 */
function add_to_header_component_dropdown(element){
  const parent = select_parent_component(element);
  const ul = parent.querySelector('ul');
  fetch_controller("header", "add_dropdown")
    .then(html => ul.insertAdjacentHTML('beforeend', format_html(html)));
}
