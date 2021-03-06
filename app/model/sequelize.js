import Sequelize from 'sequelize';
/*
创建 Sequelize实例
 */
const sequelize = new Sequelize(
  'koa2', // 数据库名
  'root', // 用户名
  '123', // 用户密码
  {
    'dialect': 'mysql',
    'host': 'localhost',
    'port': 3306,
    'timezone': '+08:00',
    'define': {
      // 'underscored': true, // 字段以下划线（_）来分割（默认是驼峰命名风格）
    },
  }
);
sequelize
  .authenticate()
  .then(function() {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

export default sequelize;
