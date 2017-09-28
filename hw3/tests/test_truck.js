console.log(myTruck.createOrder({emailAddress: 'me@goldfinger.com', coffee: 'double mocha'}));
console.log(myTruck.createOrder({emailAddress: 'dr@no.com', coffee: 'decaf'}));
console.log(myTruck.createOrder({emailAddress: 'm@bond.com', coffee: 'earl grey'}));
console.log(myTruck.printOrders());
console.log(myTruck.deliverOrder('dr@no.com'));
console.log(myTruck.deliverOrder('m@bond.com'));
console.log(myTruck.printOrders());
