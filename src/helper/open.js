const {exec} = require('child_process');

module.exports=url=>{
  switch (process.platform) {
      case 'darwin':
          exec(`open${url}`);
          break;
      case 'win2':
          exec(`start ${url}`);
          break;
  }
};
