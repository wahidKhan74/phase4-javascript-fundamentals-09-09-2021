let userMap = new Map();

//use set method to add key value in map
userMap.set("id",1000001);  // key is string & value is number
userMap.set("email","john.smith@gmail.com");  // key is string & value is string
userMap.set(100001,"John Smith");  // key is number & value is string
userMap.set(true,"married");  // key is boolean & value is string
userMap.set(null,"empty");  // key is null & value is string

console.log(userMap);

//access value from map
console.log(userMap.get(100001));
console.log(userMap.get("id"));
console.log(userMap.get(null));

console.log("Keys ", userMap.keys());
console.log("Value ", userMap.values());

// iterate over each key value pair
for(let key of userMap.keys()){
    console.log("Key : "+key +" , value: "+userMap.get(key));
}