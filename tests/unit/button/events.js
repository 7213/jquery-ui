define( [
	"jquery",
	"ui/button"
], function( $ ) {

module( "Button: events" );

asyncTest( "Anchor recieves click event when spacebar is pressed", function() {
	expect( 1 );
	var element = $( "#anchor-button" ).button();

	element.on( "click", function() {
		ok( true, "click occcured as a result of spacebar" );
		start();
	} );

	element.trigger( $.Event( "keyup", { keyCode: $.ui.keyCode.SPACE } ) );
});

} );
