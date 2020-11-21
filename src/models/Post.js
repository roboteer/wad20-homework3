import Author from './Author.js'
export default class Post {
/*
    constructor(title, date, post_src, author){
        this.title = title;
        this.date = date;
        this.post_src = post_src;
        this.author = author;
    }
/*author: (...)
createTime: (...)
id: (...)
likes: (...)
media: (...)
text: (...)
*/
    constructor(raw){
    //slightly mangled data structure, different from API. Just because.
        this.id = raw.id;
        this.date = raw.createTime;
        this.title = raw.text || '';
        this.likes = raw.likes;

        this.type =  'text';
        this.post_src = '';
        if (raw.media) { //could be null
            this.type = raw.media.type || 'text';
            this.post_src = raw.media.url || '';
        }

        this.author = new Author(raw.author.firstname || '', raw.author.lastname || '', raw.author.avatar||'');
    }
/**/
}