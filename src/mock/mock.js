/**
 * Created by lihualong on 2017/6/17.
 */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import config from '../api/config'


var mock=new MockAdapter(axios,{ delayResponse: 2000 });

/*登录*/
mock.onPost(config.login).reply(function(config){
  console.log('login mock data')
    console.log(config)
  /*axios的结果*/
    return[200,{code:1,message:'',user:{username:'aaa',id:''}}];

});

mock.onGet(config.getUserList).reply(function (config) {
  return[200,{}];
})


