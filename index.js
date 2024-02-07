//console.log("Hello world")
let message = document.querySelector('#message')

const addMovie = submit => {
    submit.preventDefault()

    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value

    // part 4 addition
    movieTitle.addEventListener('click', crossOffMovie)
    // end of part 4

    movie.appendChild(movieTitle)

    // step 3
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    // end of step 3 addition
    const list = document.querySelector('ul')
    list.appendChild(movie)

    inputField.value = ' '
}

const deleteMovie = event => {
    event.target.parentNode.remove()

    message.textContent = 'Movie deleted!'
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

const submit = document.querySelector('form')
if(submit) {
    submit.addEventListener('submit', addMovie)
}