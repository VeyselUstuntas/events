<?php
require __DIR__ . "/view/partials/_layout.php";

?>


<div class="container mt-4 d-flex justify-content-center align-items-center flex-column">

    <div class="container mt-4 d-flex justify-content-center align-items-center alert alert-success d-none" id="alert">
        Hello World!
    </div>
    <a class="btn btn-success mt-4" id="button" onclick="onClick()">Enable</a>

    <script src="/event/static/js/script.js"></script>
</div>