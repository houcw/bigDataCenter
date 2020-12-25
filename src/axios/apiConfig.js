//请求ip
const apiConfig = {
  // state: process.env.NODE_ENV === 'production' ? 3 : 2 ,//0本地  1研发dev  2测试test  3生产product
  // state : 1,
  apiFun() {
    // console.log('switch env---'+process.env.NODE_ENV);
    let state = 0;
    const _env = process.env.NODE_ENV;
    // console.log(_env);
    switch(_env){
      case 'develop':
        state = 1; break;
      case 'test':
        state = 2; break;
      case 'production':
        state = 3; break;
      case 'development':
        state = 2; break;
      default :
        state = 3;
    }
    let baseUrl = {};
    switch (1) {
      case 1:
        baseUrl = {
          // 线上测试环境
          // api:'http://106.13.72.113:3110/service-center',
          // 线上正式环境
          // api:'https://center.innjoysmart.com/service-center'
        };
        break;
      case 2:
        baseUrl = {
          api: 'https://test-smartlink.innjoysmart.com/api',
        };
        break;
      case 3:
        baseUrl = {
          api: 'https://smartlink.innjoysmart.com/api',
        };
        break;
      default:
        // baseUrl = {
        //   api:  'http://10.7.16.135:3103',//基础数据模块（smartLink）
        //   api1: 'http://10.7.16.135:3102',//智能模块(王晨东)
        //   api2: 'http://10.7.16.135:3105',//入住管理(高阳)
        // };
        break;
    }
    return baseUrl
  }
};

export default apiConfig.apiFun()
