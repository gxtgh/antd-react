import Mock from 'mockjs';

//登录
export const login = Mock.mock('/user/login','post', function (config) {
    let {account } = JSON.parse(config.body);
    let result = {
      code: 200,
      message: 'OK',
      data: {
        token:'123456',
        account
      }
    }
    return result
});