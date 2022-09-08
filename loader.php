<?php
//////////////////////////////////////////////////////////////////////////////80
// Atheos Adminer
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) 2022 Francesco Filippi, distributed as-is and without
// warranty under the MIT License. See [root]/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80


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

	class AdminerCustomization extends AdminerPlugin {
		function permanentLogin() {
	    	// key used for permanent login
	    	return 'BU6i4sbXemua84jDdB7mBDAInPVu5ZeJn6lK2X7j';
	    }
    }
    
    return new AdminerCustomization($plugins);
}

// include original Adminer or Adminer Editor
include "./editor.php";
?>