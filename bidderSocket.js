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
 * This file shows trigger and emit functions of a given Bidder.
 * Warning: You can edit function names but DO NOT modify key/variable names!
 * Emit Function: Emits(Sends) data to websocket
 * Trigger Function: Triggers when a corresponding emit is made.
 */

/****
    EMIT FUNCTION - MAKE A NEW BID
    Description: Use this structure to make a new bid. Keep in mind that array data inputs are sorted accordingly if you have multiple items in auction. 
    Meaning amount[1] and price[1] correspond to same bid item.
    amount[0] = amount of the item 0
    price[0] = price of the item 0
    price[1] = price of the item 1
    Optional Parameters: Send empty string. Do NOT REMOVE from input array.
****/
var auctionID = '';
var offer = '{
                "id": ["309fc513-362e-446f-b466-dfe95f8ce3cb", "862670df-9e69-4e9b-b416-10246033c818", "9d8fdb64-c1f3-4a6b-a04e-9085d47f66ec", "6f989df1-fb1a-4547-ab73-94d3247b9295", "cbd17951-931c-472f-8ba0-ed39858d2d8f"], //ITEM ID
                "amount": ["3", "1", "5", "2", "4"], //ITEM AMOUNT
                "item_delivery_date": ["", "", "", "", ""], //ITEM DELIVERY DATE (ONLY IF THE requestDeliveryDateForItems IS TURNED ON)
                "content": ["", "", "", "", ""], //ITEM DESCRIPTION
                "price": ["150", "100", "100", "100", "100"], //OFFER PRICE 
                "decimal": ["000000", "000000", "000000", "000000", "000000"], //DECIMAL PART OF THE OFFER
                "discount": ["10.42", "20.42", "30.42", "40.42", "50.42"],
                "discount_type": ["1", "1", "1", "1", "1"], //1: PERCENT - 2: PRICE
                "description": "", //OFFER DESCRIPTION (OPTIONAL)
                "transport_type": "", //TRANSPORT_TYPE (STRING - REQUIRED)
                "payment_type": "86a5d0f6-09c5-4da8-bade-fd84ad6f4eed", //PAYMENT TYPE ID (REQUIRED)
                "valid_until": "10-04-2019", //VALID UNTIL DATE (OPTIONAL)
                "transport_date": "15-04-2019", //TRANSPORT DATE (OPTIONAL)
                "files": "672bfb15-782a-4172-a49e-1c8a75eb0711" //OFFER FILE (OPTIONAL)
            }';

socket.emit('bid', auctionID, offer);
/****
    END OF EMIT FUNCTION
****/

var Bidder = {
    socket: {
        type: '',
        data: {},
        init: function(value){
            if(value == '' || typeof value.type == 'undefined' || this.triggers[value.type] == null || typeof this.triggers[value.type] != 'function') return false;
            this.type = value.type;
            this.data = value;
            this.triggers[this.type]();
        },
        /****
         DO NOT CHANGE THIS PART
         ****/
        triggers: {
            bid_start: function(){
                Bidder.socket.functions.auctionStart();
            },
            bid_finish: function(){
                Bidder.socket.functions.auctionEnd()
            },
            time_finish: function(){
                Bidder.socket.functions.timeEnded()
            },
            start_stage: function(){
                Bidder.socket.functions.auctionStartStage()
            },
            finish_stage: function(){
                Bidder.socket.functions.auctionEndStage()
            },
            extension_period: function(){
                Bidder.socket.functions.auctionExtendDuration()
            },
            change_end_date: function(){
                Bidder.socket.functions.auctionEndDateChanged()
            },
            specification_reset: function(){
                Bidder.socket.functions.bidderSpecificationApprovalReset()
            },
            bid_end_date_control: function(){
                Bidder.socket.functions.auctionEndControl()
            },
            min_discount_control: function(){
                Bidder.socket.functions.auctionMinimumChangeControl()
            },
            zero_price_control: function(){
                Bidder.socket.functions.offersNullControl()
            },
            bid_time_control: function(){
                Bidder.socket.functions.offerTimeControl()
            },
            starting_price_error: function(){
                Bidder.socket.functions.auctionbidLimitControl()
            },
            bidded: function(){
                Bidder.socket.functions.offerSubmitControl()
            },
            success: function(){
                Bidder.socket.functions.offerControl()
            },
            extra_time_duration: function(){
                Bidder.socket.functions.autoTimeExtensionTrigger()
            },
            bid_increase_control: function(){
                Bidder.socket.functions.auctionBidChangeLimitControl()
            },
            bid_start_control: function(){
                Bidder.socket.functions.auctionStartControl()
            },
            discount_control: function(){
                Bidder.socket.functions.offerDiscountControl()
            },
            new_bid: function(){
                Bidder.socket.functions.auctionNewOffer()
            },
            announcement: function(){
                Bidder.socket.functions.getAuctionAnnouncements()
            },
            offer_delete: function(){
                Bidder.socket.functions.offerDeleted()
            },
            auction_file: function(){
                Bidder.socket.functions.getAuctionFiles()
            },
            create_stage: function(){
                Bidder.socket.functions.auctionCreateStage()
            },
            delete_stage: function(){
                Bidder.socket.functions.auctionDeleteStage()
            },
            finish_stage: function(){
                Bidder.socket.functions.auctionEndStage()
            },
            start_stage: function(){
                Bidder.socket.functions.auctionStartStage()
            }
        },
        /****
         DO NOT CHANGE THIS PART END
         ****/
        functions: {
            auctionStart: function(){
                //Triggers when an auction is started
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            auctionEnd: function(){
                //Triggers when an auction is ended
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            timeEnded: function(){
                //Triggers auction time ends.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            auctionStartStage: function(){
                //Triggers when auction stage is started (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            auctionEndStage: function(){
                //Triggers when auction stage is ended (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            auctionExtendDuration: function(){
                //Triggers when auctionner changed the auction duration manually.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
                Employer.socket.data.task; //DURATION OF EXTEND
            },
            auctionEndDateChanged: function(){
                //Triggers when auctionner changes the end date. (ONLY SEALED BID AUCTION AND RFQ)
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            bidderSpecificationApprovalReset: function(){
                //Triggers when auctionner changes terms&conditions. Re-Approval is required.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
                Employer.socket.data.task; //BIDDER ID
                Employer.socket.data.element; //COMPANY ID AND NAME AND EMAIL ADDRESS OF JSON OBJECT
            },
            auctionEndControl: function(){
                //Triggers when bid couldn't be submitted because auction ended!
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status; //TRUE
            },
            auctionMinimumChangeControl: function(){
                //Triggers when bid couldn't be submitted because minimumChange rule was active.
                console.log(Bidder.socket.data);
            },
            offersNullControl: function(){
                //Triggers when total bid is equal to 0.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status; //TRUE
            },
            offerTimeControl: function(){
                //Triggers when a new bid is less than 20 seconds away from last bid.
                //Note: You can't make a new bid in less than 20 seconds.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status; //TRUE
            },
            auctionbidLimitControl: function(){
                //Triggers when bid couldn't be submitted because bid limit rule was active.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status; //TRUE
            },
            offerSubmitControl: function(){
                //Triggers when bid was submitted.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status;
                //TRUE: Succesfully submitted bid.
                //FALSE: Couldn't submit bid.
            },
            offerControl: function(){
                //Triggers when a fatal error occured.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status;
                //False: Fatal Error Occured!
            },
            autoTimeExtensionTrigger: function(){
                //Triggers when an auto time extender extends the auction duration
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status; //TRUE OR FALSE
            },
            auctionBidChangeLimitControl: function(){
                //Triggers when a new offer is greater / less than previous offer depending on reverse / forward auction type. If Bid Change Limit rule is turned on.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status; //TRUE OR FALSE
            },
            auctionStartControl: function(){
                //Triggers when a bid couldn't be submitted because auction was not started.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status; //TRUE
            },
            offerDiscountControl: function(){
                //Triggers when discount is greater than last bid, based on each item.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.status; //TRUE OR FALSE
            },
            auctionNewOffer: function(){
                //Triggers when a new bid is submitted.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
                /*Make a new request to API and get latest offers.
                Update Warning!
                Future update will change the behaviour of this function.
                Function will pass the max / min offers for forward / reverse auction types.
                */
            },
            getAuctionAnnouncements: function(){
                /*Make a new request to API and get announcements.
                Update Warning!
                Future update will change the behaviour of this function.
                Function will pass the new announcement.
                */
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            offerDeleted: function(){
                //Triggers when a bid was deleted.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
                Employer.socket.data.task; //BIDDER ID
            },
            getAuctionFiles: function(){
                //Triggers when auctionner attached a new file.
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            auctionCreateStage: function(){
                //Triggers when auctioneer adds a new stage to the auction (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
                Employer.socket.data.task; //STAGE ID
            },
            auctionDeleteStage: function(){
                //Triggers when auctioneer deletes a stage from the auction (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
                Employer.socket.data.task; //STAGE ID
            },
            auctionEndStage: function(){
                //Triggers when auctioneer ends a stage (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            },
            auctionStartStage: function(){
                //Triggers when auctioneer starts a stage (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Bidder.socket.data);
                
                Employer.socket.data.data; //AUCTION ID
            } 
        }
    }
};

/****
    DO NOT CHANGE THIS PART
****/
function bidderSocketInit(){
    socket.on('user', function (type, data, task, element) {
        Bidder.socket.init({
            type: type,
            data: data,
            task: task,
            element: element
        });
    });

    socket.on('bid_end_date_control', function (status){
        Bidder.socket.init({
            type: 'bid_end_date_control',
            status: status
        });
    });

    socket.on('min_discount_control', function (status){
        Bidder.socket.init({
            type: 'min_discount_control',
            status: status
        });
    });

    socket.on('zero_price_control', function (status){
        Bidder.socket.init({
            type: 'zero_price_control',
            status: status
        });
    });

    socket.on('bid_time_control', function (status){
        Bidder.socket.init({
            type: 'bid_time_control',
            status: status
        });
    });

    socket.on('starting_price_error', function (status){
        Bidder.socket.init({
            type: 'starting_price_error',
            status: status
        });
    });

    socket.on('bidded', function (status){
        Bidder.socket.init({
            type: 'bidded',
            status: status
        });
    });

    socket.on('success', function (status){
        Bidder.socket.init({
            type: 'success',
            status: status
        });
    });

    socket.on('extra_time_duration', function (status){
        Bidder.socket.init({
            type: 'extra_time_duration',
            status: status
        });
    });

    socket.on('bid_increase_control', function (status){
        Bidder.socket.init({
            type: 'bid_increase_control',
            status: status
        });
    });

    socket.on('bid_start_control', function (status){
        Bidder.socket.init({
            type: 'bid_start_control',
            status: status
        });
    });

    socket.on('discount_control', function (status){
        Bidder.socket.init({
            type: 'discount_control',
            status: status
        });
    });
}
bidderSocketInit();
/****
    DO NOT CHANGE THIS PART END
****/