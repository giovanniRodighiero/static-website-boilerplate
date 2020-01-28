// $(document).ready()
function ready (fn) {
    document.readyState != 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
}

ready(function () {
    console.log('dom ready !');
});