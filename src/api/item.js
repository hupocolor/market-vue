import request from '../utils/request'

export function getItemList(query){
    return request({
        url: '/api/item/getItemList',
        method: 'get',
        params:query
    })
}

export function getItemInfo(id){
    return request({
        url: 'api/item/' + id,
        method: 'get',
      })
}

export function addSellItem(name,category,description,image,price,trade,level){
    return request({
        url: 'api/item/addItem',
        method: 'post',
        data:{"name":name,"category":category,"description":description,"image":image,"price":price,"trade":trade,"level":level}
    })
}