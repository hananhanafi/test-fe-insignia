import Repository, { baseUrl, serializeQuery } from './Repository';

class DummyAPI {
    async getUserList(params){
        return new Promise(async(resolve,reject)=>{
            const url = `${baseUrl}/user?${serializeQuery(params)}`;
            await Repository.get(url)
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            });
        })
    }
    async getPostList(params){
        return new Promise(async(resolve,reject)=>{
            const url = `${baseUrl}/post?${serializeQuery(params)}`;
            await Repository.get(url)
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            });
        })
    }
    async getCommentList(params){
        return new Promise(async(resolve,reject)=>{
            const url = `${baseUrl}/comment?${serializeQuery(params)}`;
            await Repository.get(url)
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            });
        })
    }
}

export default new DummyAPI;