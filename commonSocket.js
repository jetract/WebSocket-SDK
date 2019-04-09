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
                //Triggers when a notification is passed. For example, a new auction!
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
var socket = null;
var JetractWebSocket = {
    socket: null,
    config: {
        jetractNodeUrl: 'https://dev.jetract.com:8443/',
        userSecretKey: '',
        companyID: '', //ONLY Auctioneer
        userType: '' //1: Auctioneer - 2: BIDDER
    },
    connect: function() {
        var self = this;
        if( self.socket ) {
            self.socket.destroy();
            delete self.socket;
            self.socket = null;
        }
        this.socket = io.connect(JetractWebSocket.config.jetractNodeUrl, {
            secure: true,
            verify: false,
            reconnection: true,
            reconnectionDelay: 500,
            reconnectionAttempts: 10,
            query: "secret="+JetractWebSocket.config.userSecretKey+"&company="+JetractWebSocket.config.companyID+"&user_type="+JetractWebSocket.config.userType
        });
        this.socket.on('connect', function () {
            console.log('Connected to Jetract server.');
            if(JetractWebSocket.config.userType == '2')
                this.emit('load', JetractWebSocket.config.userSecretKey);
        });
        this.socket.on('disconnect', function () {
            console.log('Disconnected from Jetract server.');
            window.setTimeout( 'JetractWebSocket.connect()', 2000);
        });
        socket = JetractWebSocket.socket;
        if(typeof socketInit != 'undefined') socketInit();
        if(JetractWebSocket.config.userType == '1' && typeof auctioneerSocketInit != 'undefined') auctioneerSocketInit();
        if(JetractWebSocket.config.userType == '2' && typeof bidderSocketInit != 'undefined') bidderSocketInit();
    }
};

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
/****
    DO NOT CHANGE THIS PART END
****/
