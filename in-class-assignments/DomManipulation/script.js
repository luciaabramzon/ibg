document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
  
    if (title && content) {
    const date=new Date().toLocaleDateString()
    const postId=new Date().getTime()
    let postHtml=`
        <div class='post' id=${postId}>
       <h4> ${title}</h4>
       <p> ${content}</p>
       <p>${date}</p>
       <div class='buttons'>
       <button id='delete-${postId}' class='postButton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
       <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
     </svg></button>
      <div class='likes'> 
     <p id='likeCount-${postId}'>0</p><button id='like-${postId}' class='postButton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
       <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
     </svg></button>
     </div>
     </div>
       </div>`
    

    document.getElementById('posts').insertAdjacentHTML('afterbegin',postHtml)

    document.getElementById('title').value=' '
    document.getElementById('content').value=' '

    const post=document.getElementById(`${postId}`)
    const deleteButtons=document.getElementById(`delete-${postId}`)
      deleteButtons.addEventListener('click',function(){
        post.remove()
      })

      const likebutton=document.getElementById(`like-${postId}`)
      likebutton.addEventListener('click',function(){
        const likeC=document.getElementById(`likeCount-${postId}`)
        let likeCount=parseInt(likeC.textContent)
        likeCount++
        likeC.textContent=likeCount
        
      })
    }

})