<?php
require_once("../../common.php");
Common::checkSession(); // Verify Session or Key

function adminer_object() {
    // required to run any plugin
    include_once "./plugins/plugin.php";
    
    // autoloader
    foreach (glob("plugins/*.php") as $filename) {
        include_once "./$filename";
    }
    
    $plugins = array(
        // specify enabled plugins here
        new AdminerFrames()
    );
    
    return new AdminerPlugin($plugins);
}

// include original Adminer or Adminer Editor
include "./editor.php";
?>