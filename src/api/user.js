import request from '../utils/request'

// 登录
export function userLogin(username,userpassword) {
    return request({
        url: 'api/user/login',
        method: 'post',
        // headers: {
        //     isToken: false
        //   },
        data: {'username':username,'userpassword':userpassword}
    })
}

export function userRegister(username,userpassword,email,sex) {
    return request({
        url: 'api/user/register',
        method: 'post',
        // headers: {
        //     isToken :false
        // },
        data: {"username":username,"email":email,"userpassword":userpassword,"sex":sex}
    })
}


export function logout() {
    return request({
        url: 'api/user/logout',
        method: 'post'
    })
}

export function getUserInfo(userId) {
    return request ({
        url: '/user/userInfo',
        method: 'get',
        params: {"userId":userId}
    })
}


export function savaUserInfo(data) {
    return request({
        url: 'api/info/saveUserInfo',
        method: 'put',
        data: data
    })
}

export function getInfoText(){
    return request({
        url:'/api/info/getUserInfo'
    })
}
