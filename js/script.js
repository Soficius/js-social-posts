//* milestone 1
const posts = [
    {
        id: 1, 
        author:'Pepito Guzman', 
        img:'https://unsplash.it/300/300?image=3',
        date: '06-04-2022',
        testo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt enim ac efficitur aliquam. Nullam at ante nisl. Proin pharetra finibus mi, vel accumsan diam gravida vel. Donec eu porta lectus. Proin iaculis velit id pulvinar viverra. Donec id scelerisque ante, vitae pharetra libero. Suspendisse potenti. Fusce varius lacus eros, non ultricies lectus pulvinar et. Praesent mollis pharetra sem, finibus posuere metus venenatis elementum. Curabitur neque mi, dignissim eu consequat nec, placerat sed augue. Duis finibus, nulla vitae scelerisque ullamcorper, nulla nulla dignissim justo, vitae tempor elit dui vel magna. Suspendisse nec justo dui. Nulla efficitur sapien lorem, et tempus leo fringilla sit amet. Fusce lorem velit, tincidunt et metus quis, hendrerit scelerisque est.',
        photo:'https://unsplash.it/300/300?image=22', 
        likes: 35

    },
    {
        id: 2, 
        author:'Pedro San', 
        img:'https://unsplash.it/300/300?image=10',
        date: '06-08-2022',
        testo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt enim ac efficitur aliquam. Nullam at ante nisl. Proin pharetra finibus mi, vel accumsan diam gravida vel. Donec eu porta lectus. Proin iaculis velit id pulvinar viverra. Donec id scelerisque ante, vitae pharetra libero. Suspendisse potenti. Fusce varius lacus eros, non ultricies lectus pulvinar et. Praesent mollis pharetra sem, finibus posuere metus venenatis elementum. Curabitur neque mi, dignissim eu consequat nec, placerat sed augue. Duis finibus, nulla vitae scelerisque ullamcorper, nulla nulla dignissim justo, vitae tempor elit dui vel magna. Suspendisse nec justo dui. Nulla efficitur sapien lorem, et tempus leo fringilla sit amet. Fusce lorem velit, tincidunt et metus quis, hendrerit scelerisque est.',
        photo:'https://unsplash.it/300/300?image=30', 
        likes: 90

    },
]


// * milestone 2
const createPost = (postData) =>{
    const {id,author,img,date,testo,photo,likes} = postData
    const post = ` 
    <div class="post__header">
            <div class="post-meta">
            <div class="post-meta__icon">
                    <img class="profile-pic" src="${photo}" alt="${author}" />
                    </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author}</div>
                    <div class="post-meta__time">${date}</div>
                </div>
            </div>
        </div>
        <div class="post__text">
        ${testo}
        </div>
        <div class="post__image">
            <img src="${img}" alt="" />
            </div>
            <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                <a id="like-button-${id}" class="like-button js-like-button" onclick="onLikePost(${id})" data-postid="${id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                        </a>
                        </div>
                <div class="likes__counter">Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone</div>
            </div>
        </div>`
    const postEl = document.createElement('div')
    postEl.classList.add('post')
    postEl.innerHTML = post
    return postEl
}
const container = document.getElementById('container')
for(const data of posts){
    container.appendChild(createPost(data))
}

// #Milestone 3
function onLikePost(id){
    const button =  document.getElementById(`like-button-${id}`)
    const counter = document.getElementById(`like-counter-${id}`)
    const post = getPostById(id)
    if(button.classList.contains('like-button--liked')){
        button.classList.remove('like-button--liked')
        post.likes--
    }else{
        button.classList.add('like-button--liked')
        post.likes++
    }
    counter.innerText = post.likes
}

function getPostById(id){
    for(const post of posts){
        if(post.id === id) return post
    }
}