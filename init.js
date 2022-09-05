//////////////////////////////////////////////////////////////////////////////80
// Atheos Adminer
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) 2022 Francesco Filippi, distributed as-is and without
// warranty under the MIT License. See [root]/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80
// Description: 
//	A plugin to open Adminner as modal
//////////////////////////////////////////////////////////////////////////////80

(function() {

	let self = false;

	// Initiates plugin as a third priority in the system.
	carbon.subscribe('system.loadExtra', () => atheos.adminer.init());

	atheos.adminer = {

		init: function() {
			if (self) return;
			self = this;
		},

		open: function() {
			var path = atheos.path + 'plugins/Adminer/editor.php';
			//window.open(path);
			atheos.modal.load(1000,{
				target: 'Adminer',
				action: 'open',
				path: atheos.path
			});
			atheos.common.hideOverlay();
		}
	};

})();