// get accessibility issues
let issues
async function fetchData(e) {
    e.preventDefault()
    const url = document.querySelector("#url").value
    const response = await fetch(`/api/test?url=${url}`)
    const data = await response.json()
    displayIssues(data.issues)
}

function escapeHTML(html) {
    return html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}
// add issues to DOM
function displayIssues(issues) {
    const container = document.querySelector(".container")
    console.log(issues)
    issues.forEach((issue) => {
        const output = document.createElement("div")
        output.classList.add("card")
        output.classList.add("my-5")
        output.classList.add("bg-dark")
        output.classList.add("p-3")
        output.classList.add("text-light")
        output.innerHTML = `
            <h4>${issue.message}</h4>
            <p class="bg-dark text-light p-3 my-3">${escapeHTML(issue.context)}</p>
            <p class="bg-secondary text-light p-2">CODE: ${issue.code}</p>
            `
        container.append(output)

    })
}



// escape html

// add event listener
document.addEventListener("submit", fetchData)