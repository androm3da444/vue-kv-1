import axios from axios;

const url = 'http://localhost:5000/api/posts/';

class PostService {
    //Get posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    //Create posts
    static insertPost() {
        return axios.post(url, {
            text
        });
    }

    //Delete posts
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;