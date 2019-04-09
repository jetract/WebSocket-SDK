
# WebSocket-SDK

**JETRACT**
*Socket SDK (Software Development Kit) of Jetract E-Auction and E-Procurement solutions.
Property of INARTS YAZILIM BILISIM INSAAT SAN. VE TIC. A.Ş.*

**V0.9.4**
Contact: support-api@jetract.com
Date: January 2019

## Requirements

Javascript, Socket.io

## Installation & Usage

### Manual Installation
Include `socket.io.js?v=1.1` for both.

Download and include `commonSocket.js` for both.

Download and include `auctioneerSocket.js` for Auctioneer.

Download and include `bidderSocket.js` for Bidder.

## Tests

To run the unit tests:
*Coming soon.*

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```javascript
//Include necessary files for Bidder
<script type="javascript" src="https://api-test.jetract.com:8443/socket.io/socket.io.js?v=1.1"></script>
<script type="javascript" src="commonSocket.js">
<script type="javascript" src="bidderSocket.js">
//End of include

//Make a new bid

/****
EMIT FUNCTION - MAKE A NEW BID
Description: Use this structure to make a new bid. Keep in mind that array data inputs are sorted accordingly if you have multiple items in auction.
Meaning amount[1] and price[1] correspond to same bid item.
amount[0] = amount of the item 0
price[0] = price of the item 0
price[1] = price of the item 1
Optional Parameters: Send empty string. Do NOT REMOVE from input array.
****/

var auctionID = 'EXAMPLE AUCTION ID';
var offer = {
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
"transport_date": "15-04-2019",//TRANSPORT DATE (OPTIONAL)
"files": "672bfb15-782a-4172-a49e-1c8a75eb0711" //OFFER FILE (OPTIONAL)
};

socket.emit('bid', auctionID, JSON.stringify(offer));
/****
END OF EMIT FUNCTION
****/
```


## Author

support-api@jetract.com


