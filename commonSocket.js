/**
 * JETRACT
 *
 * Socket SDK (Software Development Kit) of Jetract E-Auction and E-Procurement solutions.
 * Property of INARTS YAZILIM BILISIM INSAAT SAN. VE TIC. A.Ş.
 *
 * V0.9.4
 *
 * Contact: support-api@jetract.com
 * Date: January 2019
 * ---------------------------------
 * This file includes common configuration and run parameters for  both Auctionner and Bidder
 * Warning: You can edit function names but DO NOT modify key/variable names!
 */

var Jetract = {
    socket: {
        type: '',
        data: {},
        init: function(value){
            if(value == '' || typeof value.type == 'undefined' || this.triggers[value.type] == null || typeof this.triggers[value.type] != 'function') return false;
            this.type = value.type;
            this.data = value;
            this.triggers[this.type]();
        },
        triggers: {
            notification: function(){
                Jetract.socket.functions.getNotifications();
            }
        },
        functions: {
            getNotifications: function(){
                //Triggers when a notification is passed. For example, a new bid!
                /*Make a new request to API and get Notifications.
                Update Warning!
                Future update will change the behaviour of this function.
                Function will pass the new notification.
                */
                console.log(Jetract.socket.data);

                Jetract.socket.data.data; //USER ID
            }
        }
    }
};

/****
    DO NOT CHANGE THIS PART
****/
<script src="https://api-test.jetract.com:8443/socket.io/socket.io.js?v=1.1"><script>

var socket = null;
var JetractNodeUrl = 'https://api-test.jetract.com:8443/';
var userSecretKey = '';
var companyID = ''; //ONLY Auctioneer
var userType = ''; //1: Auctioneer - 2: BIDDER
var JetractWebSocket = {
    socket: null,
    connect: function() {
        var self = this;
        if( self.socket ) {
            self.socket.destroy();
            delete self.socket;
            self.socket = null;
        }
        this.socket = io.connect(JetractNodeUrl, {
            secure: true,
            verify: false,
            reconnection: true,
            reconnectionDelay: 500,
            reconnectionAttempts: 10,
            query: "secret="+userSecretKey+"&company="+companyID+"&user_type="+userType
        });
        this.socket.on('connect', function () {
            console.log('Connected to Jetract server.');
            if(userType == '2') 
               this.emit('load', userSecretKey);
        });
        this.socket.on('disconnect', function () {
            console.log('Disconnected from Jetract server.');
            window.setTimeout( 'JetractWebSocket.connect()', 2000);
        });
        socket = JetractWebSocket.socket;
        if(typeof socketInit != 'undefined') socketInit();
        if(typeof auctioneerSocketInit != 'undefined') auctioneerSocketInit();
        if(typeof bidderSocketInit != 'undefined') bidderSocketInit();
    }
};
JetractWebSocket.connect();

function socketInit(){
    socket.on('user', function (type, data, task, element) {
        Jetract.socket.init({
            type: type,
            data: data,
            task: task,
            element: element
        });
    });
}
socketInit();
/****
    DO NOT CHANGE THIS PART END
****/