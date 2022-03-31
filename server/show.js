let fs = require('fs')
let mongoose = require('mongoose');
let User = require('./models/user')
let Followed = require('./models/followed');
let Follow = require('./models/follow');
mongoose.connect(
  'mongodb://eggraise100.de/hama645?authSource=admin',
  {
    useNewUrlParser: true,
    user: 'admin',
    pass: 'GleCl0p1ZV'
  }
);
let db = mongoose.connection;
db.once('open', () => {
  console.log('Successed connecting to DB');
  main();
});

async function main() {
  try {
    const stream = fs.createWriteStream('result.txt');
    let users = await User.find({}).exec();
    for(let user of users){
      stream.write(`[${user.email}]\n`);
      let followeds = await Followed.find({email: user.email}).exec();
      followeds = followeds.filter(el => Number(el.timestamp) > new Date('2022/03/24').getTime());
      let kinds = [];
      followeds.forEach(el => {
        if(!kinds.includes(el.screen_name)){
          kinds.push(el.screen_name);
        }
      });
      console.log(kinds);
      for(let kind of kinds){
        stream.write(`\n*** ${kind} ***\n`);
        let follow = await Follow.findOne({email: user.email, screen_name: kind}).exec();
        let counter = 0;
        let sum = 0;
        let pre_data = undefined;
        for(let followed of followeds.filter(el => el.screen_name === kind)){
          stream.write(`${new Date(Number(followed.timestamp)).toString()} ${followed.screen_name} ${followed.timestamp}\n`);
          if(pre_data){
            if(Number(followed.timestamp) < pre_data){
              console.log('error');
              return;
            }
            if((Number(followed.timestamp) - pre_data) <= (follow.range_max * 60 * 1000)){
              counter++;
              sum += Number(followed.timestamp) - pre_data;
            }
          }
          pre_data = Number(followed.timestamp);
        }
        stream.write(`Wait time ave: ${Math.floor((sum / counter) / (60 * 1000))} min\n`);
      }
    } 
    console.log('Done');
  }
  catch(error){
    console.log(error);
    return;
  }
}
