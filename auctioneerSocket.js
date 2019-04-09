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
 * This file shows trigger functions of a given Auctioneer.
 * Warning: You can edit function names but DO NOT modify key/variable names!
 */

//Auctioneer Object
var Auctioneer = {
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
                Auctioneer.socket.functions.auctionStart();
            },
            bid_finish: function(){
                Auctioneer.socket.functions.auctionEnd()
            },
            bid: function(){
                Auctioneer.socket.functions.newOffer()
            },
            extra_time_duration: function(){
                Auctioneer.socket.functions.autoTimeExtensionTrigger()
            },
            access_auction: function(){
                Auctioneer.socket.functions.bidderIpAddress()
            },
            specification_approved: function(){
                Auctioneer.socket.functions.bidderSpecificationApprove()
            },
            specification_rejected: function(){
                Auctioneer.socket.functions.bidderSpecificationReject()
            },
            specification_reset: function(){
                Auctioneer.socket.functions.bidderSpecificationApprovalReset()
            },
            extension_period: function(){
                Auctioneer.socket.functions.auctionExtendDuration()
            },
            change_end_date: function(){
                Auctioneer.socket.functions.auctionEndDateChanged()
            },
            offer_delete: function(){
                Auctioneer.socket.functions.offerDeleted()
            },
            create_stage: function(){
                Auctioneer.socket.functions.auctionCreateStage()
            },
            delete_stage: function(){
                Auctioneer.socket.functions.auctionDeleteStage()
            },
            finish_stage: function(){
                Auctioneer.socket.functions.auctionEndStage()
            },
            start_stage: function(){
                Auctioneer.socket.functions.auctionStartStage()
            },
            announcement: function(){
                Auctioneer.socket.functions.getAnnouncements()
            },
            extra_time_setting: function(){
                Auctioneer.socket.functions.autoTimeExtension()
            }
        },
        /****
         DO NOT CHANGE THIS PART END
         ****/
        functions: {
            newOffer: function(){
                //Triggers when a new bid is submitted
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID

                /*An example of the incoming data
                Auctioneer.socket.data.task = '{"total_bid": 1650,
                                            "total_vat": null,
                                            "discount": 501.93,
                                            "id": "ec195207-7a3a-43ad-991c-8d880bdec43a",
                                            "note": "",
                                            "valid_until": "2019-04-10",
                                            "offer_detail": [{
                                                "offered_price": 150,
                                                "discount": "10.4200",
                                                "discount_type": "1",
                                                "delivery_date": "",
                                                "content": "''",
                                                "item_id": "309fc513-362e-446f-b466-dfe95f8ce3cb",
                                                "vat_rate": null,
                                                "vat_price": null
                                            }, {
                                                "offered_price": 100,
                                                "discount": "20.4200",
                                                "discount_type": "1",
                                                "delivery_date": "",
                                                "content": "''",
                                                "item_id": "862670df-9e69-4e9b-b416-10246033c818",
                                                "vat_rate": null,
                                                "vat_price": null
                                            }, {
                                                "offered_price": 100,
                                                "discount": "30.4200",
                                                "discount_type": "1",
                                                "delivery_date": "",
                                                "content": "''",
                                                "item_id": "9d8fdb64-c1f3-4a6b-a04e-9085d47f66ec",
                                                "vat_rate": null,
                                                "vat_price": null
                                            }, {
                                                "offered_price": 100,
                                                "discount": "40.4200",
                                                "discount_type": "1",
                                                "delivery_date": "",
                                                "content": "''",
                                                "item_id": "6f989df1-fb1a-4547-ab73-94d3247b9295",
                                                "vat_rate": null,
                                                "vat_price": null
                                            }, {
                                                "offered_price": 100,
                                                "discount": "50.4200",
                                                "discount_type": "1",
                                                "delivery_date": "",
                                                "content": "''",
                                                "item_id": "cbd17951-931c-472f-8ba0-ed39858d2d8f",
                                                "vat_rate": null,
                                                "vat_price": null
                                            }],
                                            "supplier_company_id": "efb485ec-1ef9-4f1f-af3d-169cccd86162",
                                            "supplier_company_name": "Mustafa Gültekin Şirketi",
                                            "supplier_email": "mustafagultekin2013@gmail.com",
                                            "supplier_name": "Mustafa Gültekin",
                                            "supplier_id": "b1eb20ed-86c8-4fe2-8fc0-81ac1201d523",
                                            "first_bid": {
                                                "total_bid": "1650.000000",
                                                "discount": "0.000000"
                                            },
                                            "prev_bid": {
                                                "total_bid": "1650.000000",
                                                "discount": "501.930000"
                                            },
                                            "created_at": "2019-04-09 16:12:32",
                                            "file": "https://dev.jetract.com/files/download/672bfb15-782a-4172-a49e-1c8a75eb0711"}';
                                            */
                //End of example
            },
            auctionStart: function(){
                //Triggers when an auction is started
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
            },
            auctionEnd: function(){
                //Triggers when an auction is ended
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
            },
            autoTimeExtensionTrigger: function(){
                //Triggers when an auto time extender extends the auction duration
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //DURATION OF EXTEND
            },
            bidderIpAddress: function(){
                //Triggers when bidder accepts or rejects the terms&condition for participating in an auction.
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //BIDDER ID
                Auctioneer.socket.data.element; //BIDDER IP ADDRESS
            },
            bidderSpecificationApprove: function(){
                //Triggers when bidder accepts the terms&condition for participating in an auction.
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //BIDDER ID
                Auctioneer.socket.data.element; //DESCRIPTION AND NAME OF JSON OBJECT
            },
            bidderSpecificationReject: function(){
                //Triggers when bidder rejects the terms&condition for participating in an auction.
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //BIDDER ID
                Auctioneer.socket.data.element; //DESCRIPTION AND NAME OF JSON OBJECT
            },
            bidderSpecificationApprovalReset: function(){
                //Triggers when auctioneer updates the terms&conditions
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //BIDDER ID
                Auctioneer.socket.data.element; //COMPANY ID AND NAME AND EMAIL ADDRESS OF JSON OBJECT
            },
            auctionExtendDuration: function(){
                //Triggers when auctioneer changes auction duration.
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //DURATION OF EXTEND
            },
            auctionEndDateChanged: function(){
                //Triggers when auctioneer changes the auction end date (ONLY SEALED BID AUCTION AND RFQ)
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
            },
            offerDeleted: function(){
                //Triggers when auctioneer deletes a bid
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //BIDDER ID
            },
            auctionCreateStage: function(){
                //Triggers when auctioneer adds a new stage to the auction (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //STAGE ID
            },
            auctionDeleteStage: function(){
                //Triggers when auctioneer deletes a stage from the auction (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //STAGE ID
            },
            auctionEndStage: function(){
                //Triggers when auctioneer ends a stage (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
            },
            auctionStartStage: function(){
                //Triggers when auctioneer starts a stage (ONLY SEALED BID AUCTION in ROUNDS)
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
            },
            getAnnouncements: function(){
                //Triggers when a new announcement is made
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                /*Make a new request to API and get announcements.
                Update Warning!
                Future update will change the behaviour of this function.
                Function will pass the new announcement.
                */
            },
            autoTimeExtension: function(){
                //Triggers when Auto Time Extension enabled / disabled
                console.log(Auctioneer.socket.data);
                
                Auctioneer.socket.data.data; //AUCTION ID
                Auctioneer.socket.data.task; //AUTO EXTENSION TYPE
            }
        }
    }
};

/****
    DO NOT CHANGE THIS PART
****/
function auctioneerSocketInit(){
    socket.on('user', function (type, data, task, element) {
        Auctioneer.socket.init({
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
