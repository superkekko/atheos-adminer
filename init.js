//////////////////////////////////////////////////////////////////////////////80
// Plugin Template
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) Atheos & Liam Siira (Atheos.io), distributed as-is and without
// warranty under the MIT License. See [root]/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80
// Description: 
//	A blank plugin template to provide a basic example of a typical Atheos
//	plugin.
//////////////////////////////////////////////////////////////////////////////80
// Suggestions:
//	- A small line about improvements that can be made to this plugin/file
//////////////////////////////////////////////////////////////////////////////80
// Usage:
//  - desc: A short description of use
//
//////////////////////////////////////////////////////////////////////////////80

(function() {

	let self = false;

	function login($login, $password) {
		// validate user submitted credentials
		return ($login == 'atheos' && $password == 'Ath30s2022');
	}


	// Initiates plugin as a third priority in the system.
	carbon.subscribe('system.loadExtra', () => atheos.Adminer.init());

	atheos.Adminer = {

		init: function() {
			if (self) return;
			self = this;
		},

		//////////////////////////////////////////////////////////////////////80
		// SOME_METHOD: Opens an alert message in the browser
		//////////////////////////////////////////////////////////////////////80
		open: function() {
			var path = atheos.path + 'plugins/Adminer/adminer.php';
			window.open(path);
		}
	};

})();