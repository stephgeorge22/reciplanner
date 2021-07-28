async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('.post-title').value;
  const youtube_url = document.querySelector('.youtube-url').value;
  const description = document.querySelector('.description').value;

  const response = await fetch(`/api/recipes`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      youtube_url,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
