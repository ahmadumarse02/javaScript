//textContent

{
  const element = document.getElementById("example");

  // Get the current text content (ignores the <strong> tag)
  console.log(element.textContent); // Outputs: "Hello, world!"

  // Set new text content (this will remove any HTML inside the element)
  element.textContent = "New text content!";
}

//innerHTML

{
  const element = document.getElementById("example");

  // Get the current HTML content
  console.log(element.innerHTML); // Outputs: "Hello, <strong>world</strong>!"

  // Set new HTML content
  element.innerHTML = "New text <em>with HTML</em>";
}

// innerText

{
  const element = document.getElementById("example1");

  // Get the text content (ignores hidden content)
  console.log(element.innerText); // Outputs: "" (because the element is hidden)

  // Set new inner text
  element.innerText = "Visible text only!";
}
