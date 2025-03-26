/*! For license information please see 370.54dbd070.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[370],{1072:(e,n,t)=>{t.d(n,{A:()=>d});var i=t(8139),r=t.n(i),s=t(5043),a=t(7852),o=t(579);const c=s.forwardRef(((e,n)=>{let{bsPrefix:t,className:i,as:s="div",...c}=e;const d=(0,a.oU)(t,"row"),l=(0,a.gy)(),u=(0,a.Jm)(),m=`${d}-cols`,p=[];return l.forEach((e=>{const n=c[e];let t;delete c[e],null!=n&&"object"===typeof n?({cols:t}=n):t=n;const i=e!==u?`-${e}`:"";null!=t&&p.push(`${m}${i}-${t}`)})),(0,o.jsx)(s,{ref:n,...c,className:r()(i,d,...p)})}));c.displayName="Row";const d=c},2105:(e,n,t)=>{t.d(n,{A:()=>i});const i=(0,t(7784).A)("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]])},4063:(e,n,t)=>{t.d(n,{A:()=>d});var i=t(8139),r=t.n(i),s=t(5043),a=t(7852),o=t(579);const c=s.forwardRef(((e,n)=>{let{bsPrefix:t,bg:i="primary",pill:s=!1,text:c,className:d,as:l="span",...u}=e;const m=(0,a.oU)(t,"badge");return(0,o.jsx)(l,{ref:n,...u,className:r()(d,m,s&&"rounded-pill",c&&`text-${c}`,i&&`bg-${i}`)})}));c.displayName="Badge";const d=c},7370:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var i=t(5043),r=t(2489),s=t(2105),a=t(8139),o=t.n(a),c=t(7852),d=t(3372),l=t(579);const u=i.forwardRef(((e,n)=>{let{active:t=!1,disabled:i=!1,className:r,style:s,activeLabel:a="(current)",children:c,linkStyle:u,linkClassName:m,as:p=d.A,...g}=e;const f=t||i?"span":p;return(0,l.jsx)("li",{ref:n,style:s,className:o()(r,"page-item",{active:t,disabled:i}),children:(0,l.jsxs)(f,{className:o()("page-link",m),style:u,...g,children:[c,t&&a&&(0,l.jsx)("span",{className:"visually-hidden",children:a})]})})}));u.displayName="PageItem";const m=u;function p(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;const r=i.forwardRef(((e,i)=>{let{children:r,...s}=e;return(0,l.jsxs)(u,{...s,ref:i,children:[(0,l.jsx)("span",{"aria-hidden":"true",children:r||n}),(0,l.jsx)("span",{className:"visually-hidden",children:t})]})}));return r.displayName=e,r}const g=p("First","\xab"),f=p("Prev","\u2039","Previous"),h=p("Ellipsis","\u2026","More"),b=p("Next","\u203a"),y=p("Last","\xbb"),v=i.forwardRef(((e,n)=>{let{bsPrefix:t,className:i,size:r,...s}=e;const a=(0,c.oU)(t,"pagination");return(0,l.jsx)("ul",{ref:n,...s,className:o()(i,a,r&&`${a}-${r}`)})}));v.displayName="Pagination";const P=Object.assign(v,{First:g,Prev:f,Ellipsis:h,Item:m,Next:b,Last:y});var _=t(3519),w=t(8628),k=t(4063),x=t(1072),N=t(8602),A=t(4140);const R=i.forwardRef(((e,n)=>{let{as:t,bsPrefix:i,variant:r="primary",size:s,active:a=!1,disabled:d=!1,className:u,...m}=e;const p=(0,c.oU)(i,"btn"),[g,{tagName:f}]=(0,A.Am)({tagName:t,disabled:d,...m}),h=f;return(0,l.jsx)(h,{...g,...m,ref:n,disabled:d,className:o()(u,p,a&&"active",r&&`${p}-${r}`,s&&`${p}-${s}`,m.href&&d&&"disabled")})}));R.displayName="Button";const S=R,C=[{id:1,title:"Voting Smart Contract",description:"A sophisticated decentralized voting system built on the Ethereum blockchain that ensures transparent and tamper-proof elections. This smart contract implements a comprehensive voting mechanism with strict security measures to prevent double voting and maintain voter privacy.\n\nKey Features:\n- Secure voter registration with address verification\n- Transparent candidate nomination process\n- Real-time vote counting with anti-tampering measures\n- Admin controls for managing election phases\n- Complete audit trail of all voting activities",securityLevel:"High",scope:["Secure voter registration and verification","Candidate nomination with unique identifiers","Vote casting with duplicate prevention","Real-time vote tallying","Election phase management","Result verification and audit"],functionalities:["Voter registration with address verification","Candidate nomination with unique symbols","Secure vote casting with duplicate prevention","Real-time vote counting and tracking","Admin controls for election phases","Automated result calculation","Event monitoring for all actions"],code:'\n    // SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract Voting{\n\n//..........for voters.........\n\n//total votes in the Election\nuint public TotalVotes=0;\n\n//counting votes one by one for ending the Elections, we have to set vote limit for accuracy\nuint public currentVotes=0;\n\n\n//check voting completed or not\nbool public Polling=true;\n\n//check Registration is completed or not\nbool public Registration=true;\n//check Nomination is completed or not\nbool public Nomination=true;\n\n//Admin for Elections\naddress public  Admin;\n//Storing a Voter information\nstruct Voter{\n    string name;\n    string addr;\n    bool Registered;\n    bool voted;\n   \n}\n\n\n//storing all voter details in a struct Array\nVoter[] public VoterList;\n\n//Getting voter details by their wallet address\nmapping(address=>Voter)public VoterDetails;\n\n\n\n//..........For Participant ..............\n\n// Dynamically storing a Participant in Elections\n\n//creating a struct for storing the participant in Elections\n struct Participant{\n    string name;\n    string symbol;\n    uint votes;\n    uint index;\n\n }\n uint public ParticipantIndex=0;//It is index for updating participant vote count in the array\n \n//storing in an Array for accessing all participants once\nParticipant[] public ParticipantList;\n\n//accessing a participant votes instantly\nmapping(string=>Participant)public ParticipantDetails;\n\n//setting Admin \nconstructor(){\nAdmin=msg.sender;\n}\n\n\nmodifier OnlyAdmin(){\n    require(msg.sender==Admin,"Not the Admin!");\n    _;\n}\n\n\n//Events for monitoring\nevent NominationEvent(string pname,string psymbol);\nevent RegisterEvent(address vwallet,string vname,string vaddress );\nevent VotedEvent(address sender,string symbol);\n//Add Participant to the Elections\nfunction NominationForParticipant(string memory _name,string memory _symbol)public  OnlyAdmin returns(bool){\n    require(Nomination==true,"Nomination completed!");\n\nrequire(keccak256(abi.encodePacked(ParticipantDetails[_symbol].name)) != keccak256(abi.encodePacked(_name)),"Participant name already exists!");\nrequire(keccak256(abi.encodePacked(ParticipantDetails[_symbol].symbol)) != keccak256(abi.encodePacked(_symbol)),"Symbol already exists");\n\nParticipantDetails[_symbol]=Participant(_name,_symbol,0,ParticipantIndex);\nParticipantList.push(Participant(_name,_symbol,0,ParticipantIndex));\nParticipantIndex++;\nemit NominationEvent(_name, _symbol);\n\nreturn true;\n\n}\n\n\n//Register a Voter\n\nfunction RegisterVoter(string memory _name,string memory _addr)public returns(bool){\n    require(Registration==true,"Registration is completed");\n    require(!VoterDetails[msg.sender].Registered, "Voter is already registered!");\n    VoterList.push(Voter(_name,_addr,true ,false));\n    VoterDetails[msg.sender]=Voter(_name,_addr,true,false);\n    TotalVotes++;\n    emit RegisterEvent(msg.sender, _name, _addr);\n    return true;\n}\n\n\n//Vote to participant\n\nfunction VoteToParticipant(string  memory _symbol)public   returns (bool){\n   require(Polling==true,"Polling stopped!");\n    require(!VoterDetails[msg.sender].voted,"Already Voted");\n    require(currentVotes<TotalVotes,"Voting Completed!"); // Changed <= to < for accuracy\n\n VoterDetails[msg.sender].voted=true;\nParticipantDetails[_symbol].votes+=1;//incrementing the participant vote count\nuint i=ParticipantDetails[_symbol].index;\n\nParticipantList[i].votes+=1;\n\n currentVotes+=1;\n emit VotedEvent(msg.sender, _symbol);\n\nreturn true;\n\n\n}\n\n//stop the election polling\nfunction StopPolling()public  OnlyAdmin {\n    Polling=false;\n\n\n}\n//stop the nomination process\nfunction StopNomination()public OnlyAdmin {\n    Nomination=false;\n\n}\n//stop the voter Registration\nfunction StopRegistration()public OnlyAdmin {\n    Registration=false;\n    \n}\n\n\n//To know the Voter details\nfunction getMyDetails()public view returns (Voter memory){\n    return VoterDetails[msg.sender];\n}\n//to know the participant details\nfunction getParticipant(string memory _symbol)public view returns (Participant memory){\n    return ParticipantDetails[_symbol];\n}\n\n\n}\n\n}'},{id:2,title:"Agricultural Supply Chain",description:"A blockchain-based supply chain management system designed specifically for agricultural products. This smart contract enables complete transparency and traceability of agricultural products from farm to table, ensuring food safety and fair pricing.\n\nKey Features:\n- Complete product lifecycle tracking\n- Ownership transfer verification\n- Quality assurance checkpoints\n- Price tracking across the supply chain\n- Consumer feedback system\n- Real-time inventory management",securityLevel:"Medium",scope:["End-to-end product tracking","Ownership transfer management","Quality control checkpoints","Price monitoring system","Consumer feedback collection","Inventory tracking","Transportation monitoring"],functionalities:["Product creation and registration","Ownership transfer with verification","Stage-wise quality updates","Price tracking at each stage","Retailer inventory management","Customer review system","Transportation status updates"],code:'\n    \n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\ncontract AgriSupplyChain {\n\nuint public productId=0;//inital value for products\n    // Product Details\n    struct Product {\n        uint id;\n        string[] names;\n        address currentOwner;\n     address[] owners;\n        string image;\n        State state; \n    uint[] period; // Time taken at each stage (in hours)\n        uint[] pricesFixed;\n    string[] location; \n        uint[] expenditure;\n        string[] transportStage;//\n    }\n\nmapping(uint=>Product)public Products;//storing the all products in a mapping with theri id\n\n//Product details in Retialer stage\n\nstruct RetailerStage{\n    uint id;\n    uint sales;\n    uint stockReceived;\n    uint price;\n    uint percent;\n    string location;\n\n}\n\n//mapping\nmapping(uint=>RetailerStage)public RetialDetails;\n//customer Review for the Product\n\nstruct Review{\n    uint id;\n    uint8 quality;\n    uint8 rating;\n    string description;\n    string priceReview;\n\n}\nmapping (uint=>Review)public ProductReview;\n// Possible states of a product in the supply chain                                \nenum State { Harvest,  InProduction, Retailer,Customer }\n\n//Events Tracking for Products\n\nevent ProductCreated(uint pid,address powner,string pname);//creation time\nevent TransferOwner(address oldOwner,address newOwner,State state);//Owner ship transfering\n\nevent ProductUpdation(address powner,string pname,uint pprice,string plocation);//updation\n\nfunction CreateProduct(\n    string memory _name,\n   string memory _image,\n      uint _period,\n\n    uint _price,\n    string memory _location,\n    uint _expenditure,\n    string memory _transportStage\n\n) public   {\n    productId++;\n    Products[productId].id=productId;\n     Products[productId].names.push(_name);\n     Products[productId].image = _image;\n     Products[productId].state = State.Harvest;\n     Products[productId].currentOwner=msg.sender;\n    Products[productId].owners.push(msg.sender);\n    Products[productId].period.push(_period);\n     Products[productId].pricesFixed.push(_price);\n    Products[productId].location.push(_location);\n    Products[productId].expenditure.push(_expenditure);\n    Products[productId].transportStage.push(_transportStage);\n\n    emit ProductCreated(productId, msg.sender,_name);\n\n}\n\nmodifier IsOwner(uint _id){\n   \n    require(msg.sender==Products[_id].currentOwner,"Not the Product Owner");\n    _;\n}\n\n//Transfer Product OwnerShip in supply Chain\nfunction TransferOwnerShip(uint _id,address _newOwner)public IsOwner(_id){\n    require(msg.sender!=_newOwner,"This is the current Owner");\n    if(Products[_id].state==State.Retailer){\n        return ;\n    }\n    if(Products[_id].state==State.Harvest){\n        Products[_id].state=State.InProduction;\n    }\n    else{\n        Products[_id].state=State.Retailer;\n    }\n    //   if(Products[_id].state==State.Retailer){\n    //     return ;\n    // }\n    Products[_id].currentOwner=_newOwner;\n    Products[_id].owners.push(_newOwner);\nemit TransferOwner(msg.sender,_newOwner, Products[_id].state);\n\n}\n\n//function to update product details in t next level supply chain \n\n\nfunction UpdateChain(\nuint _id ,\nstring memory _name,\nuint _period,\nuint _pricesFixed,\nstring memory _location,\nuint _expenditure,\nstring memory _transportStage)public IsOwner(_id){\n\n//this function is available for stages InProduction\nrequire(Products[_id].state==State.InProduction,"This stage no update permission!");\nProducts[_id].names.push(_name);\n Products[_id].period.push(_period);\nProducts[_id].pricesFixed.push(_pricesFixed);\nProducts[_id].location.push(_location);\nProducts[_id].expenditure.push(_expenditure);\nemit ProductUpdation(msg.sender, _name, _pricesFixed, _location);\n               \n}\n\n\n//Enter Product details by Retailer\n\nfunction RetialerDetails(uint _id,uint _sales,\nuint _stockReceived,uint _price,uint _percent,string memory _location) public IsOwner(_id) {\n     \n    require(Products[_id].state==State.Retailer,"Not in Retailer state");\n\n  RetialDetails[_id]=RetailerStage(Products[_id].id,_sales,_stockReceived,_price,_percent,_location);\n  Products[_id].state=State.Customer;\n\n}\n\n\n//Customer Review for the product\n\nfunction CustomerReview(uint _id,uint8 _quality,\nuint8 _rating,string memory _description,\nstring memory _priceReview)public {\nrequire(_rating<=5,"Rating is must less than 5!");\n\nrequire(_quality<=100,"quality less than 100");\n\nrequire(Products[_id].state==State.Customer,"Not Customer Stage");\n\n ProductReview[_id]=Review(_id,_quality,_rating,_description,_priceReview);\n\n\n}\n\n\n//Stage of a Product \nfunction ProductStage(uint _id)public view returns (State){\n    return Products[_id].state;\n}\n//getting product\n\nfunction getProduct(uint _id)public view returns(Product memory){\n    return Products[_id];\n\n}\n\n\n}\n\n\n\n}'},{id:3,title:"Flight Booking System",description:"A decentralized flight booking platform that revolutionizes the airline ticket booking process. This smart contract enables direct interaction between airlines and passengers, eliminating intermediaries and reducing booking costs while ensuring secure transactions.\n\nKey Features:\n- Direct airline-passenger booking\n- Automated payment processing\n- Secure check-in system\n- Transparent refund mechanism\n- Review and rating system\n- Real-time seat availability tracking",securityLevel:"High",scope:["Flight management system","Secure booking process","Payment processing","Check-in automation","Refund handling","Review system","Seat inventory management"],functionalities:["Flight creation by airlines","Secure seat booking with payment","Automated check-in process","Transparent refund processing","Customer review system","Real-time seat tracking","Payment security measures"],code:'\n    // SPDX-License-Identifier: MIT\npragma solidity >=0.7.0 <0.9.0;\n\nimport "@openzeppelin/contracts/utils/Counters.sol";\n\ncontract FlightBooking {\n    using Counters for Counters.Counter;\n    Counters.Counter private _totalFlights;\n\n    struct FlightStruct {\n        uint id;\n        string flightNumber;\n        string departure;\n        string arrival;\n        string date;\n        uint totalSeats;\n        uint pricePerSeat;\n        uint availableSeats;\n        address airline;\n        bool isActive;\n        bool isDeleted;\n        uint timestamp;\n    }\n\n    struct BookingStruct {\n        uint id;\n        address passenger;\n        uint seatCount;\n        uint totalPrice;\n        bool checkedIn;\n        bool cancelled;\n        uint bookingDate;\n    }\n\n    struct ReviewStruct {\n        uint id;\n        uint flightId;\n        string reviewText;\n        uint timestamp;\n        address owner;\n    }\n\n    event SecurityFeeUpdated(uint newFee);\n\n    uint public securityFee;\n    uint public taxPercent;\n\n    mapping(uint => FlightStruct) flights;\n    mapping(uint => BookingStruct[]) bookingsOf;\n    mapping(uint => ReviewStruct[]) reviewsOf;\n    mapping(uint => bool) flightExist;\n    mapping(address => mapping(uint => bool)) hasBooked;\n\n    constructor(uint _taxPercent, uint _securityFee) {\n        taxPercent = _taxPercent;\n        securityFee = _securityFee;\n    }\n\n    function createFlight(\n        string memory flightNumber,\n        string memory departure,\n        string memory arrival,\n        string memory date,\n        uint totalSeats,\n        uint pricePerSeat\n    ) public {\n        require(bytes(flightNumber).length > 0, "Flight Number cannot be empty");\n        require(bytes(departure).length > 0, "Departure cannot be empty");\n        require(bytes(arrival).length > 0, "Arrival cannot be empty");\n        require(bytes(date).length > 0, "Date cannot be empty");\n        require(totalSeats > 0, "Seats cannot be zero");\n        require(pricePerSeat > 0 ether, "Price cannot be zero");\n\n        _totalFlights.increment();\n        FlightStruct memory flight;\n        flight.id = _totalFlights.current();\n        flight.flightNumber = flightNumber;\n        flight.departure = departure;\n        flight.arrival = arrival;\n        flight.date = date;\n        flight.totalSeats = totalSeats;\n        flight.availableSeats = totalSeats;\n        flight.pricePerSeat = pricePerSeat;\n        flight.airline = msg.sender;\n        flight.isActive = true;\n        flight.timestamp = block.timestamp;\n\n        flightExist[flight.id] = true;\n        flights[_totalFlights.current()] = flight;\n    }\n\n    function checkInFlight(uint id, uint bookingId) public {\n        require(msg.sender == bookingsOf[id][bookingId].passenger, "Unauthorized passenger");\n        require(!bookingsOf[id][bookingId].checkedIn, "Already checked-in");\n\n        bookingsOf[id][bookingId].checkedIn = true;\n        uint price = bookingsOf[id][bookingId].totalPrice;\n        uint fee = (price * taxPercent) / 100;\n\n        payTo(flights[id].airline, (price - fee));\n        payTo(msg.sender, securityFee);\n    }\n\n    function refundBooking(uint id, uint bookingId) public {\n        require(!bookingsOf[id][bookingId].checkedIn, "Already checked-in");\n        require(msg.sender == bookingsOf[id][bookingId].passenger, "Unauthorized passenger");\n\n        bookingsOf[id][bookingId].cancelled = true;\n        flights[id].availableSeats += bookingsOf[id][bookingId].seatCount;\n\n        uint refundAmount = bookingsOf[id][bookingId].totalPrice - securityFee;\n        payTo(msg.sender, refundAmount);\n    }\n\n    function payTo(address to, uint256 amount) internal {\n        (bool success, ) = payable(to).call{value: amount}("");\n        require(success);\n    }\n}\n\n}'},{id:4,title:"Automated Market Maker (AMM)-Gold And Diamond",description:"A decentralized AMM allowing users to swap between Gold and Diamond tokens with liquidity pooling and automated pricing.",securityLevel:"High",scope:["Liquidity provisioning","Token swapping","Automated price calculation","Trading fee mechanism","Reserve tracking"],functionalities:["Liquidity providers can add Gold and Diamond tokens","Swaps between Gold and Diamond with dynamic pricing","Automated price calculation based on reserve ratios","0.3% trading fee applied to swaps","Ensures fair asset exchange and liquidity stability"],code:'// SPDX-License-Identifier: MIT\n      pragma solidity ^0.8.20;\n      \n      import "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n      \n      contract GoldToken is ERC20 {\n          constructor() ERC20("GoldToken", "GOLD") {\n              _mint(msg.sender, 100000 * 10 ** decimals());\n          }\n      }\n      \n      contract DiamondToken is ERC20 {\n          constructor() ERC20("DiamondToken", "DIAMOND") {\n              _mint(msg.sender, 50000 * 10 ** decimals());\n          }\n      }\n      \n      contract AMM {\n          IERC20 public gold;\n          IERC20 public diamond;\n          uint256 public reserveGold;\n          uint256 public reserveDiamond;\n          \n          constructor(address _gold, address _diamond) {\n              gold = IERC20(_gold);\n              diamond = IERC20(_diamond);\n          }\n      \n          function addLiquidity(uint256 goldAmount, uint256 diamondAmount) external {\n              gold.transferFrom(msg.sender, address(this), goldAmount);\n              diamond.transferFrom(msg.sender, address(this), diamondAmount);\n              reserveGold += goldAmount;\n              reserveDiamond += diamondAmount;\n          }\n      \n          function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) public pure returns (uint256) {\n              require(amountIn > 0 && reserveIn > 0 && reserveOut > 0, "Invalid reserves");\n              uint256 amountInWithFee = amountIn * 997;\n              uint256 numerator = amountInWithFee * reserveOut;\n              uint256 denominator = (reserveIn * 1000) + amountInWithFee;\n              return numerator / denominator;\n          }\n      \n          function swapGoldForDiamond(uint256 goldAmount) external {\n              uint256 diamondAmount = getAmountOut(goldAmount, reserveGold, reserveDiamond);\n              require(diamondAmount > 0, "Insufficient output amount");\n              \n              gold.transferFrom(msg.sender, address(this), goldAmount);\n              diamond.transfer(msg.sender, diamondAmount);\n              \n              reserveGold += goldAmount;\n              reserveDiamond -= diamondAmount;\n          }\n      \n          function swapDiamondForGold(uint256 diamondAmount) external {\n              uint256 goldAmount = getAmountOut(diamondAmount, reserveDiamond, reserveGold);\n              require(goldAmount > 0, "Insufficient output amount");\n              \n              diamond.transferFrom(msg.sender, address(this), diamondAmount);\n              gold.transfer(msg.sender, goldAmount);\n              \n              reserveDiamond += diamondAmount;\n              reserveGold -= goldAmount;\n          }\n      }'},{id:5,title:"Coffee Shop Loyalty Program",description:"A blockchain-based coffee shop reward system where customers earn tokens for buying coffee and can redeem them after reaching a purchase limit.",securityLevel:"Medium",scope:["Customer registration","Coffee purchase tracking","Token claim system","Admin limit control"],functionalities:["Customers register with a unique name","Buy coffee using ETH, tracked in the contract","Tokens rewarded after reaching a set purchase limit","Owner can modify the coffee purchase limit for rewards","Customers can claim tokens if the contract has sufficient balance"],code:'// SPDX-License-Identifier: MIT\n      pragma solidity ^0.8.0;\n      \n      import "@openzeppelin/contracts/token/ERC20/IERC20.sol";\n      \n      contract coffeeShop {\n      \n          uint public limit;\n          address public owner;\n          IERC20 public CFT;\n      \n          constructor(uint _limit,address _cft){\n              CFT = IERC20(_cft);\n              limit = _limit;\n              owner = msg.sender;\n          }\n      \n          struct customer {\n              string name;\n              uint tokens;\n              uint coffee;\n              bool exist;\n          }\n      \n          mapping(address => customer) public customers;\n      \n          event addEvent(string name, uint time);\n      \n          function AddCustomer(string memory _name) public {\n              require(!customers[msg.sender].exist, "Already customer exists");\n              customers[msg.sender] = customer(_name, 0, 0, true);\n              emit addEvent(_name, block.timestamp);\n          }\n      \n          event buyEvent(address addr, string name, uint amount, uint coffee);\n      \n          function BuyCoffee() public payable {\n              require(msg.value >= 0.01 ether, "Price too low!");\n              uint bought = msg.value / 0.01 ether;\n              customers[msg.sender].coffee = bought;\n              emit buyEvent(msg.sender, customers[msg.sender].name, msg.value, bought);\n          }\n      \n          modifier OnlyOwner(){\n              require(msg.sender == owner, "Not the Owner");\n              _;\n          }\n      \n          function changeLimit(uint _limit) public OnlyOwner {\n              limit = _limit;\n          }\n      \n          event claimEvent(address addr, uint tokens);\n      \n          function claimToken() public {\n              require(customers[msg.sender].exist, "Customer does not exist!");\n              require(customers[msg.sender].coffee >= limit, "You have to buy some coffees!");\n      \n              uint value = customers[msg.sender].coffee;\n              uint tokens = value / limit;\n      \n              require(CFT.balanceOf(address(this)) >= tokens, "Not enough tokens in contract!");\n      \n              CFT.transfer(msg.sender, tokens);\n              customers[msg.sender].coffee = 0;\n              emit claimEvent(msg.sender, tokens);\n          }\n      }'}];const I=function(){const[e,n]=(0,i.useState)(1),[t,a]=(0,i.useState)(null),o=Math.ceil(C.length/1),c=1*e,d=c-1,u=C.slice(d,c),m=e=>{n(e)},p=e=>{switch(e){case"High":return"success";case"Medium":return"warning";case"Low":return"danger";default:return"secondary"}};let g=[];for(let i=1;i<=o;i++)g.push((0,l.jsx)(P.Item,{active:i===e,onClick:()=>m(i),children:i},i));return(0,l.jsxs)(_.A,{className:"py-5",children:[(0,l.jsx)("h1",{className:"text-center mb-5",children:"Smart Contract Projects"}),u.map((e=>(0,l.jsx)(w.A,{className:"mb-4 shadow-sm",children:(0,l.jsxs)(w.A.Body,{children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[(0,l.jsx)(w.A.Title,{as:"h2",className:"mb-0",children:e.title}),(0,l.jsxs)(k.A,{bg:p(e.securityLevel),className:"d-flex align-items-center gap-2",children:[(0,l.jsx)(r.A,{size:16}),e.securityLevel," Security"]})]}),(0,l.jsx)(w.A.Text,{className:"text-muted mb-4",style:{whiteSpace:"pre-line"},children:e.description}),(0,l.jsxs)(x.A,{className:"mb-4",children:[(0,l.jsxs)(N.A,{md:6,children:[(0,l.jsx)("h3",{className:"h5 mb-3",children:"Project Scope"}),(0,l.jsx)("ul",{className:"list-unstyled",children:e.scope.map(((e,n)=>(0,l.jsxs)("li",{className:"mb-2",children:["\u2022 ",e]},n)))})]}),(0,l.jsxs)(N.A,{md:6,children:[(0,l.jsx)("h3",{className:"h5 mb-3",children:"Key Functionalities"}),(0,l.jsx)("ul",{className:"list-unstyled",children:e.functionalities.map(((e,n)=>(0,l.jsxs)("li",{className:"mb-2",children:["\u2022 ",e]},n)))})]})]}),(0,l.jsxs)(S,{variant:"primary",onClick:()=>a((null===t||void 0===t?void 0:t.id)===e.id?null:e),className:"d-flex align-items-center gap-2",children:[(0,l.jsx)(s.A,{size:20}),(null===t||void 0===t?void 0:t.id)===e.id?"Hide Code":"View Smart Contract"]}),(null===t||void 0===t?void 0:t.id)===e.id&&(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)("pre",{className:"bg-dark text-light p-4 rounded",children:(0,l.jsx)("code",{children:e.code})})})]})},e.id))),(0,l.jsx)("div",{className:"d-flex justify-content-center mt-4",children:(0,l.jsxs)(P,{children:[(0,l.jsx)(P.First,{onClick:()=>m(1),disabled:1===e}),(0,l.jsx)(P.Prev,{onClick:()=>m(e-1),disabled:1===e}),g,(0,l.jsx)(P.Next,{onClick:()=>m(e+1),disabled:e===o}),(0,l.jsx)(P.Last,{onClick:()=>m(o),disabled:e===o})]})})]})}},8602:(e,n,t)=>{t.d(n,{A:()=>d});var i=t(8139),r=t.n(i),s=t(5043),a=t(7852),o=t(579);const c=s.forwardRef(((e,n)=>{const[{className:t,...i},{as:s="div",bsPrefix:c,spans:d}]=function(e){let{as:n,bsPrefix:t,className:i,...s}=e;t=(0,a.oU)(t,"col");const o=(0,a.gy)(),c=(0,a.Jm)(),d=[],l=[];return o.forEach((e=>{const n=s[e];let i,r,a;delete s[e],"object"===typeof n&&null!=n?({span:i,offset:r,order:a}=n):i=n;const o=e!==c?`-${e}`:"";i&&d.push(!0===i?`${t}${o}`:`${t}${o}-${i}`),null!=a&&l.push(`order${o}-${a}`),null!=r&&l.push(`offset${o}-${r}`)})),[{...s,className:r()(i,...d,...l)},{as:n,bsPrefix:t,spans:d}]}(e);return(0,o.jsx)(s,{...i,ref:n,className:r()(t,!d.length&&c)})}));c.displayName="Col";const d=c},8628:(e,n,t)=>{t.d(n,{A:()=>j});var i=t(8139),r=t.n(i),s=t(5043),a=t(7852),o=t(579);const c=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:i,as:s="div",...c}=e;return i=(0,a.oU)(i,"card-body"),(0,o.jsx)(s,{ref:n,className:r()(t,i),...c})}));c.displayName="CardBody";const d=c,l=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:i,as:s="div",...c}=e;return i=(0,a.oU)(i,"card-footer"),(0,o.jsx)(s,{ref:n,className:r()(t,i),...c})}));l.displayName="CardFooter";const u=l;var m=t(1778);const p=s.forwardRef(((e,n)=>{let{bsPrefix:t,className:i,as:c="div",...d}=e;const l=(0,a.oU)(t,"card-header"),u=(0,s.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,o.jsx)(m.A.Provider,{value:u,children:(0,o.jsx)(c,{ref:n,...d,className:r()(i,l)})})}));p.displayName="CardHeader";const g=p,f=s.forwardRef(((e,n)=>{let{bsPrefix:t,className:i,variant:s,as:c="img",...d}=e;const l=(0,a.oU)(t,"card-img");return(0,o.jsx)(c,{ref:n,className:r()(s?`${l}-${s}`:l,i),...d})}));f.displayName="CardImg";const h=f,b=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:i,as:s="div",...c}=e;return i=(0,a.oU)(i,"card-img-overlay"),(0,o.jsx)(s,{ref:n,className:r()(t,i),...c})}));b.displayName="CardImgOverlay";const y=b,v=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:i,as:s="a",...c}=e;return i=(0,a.oU)(i,"card-link"),(0,o.jsx)(s,{ref:n,className:r()(t,i),...c})}));v.displayName="CardLink";const P=v;var _=t(4488);const w=(0,_.A)("h6"),k=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:i,as:s=w,...c}=e;return i=(0,a.oU)(i,"card-subtitle"),(0,o.jsx)(s,{ref:n,className:r()(t,i),...c})}));k.displayName="CardSubtitle";const x=k,N=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:i,as:s="p",...c}=e;return i=(0,a.oU)(i,"card-text"),(0,o.jsx)(s,{ref:n,className:r()(t,i),...c})}));N.displayName="CardText";const A=N,R=(0,_.A)("h5"),S=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:i,as:s=R,...c}=e;return i=(0,a.oU)(i,"card-title"),(0,o.jsx)(s,{ref:n,className:r()(t,i),...c})}));S.displayName="CardTitle";const C=S,I=s.forwardRef(((e,n)=>{let{bsPrefix:t,className:i,bg:s,text:c,border:l,body:u=!1,children:m,as:p="div",...g}=e;const f=(0,a.oU)(t,"card");return(0,o.jsx)(p,{ref:n,...g,className:r()(i,f,s&&`bg-${s}`,c&&`text-${c}`,l&&`border-${l}`),children:u?(0,o.jsx)(d,{children:m}):m})}));I.displayName="Card";const j=Object.assign(I,{Img:h,Title:C,Subtitle:x,Body:d,Link:P,Text:A,Header:g,Footer:u,ImgOverlay:y})}}]);
//# sourceMappingURL=370.54dbd070.chunk.js.map