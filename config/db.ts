let LOCAL = false

let HostName, URI;

if(LOCAL){
    URI = "mongodb://localhost/contacts";
    HostName = "localhost"
}else{
    URI = "mongodb+srv://abhinavsaini0004:25QZJ9t6pQqaemB4@cluster0.pi2hxhq.mongodb.net/'";
    HostName = "MongoDB Atlas"
}

export { HostName, URI }
export const SessionSecret = "INFT2202SessionSecret";