import Mock from 'mockjs';

export default [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { account, password } = config.query;
      return {
        code: 0,
        message: '登录成功',
        data: {
          token: '123456',
          account,
          password
        }
      }
    }
  }
]